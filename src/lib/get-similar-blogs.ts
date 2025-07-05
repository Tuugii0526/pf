import { blogData } from "@/next.json.mjs";
import { languageCodes } from "./types/i18n";

export const getSimilarBlogs = ({
  lang,
  category,
  slug,
}: {
  lang: languageCodes;
  category: string;
  slug: string;
}) => {
  return blogData.posts[lang].filter(
    (blog) => blog.categories.includes(category) && blog.slug !== slug
  );
};
