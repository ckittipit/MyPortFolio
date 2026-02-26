"use client";

import { ContactForm } from "@/src/components/contact-form";
import { SectionHeader } from "@/src/components/section-header";
import { useLocale } from "@/src/context/locale-context";

export default function ContactPage() {
  const { content } = useLocale();

  return (
    <div className="container">
      <SectionHeader title={content.contact.heading} subtitle={content.contact.body} />
      <ContactForm />
    </div>
  );
}
