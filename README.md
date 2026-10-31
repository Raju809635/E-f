# Return IQ frontend

React + Vite dashboard for the E-Commerce Return Prediction API.

## Run (PowerShell)

```powershell
npm.cmd install
npm.cmd run dev
```

The API base defaults to `http://localhost:8000/api`. Set `VITE_API_URL` to change it. Start the backend separately; see `../backend/README.md`.

## Vercel deployment

Import this repository in Vercel with its root directory set to the repository root. `vercel.json` builds the Vite app, supports SPA routes, and proxies `/api/*` to the Render service declared in the backend repository's `render.yaml`.
