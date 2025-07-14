import { CategoriesT } from "@/lib/types/categories";
import { languageCodes } from "@/lib/types/i18n";
import { getBlogsByCategory } from "@/lib/utils";
import { CATEGORIES } from "@/lib/constant";
import { Blog } from "./blog/Blog";
import { Pagination } from "./Pagination";

import { CategoryIntro } from "./CategoryIntro";
export const CategoryLayout = ({
  category,
  lang,
  page,
}: {
  category: CategoriesT;
  lang: languageCodes;
  page: number;
}) => {
  const data = getBlogsByCategory({
    lang: lang,
    category: CATEGORIES[category],
    page,
  });

  return (
    <div className="flex flex-col gap-5">
      <CategoryIntro lang={lang} category={category} />
      <div className="mb-[60px]">
        {data.posts.map((blog) => (
          <Blog
            key={`${blog.language}-${blog.title}`}
            blog={blog}
            locale={lang}
          />
        ))}
      </div>
      <Pagination
        pagination={data?.pagination}
        lang={lang}
        category={category}
        currentPage={page}
      />
    </div>
  );
};
