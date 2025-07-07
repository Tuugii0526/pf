import { languageCodes } from "@/lib/types/i18n";
import { Blog } from "@/components/blog/Blog";
import { getBlogsByCategory } from "@/lib/utils";
import { Pagination } from "@/components/Pagination";

export default async function Page({
  params,
}: {
  params: Promise<{
    locale: languageCodes;
  }>;
}) {
  const { locale } = await params;
  const data = getBlogsByCategory({
    lang: locale,
    category: "all",
    page: 1,
  });
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex flex-col gap-4">
        {data.posts.map((blog) => (
          <Blog
            key={`${blog.language}-${blog.title}`}
            blog={blog}
            locale={locale}
          />
        ))}
        <Pagination
          pagination={data?.pagination}
          lang={locale}
          category={"all"}
        />
      </div>
    </div>
  );
}
