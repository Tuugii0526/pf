"use client";

import { useLang } from "./context/LanguageProvider";

export const LastUpdated = () => {
  const { dict } = useLang();
  return <>{dict.last_updated}</>;
};
