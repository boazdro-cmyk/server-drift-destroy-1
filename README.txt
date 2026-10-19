Drift & Destroy — Cloudflare Workers static site

Files:
- public/index.html : your uploaded game, kept intact
- wrangler.jsonc    : Cloudflare Workers configuration

Deploy:
1. Extract this ZIP.
2. Open a terminal in the extracted folder.
3. Install Node.js if needed, then run:
   npx wrangler login
   npx wrangler deploy

The game is currently a self-contained HTML file, so no separate server/API file is needed for serving the page.
