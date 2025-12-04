# Copilot Instructions - Directus Meilisearch Extension

## Project Overview

This is a **Directus Operation Extension** that enables indexing Directus collections into Meilisearch. It's designed to be used within Directus Flows to synchronize data to a Meilisearch search engine.

## Architecture

```
src/
├── app.ts   # Frontend UI definition (Directus Flow panel configuration)
└── api.ts   # Backend handler (Meilisearch indexing logic)
```

- **app.ts**: Defines the operation's UI in Directus using `defineOperationApp`. Configures form fields for collection, fields, pageSize, filter, and filterableAttributes.
- **api.ts**: Implements the indexing logic using `defineOperationApi`. Paginates through Directus items and sends them to Meilisearch.

## Key Patterns

### Operation ID Consistency

The operation ID `escape-index-with-meilisearch` must match in both `app.ts` and `api.ts`:

```typescript
// app.ts
defineOperationApp({ id: "escape-index-with-meilisearch", ... })
// api.ts
defineOperationApi({ id: "escape-index-with-meilisearch", ... })
```

### Collection-Specific Data Transformations

Custom field enrichment is done in `indexData()` based on collection name:

```typescript
if (collection.toLowerCase() === "person") {
  item.isExpert =
    Array.isArray(item.expertiseDomains) && item.expertiseDomains.length > 0;
}
```

### Meilisearch SDK Usage

Use the official `meilisearch` SDK, not raw HTTP calls:

```typescript
const client = new Meilisearch({
  host: meilisearchUrl,
  apiKey: meilisearchApiKey,
});
const index = client.index(collection.toLowerCase());
await index.addDocuments(items, { primaryKey: "id" });
```

## Environment Variables

Required in Directus:

- `MEILISEARCH_URL` - Meilisearch host (e.g., `http://localhost:7700`)
- `MEILISEARCH_API_KEY` - Meilisearch master/API key
- `EXTENSIONS_AUTO_RELOAD=true` - For development

## Development Commands

```bash
npm run build    # Build extension for production
npm run dev      # Watch mode with no minification
npm run link     # Link extension to Directus instance
```

## Deployment

Copy to Directus extensions folder:

```
directus/extensions/directus-index-with-meilisearch/
├── package.json
└── dist/
    ├── app.js
    └── api.js
```

## Type Safety

The `Options` type in `api.ts` must match the fields defined in `app.ts`:

```typescript
type Options = {
  collection: string;
  fields: string[];
  filterableattributes: string[];
  pageSize: number;
  filter: string;
};
```
