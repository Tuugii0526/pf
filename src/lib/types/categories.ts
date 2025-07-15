import { languageCodes } from "./i18n";

export type CategoriesT =
  | "programming-problem"
  | "all"
  | "year-2025"
  | "heard"
  | "roadmap";
export type CategoryBody = {
  [key in languageCodes]: {
    emoji: string;
    description: string;
  };
};
