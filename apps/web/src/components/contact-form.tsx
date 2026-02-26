"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/src/context/locale-context";

interface SubmitResult {
  type: "success" | "error";
  message: string;
}

const initialFields = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export function ContactForm() {
  const { locale, content } = useLocale();
  const [fields, setFields] = useState(initialFields);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);

  const apiBaseUrl = useMemo(() => process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000", []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setResult(null);

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, locale })
      });

      if (!response.ok) {
        throw new Error("request_failed");
      }

      setFields(initialFields);
      setResult({ type: "success", message: content.contact.success });
    } catch {
      setResult({ type: "error", message: content.contact.error });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="card reveal contact-form" onSubmit={onSubmit}>
      <label>
        {content.contact.labels.name}
        <input
          required
          minLength={2}
          maxLength={100}
          value={fields.name}
          onChange={(event) => setFields((prev) => ({ ...prev, name: event.target.value }))}
        />
      </label>
      <label>
        {content.contact.labels.email}
        <input
          required
          type="email"
          maxLength={255}
          value={fields.email}
          onChange={(event) => setFields((prev) => ({ ...prev, email: event.target.value }))}
        />
      </label>
      <label>
        {content.contact.labels.subject}
        <input
          maxLength={150}
          value={fields.subject}
          onChange={(event) => setFields((prev) => ({ ...prev, subject: event.target.value }))}
        />
      </label>
      <label>
        {content.contact.labels.message}
        <textarea
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          value={fields.message}
          onChange={(event) => setFields((prev) => ({ ...prev, message: event.target.value }))}
        />
      </label>
      <button className="glow-btn" type="submit" disabled={submitting}>
        {submitting ? content.contact.labels.submitting : content.contact.labels.submit}
      </button>
      {result ? <p className={result.type}>{result.message}</p> : null}
    </form>
  );
}
