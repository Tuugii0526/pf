import { languageCodes } from "@/lib/types/i18n";

export interface BlogPost {
  title: string;
  author: string;
  username: string;
  date: Date;
  categories: string[];
  slug: string;
  language: languageCodes;
  id: number;
}

export interface BlogData {
  posts: {
    [K in languageCodes]: Array<BlogPost>;
  };
  categories: unknown;
}
