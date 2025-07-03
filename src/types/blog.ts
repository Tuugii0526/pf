import { languageCodes } from "@/lib/types/i18n";

export interface BlogPost {
  title: string;
  author: string;
  username: string;
  date: Date;
  categories: unknown;
  slug: string;
  language: languageCodes;
}

export interface BlogData {
  posts: Array<BlogPost>;
  categories: unknown;
}
