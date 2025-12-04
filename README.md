# directus-index-with-meilisearch

Directus custom extension which provides an Operation for Flows that allows indexing collections into Meilisearch.

## Installation

```bash
npm install
npm run build
```

## Deployment

### Manual deployment

Copy `package.json` and the `dist/` folder to your Directus extensions directory:

```text
directus/extensions/index-with-meilisearch/
├── package.json
└── dist/
    ├── app.js
    └── api.js
```

### SSH deployment

1. Create a `.env` file based on `.env.example`:

```bash
SSH_HOST=your-server.com
SSH_PORT=22
SSH_USER=your-username
SSH_PASSWORD=your-password
SSH_DIRECTORY=/path/to/directus/extensions/index-with-meilisearch
```

2. Run the upload command:

```bash
npm run upload
```

## Configuration

Add the following environment variables to your Directus instance:

| Variable                 | Description                        | Example                 |
| ------------------------ | ---------------------------------- | ----------------------- |
| `MEILISEARCH_URL`        | Meilisearch server URL             | `http://localhost:7700` |
| `MEILISEARCH_API_KEY`    | Meilisearch API key                | `your-master-key`       |
| `EXTENSIONS_AUTO_RELOAD` | Enable auto-reload for development | `true`                  |

## Usage

Add the "Index with Meilisearch" operation to a Directus Flow and configure the following options:

| Option                    | Description                                                                                                                   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Collection**            | The Directus collection to index into Meilisearch.                                                                            |
| **Page Size**             | Number of items per batch (default: 300).                                                                                     |
| **Fields**                | Fields to include in the Meilisearch index.                                                                                   |
| **Filter**                | Directus filter to limit which items are indexed. Leave empty to index all.                                                   |
| **Filterable Attributes** | Fields that can be used for filtering and faceting in Meilisearch queries.                                                    |
| **Searchable Attributes** | JSON array of fields for full-text search. Order matters: fields listed first have higher priority. Default: `["*"]`.         |
| **Sort Facet Values By**  | JSON object to configure facet sorting. Default: `{"*": "count"}`. Use `"count"` for frequency or `"alpha"` for alphabetical. |

### Example: Searchable Attributes

```json
["title", "description", "content"]
```

### Example: Sort Facet Values By

```json
{ "*": "count", "category": "alpha" }
```

## Development

```bash
npm run dev      # Watch mode with no minification
npm run build    # Build for production
npm run upload   # Upload to remote server via SSH
```
