import { blogData } from "../../../next.json.mjs";
import { Blog } from "@/components/blog/Blog";
export default function Page() {
  return (
    <div className="flex flex-col gap-2 ">
      <p>Blogs</p>
      <div className="flex gap-2">
        {blogData.posts.map((blog) => (
          <Blog key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  );
}
