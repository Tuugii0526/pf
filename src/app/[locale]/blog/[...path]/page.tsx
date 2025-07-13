import { Blog } from "@/components/blog/Blog";
import { Categories } from "@/components/blog/Categories";
import { CategoryLayout } from "@/components/CategoryLayout";
import { CustomMdx } from "@/components/CustomMdx";
import { CATEGORIES } from "@/lib/constant";
import { dm_serif_display, roboto } from "@/lib/fonts/fonts";
import { getSimilarBlogs } from "@/lib/get-similar-blogs";
import { CategoriesT } from "@/lib/types/categories";
import { languageCodes } from "@/lib/types/i18n";
import { getBlog, getLangPathParams, getMetadata } from "@/lib/utils";
export const dynamic = "force-static";
export const revalidate = 300;
export const generateStaticParams = async () => {
  return getLangPathParams();
};
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: languageCodes; path: Array<string> }>;
}) => {
  const { path, locale } = await params;
  const metadata = getMetadata({
    lang: locale,
    fileName: path.join("/"),
  });
  return metadata;
};
export default async function Page({
  params,
}: {
  params: Promise<{ locale: languageCodes; path: Array<string> }>;
}) {
  const { path, locale } = await params;
  if (path.length == 1) {
    if (Object.values(CATEGORIES).includes(path[0] as CategoriesT)) {
      return (
        <CategoryLayout
          category={path[0] as CategoriesT}
          lang={locale}
          page={1}
        />
      );
    } else {
      return <div className="font-bold">Блог олдсонгүй ;|</div>;
    }
  }
  if (
    path.length == 3 &&
    Object.values(CATEGORIES).includes(path[0] as CategoriesT) &&
    path[1] == "page" &&
    typeof Number(path[2]) == "number"
  ) {
    return (
      <CategoryLayout
        category={path[0] as CategoriesT}
        lang={locale}
        page={Number(path[2])}
      />
    );
  }
  const post = getBlog({
    lang: locale,
    fileName: path.join("/"),
  });
  if (!post.content) {
    return <div className="font-bold">Блог олдсонгүй ;|</div>;
  }
  const sameBlogs = getSimilarBlogs({
    lang: locale,
    category: post?.metadata?.category,
    slug: "/" + path.join("/"),
  });
  return (
    <div className=" h-full w-full  flex flex-col justify-between  ">
      <div className="w-[90%] mx-auto text-blog-one-text-foreground mb-[60px]">
        <div className="w-full flex flex-col justify-center mb-[15px]">
          <p className={`text-[28px] ${dm_serif_display.className}`}>
            {post?.metadata?.title}
          </p>
          <Categories categories={[post?.metadata?.category]} />
        </div>
        <CustomMdx source={post.content} />
      </div>
      {sameBlogs.length > 0 && (
        <div className="flex flex-col">
          <p className={`text-center text-2xl font-bold ${roboto}`}>
            Төстэй блогууд
          </p>
          {sameBlogs.map((blog) => (
            <Blog
              key={`${blog.language}-${blog.title}`}
              blog={blog}
              locale={locale}
            />
          ))}
        </div>
      )}
    </div>
  );
}
