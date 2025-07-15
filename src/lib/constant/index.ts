import { CategoriesT, CategoryBody } from "../types/categories";
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
  ["#EED2FF", "#734098"],
  ["#FDE876", "#735f00"],
  ["#FFD4A0", "#a53725"],
  ["#c0e6ff", "#325c80"],
  ["#30bd9c", "#006d5d"],
  ["#ffd6e8", "#9f1853"],
];
export const CATEGORIES: { [key in CategoriesT]: CategoriesT } = {
  "programming-problem": "programming-problem",
  all: "all",
  "year-2025": "year-2025",
  heard: "heard",
  roadmap: "roadmap",
};

export const PER_PAGE_BLOGS = 3;
export const CATEGORIES_INFO: {
  [key in CategoriesT]: CategoryBody;
} = {
  "programming-problem": {
    en: {
      emoji: "🛜 👾",
      description: "Let's enhance our programming knowledge",
    },
    mn: {
      emoji: "🛜 👾",
      description: "Программын мэдлэгээ дээшлүүлцгээе.",
    },
  },
  "year-2025": {
    en: {
      emoji: "🗣️",
      description: "2025 ",
    },
    mn: {
      emoji: "🗣️",
      description: "2025 ",
    },
  },
  all: {
    en: {
      emoji: "~~~;)~~~~",
      description: "All blog",
    },
    mn: {
      emoji: "~~~;)~~~~",
      description: "Бүх блог",
    },
  },
  heard: {
    en: {
      emoji: "👂",
      description: "If drops are gathered ,it will become ocean.",
    },
    mn: {
      emoji: "👂",
      description:
        "Дуслыг хураавал далай . Та бүхэнд өөрийн сонссоноо бага ч болов хүргэнээ.",
    },
  },
  roadmap: {
    en: {
      emoji: "🚏🚗🗺️🧭",
      description: "Roadmap",
    },
    mn: {
      emoji: "🚏🚗🗺️🧭",
      description: "Газрын зураг",
    },
  },
};
