import { languageCodes } from "@/lib/types/i18n";
import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  mn: () => import("./mn.json").then((module) => module.default),
};
export const getDictionary = async (locale: languageCodes) =>
  dictionaries[locale]();
