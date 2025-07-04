import { languageCodes } from "@/lib/types/i18n";
import { blogData } from "../../../next.json.mjs";
import { Blog } from "@/components/blog/Blog";
import { getLangPathParams } from "@/lib/utils";
export const generateStaticParams = async () => {
  return getLangPathParams();
};
export default async function Page({
  params,
}: {
  params: Promise<{
    locale: languageCodes;
  }>;
}) {
  const { locale } = await params;
  return (
    <div className="flex flex-col gap-2 ">
      <p>Blogs</p>
      <div className="flex gap-2">
        {blogData.posts[locale].map((blog) => {
          if (blog?.language == locale) {
            return (
              <Blog
                key={`${blog.language}-${blog.title}`}
                blog={blog}
                locale={locale}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
