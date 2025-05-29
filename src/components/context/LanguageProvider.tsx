"use client";
import { languageCodes, languageType } from "@/lib/types/i18n";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
type LanguageContextT = {
  dict: languageType;
  currentLanguage: languageCodes;
};
const LanguageContext = createContext({} as LanguageContextT);
export function LanguageProvider({
  children,
  dictionary,
  currentLanguage,
}: PropsWithChildren<{
  dictionary: languageType;
  currentLanguage: languageCodes;
}>) {
  const [dict] = useState(dictionary);
  const value = useMemo(
    () => ({
      dict,
      currentLanguage,
    }),
    [dict, currentLanguage]
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("Language context is not reachable");
  }
  return context;
};
