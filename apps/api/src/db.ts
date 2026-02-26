import { Pool } from "pg";
import type { ContactRecord, ContactStore } from "./types.js";

export class PostgresContactStore implements ContactStore {
  private readonly pool: Pool;

  constructor(databaseUrl: string) {
    this.pool = new Pool({ connectionString: databaseUrl });
  }

  async insertContact(payload: ContactRecord): Promise<string> {
    const query = `
      INSERT INTO contact_messages (name, email, subject, message, locale, ip_hash)
      VALUES ($1, $2, NULLIF($3, ''), $4, $5, $6)
      RETURNING id;
    `;

    const values = [
      payload.name,
      payload.email,
      payload.subject ?? "",
      payload.message,
      payload.locale,
      payload.ipHash ?? null
    ];

    const result = await this.pool.query<{ id: string }>(query, values);
    return result.rows[0].id;
  }
}
