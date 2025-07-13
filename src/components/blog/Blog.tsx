import { languageCodes } from "@/lib/types/i18n";
import { BlogPost } from "@/lib/types/blog";
import Link from "next/link";
import { Categories } from "./Categories";
import { dm_serif_display, roboto } from "@/lib/fonts/fonts";
import { DateShowing } from "../DateShowing";

export const Blog = ({
  blog,
  locale,
}: {
  blog: BlogPost;
  locale: languageCodes;
}) => {
  const { createdAt, updatedAt } = blog;
  return (
    <div className="w-full h-full">
      <div>
        <Link href={`/${locale}/blog${blog?.slug}`}>
          <p
            className={`text-[25px] font-bold hover:text-header-foreground transition ${roboto.className}`}
          >
            {blog.title}
          </p>
        </Link>
        <DateShowing
          updatedAt={updatedAt}
          createdAt={createdAt}
          insideBlog={false}
        />
        <Categories categories={blog.categories} />
        <p className="text-[14px]   my-2 text-blog-text-foreground">
          {blog.startText} ...
        </p>
      </div>
      <Link
        className={`${dm_serif_display.className} hover:text-header-foreground transition`}
        href={`/${locale}/blog${blog?.slug}`}
      >
        Read more
      </Link>
    </div>
  );
};
