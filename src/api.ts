import { defineOperationApi } from "@directus/extensions-sdk";

import axios from "axios";

type Options = {
  collection: string;
  fields: string[];
  pageSize: number;
  filter: string;
};

export default defineOperationApi<Options>({
  id: "escape-index-with-meilisearch",
  handler: async (
    { collection, fields, pageSize, filter },
    { services, env, getSchema, database, accountability, logger }
  ) => {
    const meilisearchUrl = env.MEILISEARCH_URL + "/_bulk";
    const limit = pageSize ?? 200;
    const finalFilter = filter ?? undefined;

    logger.info(
      `Indexing collection: ${collection} with meilisearch url: ${meilisearchUrl}`
    );
    logger.info("with fields: " + JSON.stringify(fields));
    if (finalFilter) {
      logger.info("with filter: " + JSON.stringify(finalFilter));
    }

    const schema = await getSchema({ database });

    const { ItemsService } = services;

    const itemsService = new ItemsService(collection, {
      schema,
      accountability,
    });

    const loadData = async (page: number, limit: number) => {
      const items = await itemsService.readByQuery({
        fields,
        limit,
        page,
        filter: finalFilter,
      });

      logger.info(`Nb of items to index: ${items.length}`);
      return items;
    };

    const indexData = async (items: any) => {
      const json: any[] = [];
      items.forEach((item: any) => {
        json.push({
          index: {
            _index: collection.toLowerCase(),
            _id: item.id,
          },
        });
        json.push(item);
      });
      // @ts-ignore
      const body = json.map(JSON.stringify).join("\n") + "\n";

      try {
        const response = await axios.post(meilisearchUrl, body, {
          headers: {
            "Content-Type": "application/x-ndjson",
          },
        });
        return response.data;
      } catch (error: any) {
        logger.error(error.response);
        throw error;
      }
    };

    const indexItems = async () => {
      // index items from collection
      let page = 0;

      const result = {
        nbIndexed: 0,
      };

      try {
        let items = null;

        while (!items || items.length === limit) {
          page++;
          logger.info(`Indexing items page ${page} with limit ${limit}`);
          items = await loadData(page, limit);
          await indexData(items);
          result.nbIndexed += items.length;
        }
        return result;
      } catch (error: any) {
        throw error;
      }
    };

    return await indexItems();
  },
});
