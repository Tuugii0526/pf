import { languageCodes } from "@/lib/types/i18n";
import { BlogPost } from "@/types/blog";
import Link from "next/link";

export const Blog = ({
  blog,
  locale,
}: {
  blog: BlogPost;
  locale: languageCodes;
}) => {
  return (
    <Link href={`/${locale}${blog?.slug}`}>
      <div className="flex flex-col bg-amber-300 p-4 rounded-2xl cursor-pointer">
        <div>title:{blog.title}</div>
        <div>author:{blog.author}</div>
      </div>
    </Link>
  );
};
