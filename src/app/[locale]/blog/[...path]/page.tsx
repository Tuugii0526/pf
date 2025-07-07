import { Blog } from "@/components/blog/Blog";
import { Categories } from "@/components/blog/Categories";
import { CategoryLayout } from "@/components/CategoryLayout";
import { dm_serif_display, roboto } from "@/lib/fonts/fonts";
import { getSimilarBlogs } from "@/lib/get-similar-blogs";
import { CategoriesT } from "@/lib/types/categories";
import { languageCodes } from "@/lib/types/i18n";
import {
  getBlog,
  getCategories,
  getLangPathParams,
  getMetadata,
} from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
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
    if (getCategories().includes(path[0])) {
      return <CategoryLayout category={path[0] as CategoriesT} />;
    } else {
      return <div className="font-bold">Блог олдсонгүй ;|</div>;
    }
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
    category: post.metadata.category,
    slug: "/" + path.join("/"),
  });
  return (
    <div className="h-full w-full  flex flex-col justify-between mb-16">
      <div className="w-[90%] mx-auto text-blog-one-text-foreground ">
        <div className="w-full flex flex-col justify-center mb-[15px]">
          <p className={`text-[45px] ${dm_serif_display.className}`}>
            {post.metadata.title}
          </p>
          <Categories categories={[post.metadata.category]} />
        </div>
        <MDXRemote
          source={post.content}
          components={{
            p: (props) => (
              <p className={`31.5px] font-medium ${roboto}`} {...props} />
            ),
            h1: (props) => (
              <p className={`text-[32px] font-bold ${roboto}`} {...props} />
            ),
            h2: (props) => (
              <p className={`text-[24x] font-bold ${roboto}`} {...props} />
            ),
            h3: (props) => (
              <p className={`text-[18px] font-bold ${roboto}`} {...props} />
            ),
            h4: (props) => (
              <p className={`text-[16px] font-bold ${roboto}`} {...props} />
            ),
            h5: (props) => (
              <p className={`text-[13px] font-bold ${roboto}`} {...props} />
            ),
            h6: (props) => (
              <p className={`text-[12px] font-bold ${roboto}`} {...props} />
            ),
          }}
        />
      </div>
      <div className="flex flex-col">
        {sameBlogs.map((blog) => (
          <Blog
            key={`${blog.language}-${blog.title}`}
            blog={blog}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
