"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Locale } from "@/lib/i18n";

type AnyTranslation = typeof translations.cs | typeof translations.en;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: AnyTranslation;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "cs",
  setLocale: () => {},
  t: translations.cs as AnyTranslation,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("cs");

  useEffect(() => {
    const saved = localStorage.getItem("jzp-locale") as Locale | null;
    if (saved === "cs" || saved === "en") {
      setLocaleState(saved);
      return;
    }
    const lang = (navigator.language || "").toLowerCase();
    setLocaleState(lang.startsWith("cs") || lang.startsWith("sk") ? "cs" : "en");
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("jzp-locale", l);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] as AnyTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
