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

1. Run the upload command:

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

## Development

```bash
npm run dev      # Watch mode with no minification
npm run build    # Build for production
npm run upload   # Upload to remote server via SSH
```
