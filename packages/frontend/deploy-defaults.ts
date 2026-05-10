/**
 * Hard-coded defaults for Vite (not bundled into React).
 *
 * `https://floci.asnb.sa` is Floci Core: S3-compatible API and **`/_floci/*`** (e.g. `/_floci/health` → 200).
 * It does **not** serve this UI’s **`/api/*`** Hono layer (`/api/health` → 404; `/api/cloudwatch/...` → S3
 * “NoSuchBucket”). The Bun app in **`packages/api`** must run (or be deployed); you cannot point the
 * browser proxy at Floci Core alone.
 *
 * From repo root run **`npm run dev`** to start Vite + API together. Proxy target:
 */
export const FLOCI_REST_API_ORIGIN = 'http://localhost:3001'
/** Reserved for smoke-test empty states (`README.md`); not wired in hooks yet. */
export const MOCK_MODE = false
