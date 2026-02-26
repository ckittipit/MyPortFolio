import type { ContactRequest } from "./contracts.js";

export interface ContactRecord extends ContactRequest {
  ipHash?: string;
}

export interface ContactStore {
  insertContact(payload: ContactRecord): Promise<string>;
}
