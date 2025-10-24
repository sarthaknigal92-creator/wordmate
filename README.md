# WordMate — Static Mock AI Writing Assistant

This is a zero-cost, static HTML version of **WordMate** (mock mode). It generates deterministic mock outputs so you can demo and deploy without any API keys or usage charges.

## Files
- `index.html` - Landing page + UI
- `style.css` - Dark theme styles
- `script.js` - Mock generation + save/copy features

## Deploy
1. Create a new GitHub repo and upload these files to the root.
2. Add the repo to Vercel (Import Project) and deploy. Vercel will serve `index.html` automatically.

## How to replace with real API later
Edit `script.js` to call your serverless function or direct API endpoint and replace `mockGenerate` with real generation logic.

## License
You may use this starter freely to build your product.
