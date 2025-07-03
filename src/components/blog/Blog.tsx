import { BlogPost } from "@/types/blog";
import Link from "next/link";

export const Blog = ({ blog }: { blog: BlogPost }) => {
  return (
    <Link href={blog?.slug}>
      <div className="flex flex-col bg-amber-300 p-4 rounded-2xl cursor-pointer">
        <div>title:{blog.title}</div>
        <div>author:{blog.author}</div>
      </div>
    </Link>
  );
};
