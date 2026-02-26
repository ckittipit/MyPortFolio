"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@portfolio/shared";
import resumeEn from "@/src/content/resume.en.json";
import resumeTh from "@/src/content/resume.th.json";
import type { ResumeContent } from "@portfolio/shared";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (value: Locale) => void;
  content: ResumeContent;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-locale");
    if (saved === "th" || saved === "en") {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => {
    const content = (locale === "th" ? resumeTh : resumeEn) as ResumeContent;
    return { locale, setLocale, content };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
