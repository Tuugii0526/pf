import { CategoriesT } from "../types/categories";
import { languageCodes } from "../types/i18n";
export const BASE_URL = "https://try-like-an-ant.vercel.app";
export const getNavs = (langCode: string) => [
  {
    id: 1,
    href: `/${langCode}`,
    label: "🏡",
  },
  {
    id: 2,
    href: `/${langCode}/blog`,
    label: "📝",
  },
  {
    id: 3,
    href: `/${langCode}/works`,
    label: "💻",
  },
];
export const Languages: languageCodes[] = ["en", "mn"];
export const COLORS = [
  "#COE6FF",
  "#FFD6F8",
  "#EED2FF",
  "#FDE876",
  "#FFD4A0",
  "#A7FAE6",
];
export const CATEGORIES: { [key in CategoriesT]: CategoriesT } = {
  "programming-problem": "programming-problem",
  all: "all",
  "year-2025": "year-2025",
};

export const PER_PAGE_BLOGS = 3;
export const CATEGORIES_INFO: {
  [key in CategoriesT]: {
    emoji: string;
    description: string;
  };
} = {
  "programming-problem": {
    emoji: "🛜 👾",
    description: "Программын мэдлэгээ дээшлүүлцгээе.",
  },
  "year-2025": {
    emoji: "🗣️",
    description: "2025 ",
  },
  all: {
    emoji: "~~~;)~~~~",
    description: "all",
  },
};
