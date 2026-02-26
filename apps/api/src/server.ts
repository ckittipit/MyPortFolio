import dotenv from "dotenv";
import { PostgresContactStore } from "./db.js";
import { createApp } from "./app.js";

dotenv.config();

const port = Number(process.env.PORT ?? 4000);
const databaseUrl = process.env.DATABASE_URL;
const corsOrigin = process.env.CORS_ORIGIN ?? "http://localhost:3000";

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required");
}

const store = new PostgresContactStore(databaseUrl);
const app = createApp(store, corsOrigin);

app.listen(port, () => {
  console.log(`[api] listening on ${port}`);
});
