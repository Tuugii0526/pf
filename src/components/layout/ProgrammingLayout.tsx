import { languageCodes } from "@/lib/types/i18n";
import { getBlogsByCategory } from "@/lib/utils";
import { Blog } from "../blog/Blog";
import { CATEGORIES } from "@/lib/constant";

export const ProgrammingLayout = ({ lang }: { lang: languageCodes }) => {
  const blogs = getBlogsByCategory({
    lang: lang,
    category: CATEGORIES["programming"],
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
