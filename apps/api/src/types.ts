import type { ContactRequest } from "@portfolio/shared";

export interface ContactRecord extends ContactRequest {
  ipHash?: string;
}

export interface ContactStore {
  insertContact(payload: ContactRecord): Promise<string>;
}
