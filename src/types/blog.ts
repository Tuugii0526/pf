export interface BlogPost {
  title: string;
  author: string;
  username: string;
  date: Date;
  categories: unknown;
  slug: string;
}

export interface BlogData {
  posts: Array<BlogPost>;
  categories: unknown;
}
