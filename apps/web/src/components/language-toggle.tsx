"use client";

import { useLocale } from "@/src/context/locale-context";
import { cn } from "@/src/lib/utils";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="lang-toggle" role="group" aria-label="Switch language">
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={cn("lang-btn", locale === "en" && "active")}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("th")}
        className={cn("lang-btn", locale === "th" && "active")}
      >
        TH
      </button>
    </div>
  );
}
