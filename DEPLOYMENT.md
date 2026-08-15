# Deployment

This project is prepared for Cloudflare Workers through Vinext and includes D1 for article records and R2 for uploaded article images.

## Build

```bash
npm install
npm run build
```

The verified Cloudflare Worker output is generated in `dist/`.

## Required bindings

- D1 binding: `DB`
- R2 binding: `BUCKET`

Apply the SQL migrations in `drizzle/` before publishing an environment for the first time.

## Article administration

The editor is available at `/admin/articles`. It supports the complete built-in article and publication library, draft and published states, cover-image uploads, alternative text, and per-article SEO metadata.

