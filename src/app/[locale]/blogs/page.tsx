import { Fragment } from "react";
import { blogData } from "../../../next.json.mjs";
import { BlogData } from "@/types/blog";
import { Blog } from "@/components/blog/Blog";

export default function Page() {
  const data: BlogData = blogData;
  return (
    <Fragment>
      {data.posts.map((blog) => (
        <Blog key={blog.title} blog={blog} />
      ))}
    </Fragment>
  );
}
