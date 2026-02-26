# Deployment Notes

## Web (Vercel)
1. Set root directory to `apps/web`.
2. Add environment variable `NEXT_PUBLIC_API_BASE_URL` with your API URL.
3. Deploy.

## API (Render or Railway)
1. Set root directory to `apps/api`.
2. Build command: `npm install && npm run build`.
3. Start command: `npm run start`.
4. Add environment variables:
   - `PORT`
   - `DATABASE_URL`
   - `CORS_ORIGIN` (comma-separated list supported, wildcard allowed)
     - Example: `http://localhost:3000,https://my-portfolio.vercel.app,*.vercel.app`

## Database
1. Provision PostgreSQL.
2. Run `infra/sql/schema.sql` before first launch.
3. Verify using `GET /api/health` and a test `POST /api/contact`.
