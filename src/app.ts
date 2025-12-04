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
      },
    },
    {
      field: "filterableattributes",
      name: "Filterable Attributes",
      type: "string",
      meta: {
        width: "full",
        interface: "system-field-tree",
        options: {
          collectionField: "collection",
        },
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
