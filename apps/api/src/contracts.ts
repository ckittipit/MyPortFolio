export type Locale = "th" | "en";

export interface ContactRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
  locale: Locale;
}

export interface ContactResponse {
  id: string;
  message: "received";
}
