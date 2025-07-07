import { languageCodes } from "@/lib/types/i18n";
import { getBlogsByCategory } from "@/lib/utils";
import { Blog } from "../blog/Blog";
import { CATEGORIES } from "@/lib/constant";
import { Pagination } from "../Pagination";

export const ProgrammingLayout = ({
  lang,
  page,
}: {
  lang: languageCodes;
  page: number;
}) => {
  const data = getBlogsByCategory({
    lang: lang,
    category: CATEGORIES["programming"],
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
      <Pagination
        pagination={data?.pagination}
        lang={lang}
        category={"programming"}
      />
    </div>
  );
};
