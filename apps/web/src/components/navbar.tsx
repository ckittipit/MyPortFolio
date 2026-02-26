"use client";

import Link from "next/link";
import { LanguageToggle } from "@/src/components/language-toggle";
import { useLocale } from "@/src/context/locale-context";

export function Navbar() {
  const { content } = useLocale();

  return (
    <header className="navbar glass">
      <Link href="/" className="brand">
        KC
      </Link>
      <nav>
        <Link href="/">{content.nav.home}</Link>
        <Link href="/resume">{content.nav.resume}</Link>
        <Link href="/contact">{content.nav.contact}</Link>
      </nav>
      <LanguageToggle />
    </header>
  );
}
