"use client";

import { LocaleProvider } from "@/src/context/locale-context";
import { Navbar } from "@/src/components/navbar";
import { RevealOnScroll } from "@/src/components/reveal-on-scroll";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <div className="site-bg" />
      <Navbar />
      <RevealOnScroll />
      <main>{children}</main>
    </LocaleProvider>
  );
}
