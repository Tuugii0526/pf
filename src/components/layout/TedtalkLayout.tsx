import { languageCodes } from "@/lib/types/i18n";
import { Blog } from "../blog/Blog";
import { getBlogsByCategory } from "@/lib/utils";
import { CATEGORIES } from "@/lib/constant";

export const TedtalkLayout = ({
  lang,
  page,
}: {
  lang: languageCodes;
  page: number;
}) => {
  const data = getBlogsByCategory({
    lang: lang,
    category: CATEGORIES["ted-talk"],
    page,
  });
  return (
    <div className="flex flex-col">
      {data.posts.map((blog) => (
        <Blog
          key={`${blog.language}-${blog.title}`}
          blog={blog}
          locale={lang}
        />
      ))}
    </div>
  );
};
