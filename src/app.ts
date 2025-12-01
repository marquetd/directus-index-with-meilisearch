import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "escape-index-with-meilisearch",
  name: "Index with Meilisearch",
  icon: "box",
  description: "Index collection items with meilisearch",
  overview: ({ collection, fields, pageSize, filter }) => [
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
  ],
});
