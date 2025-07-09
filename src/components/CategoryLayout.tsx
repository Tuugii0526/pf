import { CategoriesT } from "@/lib/types/categories";
import { languageCodes } from "@/lib/types/i18n";
import { getBlogsByCategory } from "@/lib/utils";
import { CATEGORIES, CATEGORIES_INFO } from "@/lib/constant";
import { Blog } from "./blog/Blog";
import { Pagination } from "./Pagination";
import { dm_serif_display } from "@/lib/fonts/fonts";
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
      <div className="flex flex-col items-center">
        <p className={`text-[45px] ${dm_serif_display.className}`}>
          {category}
        </p>
        <p>{CATEGORIES_INFO[category].emoji} </p>
        <p>{CATEGORIES_INFO[category].description} </p>
      </div>
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
