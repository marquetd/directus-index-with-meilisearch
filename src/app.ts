import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "escape-index-with-meilisearch",
  name: "Index with Meilisearch",
  icon: "box",
  description: "Index collection items with meilisearch",
  overview: ({
    collection,
    fields,
    pageSize,
    filter,
    filterableattributes,
    searchableattributes,
    sortableattributes,
    sortfacetvaluesby,
  }) => [
    {
      label: "$t:collection",
      text: collection,
    },
    {
      label: "Fields",
      text: fields,
    },
    {
      label: "Page size",
      text: pageSize,
    },
    {
      label: "filter",
      text: filter,
    },
    {
      label: "Filterable Attributes",
      text: filterableattributes,
    },
    {
      label: "Searchable Attributes",
      text: searchableattributes,
    },
    {
      label: "Sortable Attributes",
      text: sortableattributes,
    },
    {
      label: "Sort Facet Values By",
      text: sortfacetvaluesby,
    },
  ],
  options: [
    {
      field: "collection",
      name: "$t:collection",
      type: "string",
      meta: {
        width: "half",
        interface: "system-collection",
        required: true,
        note: "The Directus collection to index into Meilisearch.",
      },
    },
    {
      field: "pageSize",
      name: "pageSize",
      type: "integer",
      meta: {
        width: "half",
        interface: "input",
        required: false,
        note: "Number of items per batch. Default: 300.",
      },
    },
    {
      field: "fields",
      name: "Fields",
      type: "string",
      meta: {
        width: "full",
        interface: "system-field-tree",
        options: {
          collectionField: "collection",
        },
        note: "Fields to include in the Meilisearch index. Select all fields you want to be searchable or displayed.",
      },
    },
    {
      field: "filter",
      name: "filter",
      type: "json",
      meta: {
        width: "full",
        interface: "input-code",
        required: false,
        note: "Directus filter to limit which items are indexed. Leave empty to index all items.",
      },
    },
    {
      field: "filterableattributes",
      name: "Filterable Attributes",
      type: "json",
      meta: {
        width: "full",
        interface: "input-code",
        required: false,
        options: {
          language: "json",
          placeholder: '["field1", "field2", "field3"]',
        },
        note: "Fields that can be used for filtering and faceting in Meilisearch queries. Order matters for facet organization.",
      },
    },
    {
      field: "searchableattributes",
      name: "Searchable Attributes (order matters)",
      type: "json",
      meta: {
        width: "full",
        interface: "input-code",
        required: false,
        options: {
          language: "json",
          placeholder: '["title", "description", "content"]',
        },
        note: 'Default: ["*"] (all fields). Fields listed first have higher search priority.',
      },
    },
    {
      field: "sortableattributes",
      name: "Sortable Attributes",
      type: "string",
      meta: {
        width: "full",
        interface: "system-field-tree",
        required: false,
        options: {
          collectionField: "collection",
        },
        note: "Fields that can be used to sort search results in Meilisearch queries. Select the fields you want to make sortable.",
      },
    },
    {
      field: "sortfacetvaluesby",
      name: "Sort Facet Values By",
      type: "json",
      meta: {
        width: "full",
        interface: "input-code",
        required: false,
        options: {
          language: "json",
          placeholder: '{"*": "count"}',
        },
        note: 'Default: {"*": "count"}. Use "count" to sort by frequency or "alpha" for alphabetical order.',
      },
    },
  ],
});
