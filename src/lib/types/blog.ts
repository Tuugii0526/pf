import { languageCodes } from "@/lib/types/i18n";

export interface BlogPost {
  title: string;
  author: string;
  username: string;
  updatedAt: string;
  createdAt: string;
  categories: string[];
  slug: string;
  language: languageCodes;
  id: number;
  startText: string;
}

export interface BlogData {
  posts: {
    [K in languageCodes]: Array<BlogPost>;
  };
  categories: unknown;
}
