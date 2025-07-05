import { languageCodes } from "@/lib/types/i18n";
import { blogData } from "../../../next.json.mjs";
import { Blog } from "@/components/blog/Blog";

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
      <div className="flex flex-col gap-4">
        {blogData.posts[locale].map((blog) => (
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
