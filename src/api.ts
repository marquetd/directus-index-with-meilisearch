import { defineOperationApi } from "@directus/extensions-sdk";
import { Meilisearch } from "meilisearch";

type Options = {
  collection: string;
  fields: string[];
  filterableattributes: string[];
  pageSize: number;
  filter: string;
};

export default defineOperationApi<Options>({
  id: "escape-index-with-meilisearch",
  handler: async (
    { collection, fields, pageSize, filter, filterableattributes },
    { services, env, getSchema, database, accountability, logger }
  ) => {
    const meilisearchUrl = env.MEILISEARCH_URL;
    const meilisearchApiKey = env.MEILISEARCH_API_KEY;
    const limit = pageSize ?? 300;
    const finalFilter = filter ?? undefined;

    logger.info(
      `Indexing collection: ${collection} with meilisearch url: ${meilisearchUrl}`
    );
    logger.info("with fields: " + JSON.stringify(fields));
    if (finalFilter) {
      logger.info("with filter: " + JSON.stringify(finalFilter));
    }

    const client = new Meilisearch({
      host: meilisearchUrl,
      apiKey: meilisearchApiKey,
    });

    const index = client.index(collection.toLowerCase());

    await index.updateFilterableAttributes(filterableattributes);
    await index.updateFaceting({
      sortFacetValuesBy: {
        "*": "count",
      },
    });

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

    const indexData = async (items: any[]) => {
      try {
        if (collection.toLowerCase() === "person") {
          logger.info("Add isExpert field to person items");
          items.forEach((item) => {
            item.isExpert =
              Array.isArray(item.expertiseDomains) &&
              item.expertiseDomains.length > 0;
          });
        } else if (collection.toLowerCase() === "mainevent") {
          logger.info("Add year field to mainevent items");
          items.forEach((item) => {
            if (item.startDate) {
              const date = new Date(item.startDate);
              item.year = date.getFullYear();
            }
          });
        }
        const response = await index.addDocuments(items, {
          primaryKey: "id",
        });
        logger.info(`Task enqueued: ${response.taskUid}`);
        return response;
      } catch (error: any) {
        logger.error(error.message);
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
