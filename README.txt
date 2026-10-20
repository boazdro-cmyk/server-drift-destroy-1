Cloudflare Workers server - only 3 files, no game.

Files:
- index.js
- wrangler.toml
- README.txt

Deploy:
1. Put these three files in the root of your GitHub repository (same level, no folders).
2. To deploy from a terminal in this folder, run:
   npx wrangler login
   npx wrangler deploy

Cloudflare creates the live workers.dev URL after deployment.
Health check: add /health to the URL.
