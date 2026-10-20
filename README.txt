Cloudflare Workers - minimal server (no game files)

Files:
- wrangler.jsonc
- src/index.js

Deploy:
1. Extract this ZIP.
2. Open a terminal in the extracted folder (the folder containing wrangler.jsonc).
3. Run:
   npx wrangler login
   npx wrangler deploy

Cloudflare will print your live workers.dev URL after deployment.
Health check: append /health to the deployed URL.

Note: This package contains the server source/configuration only. It cannot create a live URL until deployed to your Cloudflare account.
