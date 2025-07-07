import { languageCodes } from "@/lib/types/i18n";
import { Blog } from "../blog/Blog";
import { getBlogsByCategory } from "@/lib/utils";
import { CATEGORIES } from "@/lib/constant";

export const TedtalkLayout = ({ lang }: { lang: languageCodes }) => {
  const blogs = getBlogsByCategory({
    lang: lang,
    category: CATEGORIES["ted-talk"],
  });
  return (
    <div className="flex flex-col">
      {blogs.map((blog) => (
        <Blog
          key={`${blog.language}-${blog.title}`}
          blog={blog}
          locale={lang}
        />
      ))}
    </div>
  );
};
