import { defineOperationApi } from "@directus/extensions-sdk";
import { Meilisearch } from "meilisearch";
import { applyComputedFields, getComputedFieldNames } from "./computedFields";

type Options = {
  collection: string;
  fields: string[];
  filterableattributes: string[];
  searchableattributes: string[];
  sortableattributes: string[];
  pageSize: number;
  filter: string;
  sortfacetvaluesby: Record<string, "count" | "alpha"> | null;
};

export default defineOperationApi<Options>({
  id: "escape-index-with-meilisearch",
  handler: async (
    {
      collection,
      fields,
      pageSize,
      filter,
      filterableattributes = ["*"],
      searchableattributes = ["*"],
      sortableattributes = [],
      sortfacetvaluesby,
    },
    { services, env, getSchema, database, accountability, logger },
  ) => {
    const meilisearchUrl = env.MEILISEARCH_URL;
    const meilisearchApiKey = env.MEILISEARCH_API_KEY;
    const limit = pageSize ?? 300;
    const finalFilter = filter ?? undefined;

    logger.info(
      `Indexing collection: ${collection} with meilisearch url: ${meilisearchUrl}`,
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

    /**
     * Configure the Meilisearch index settings
     */
    const configureIndex = async () => {
      // Add computed fields to filterable attributes
      const computedFields = getComputedFieldNames(collection);
      const allFilterableAttributes = [
        ...filterableattributes,
        ...computedFields.filter((f) => !filterableattributes.includes(f)),
      ];

      // Update filterable attributes
      logger.info(
        `Collection ${collection} - Updating filterable attributes: ` +
          JSON.stringify(allFilterableAttributes),
      );
      await index.updateFilterableAttributes(allFilterableAttributes);

      // Update searchable attributes (order matters!)
      logger.info(
        `Collection ${collection} - Updating searchable attributes: ` +
          JSON.stringify(searchableattributes),
      );
      await index.updateSearchableAttributes(searchableattributes);

      // Update sortable attributes
      if (sortableattributes && sortableattributes.length > 0) {
        logger.info(
          `Collection ${collection} - Updating sortable attributes: ` +
            JSON.stringify(sortableattributes),
        );
        await index.updateSortableAttributes(sortableattributes);
      }

      // Update faceting settings
      const facetingSettings: {
        maxValuesPerFacet: number;
        sortFacetValuesBy: Record<string, "count" | "alpha">;
      } = {
        maxValuesPerFacet: 100,
        sortFacetValuesBy: { "*": "count" },
      };

      if (sortfacetvaluesby && Object.keys(sortfacetvaluesby).length > 0) {
        facetingSettings.sortFacetValuesBy = sortfacetvaluesby;
      }

      logger.info(
        `Collection ${collection} - Updating faceting options: ` +
          JSON.stringify(facetingSettings),
      );
      await index.updateFaceting(facetingSettings);
    };

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
        // Apply computed fields for this collection
        const appliedFields = applyComputedFields(items, collection);
        if (appliedFields.length > 0) {
          logger.info(
            `Applied computed fields [${appliedFields.join(
              ", ",
            )}] to ${collection} items`,
          );
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

    const result = await indexItems();
    // Configure the index before indexing
    await configureIndex();
    return result;
  },
});
