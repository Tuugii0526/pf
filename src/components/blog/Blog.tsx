import { languageCodes } from "@/lib/types/i18n";
import { BlogPost } from "@/lib/types/blog";
import Link from "next/link";
import { Categories } from "./Categories";

export const Blog = ({
  blog,
  locale,
}: {
  blog: BlogPost;
  locale: languageCodes;
}) => {
  return (
    <Link href={`/${locale}/blog${blog?.slug}`}>
      <Categories categories={blog.categories} />
      <div className="m-auto w-[90%] flex flex-col text-blog-title-foreground font-bold text-[25px]  bg-blog-card-background  p-4 rounded-2xl cursor-pointer  text-2xl ">
        <p>{blog.title}</p>
        <p className="text-[14px] text-blog-start-text  my-2">
          {blog.startText}
        </p>
        <p className="text-[14px]">
          <span className="text-blog-author-foreground">By</span>{" "}
          <span className="text-blog-title-foreground ">{blog.author}</span>
        </p>
      </div>
    </Link>
  );
};
