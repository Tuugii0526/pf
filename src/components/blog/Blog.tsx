import { BlogPost } from "@/types/blog";

export const Blog = ({ blog }: { blog: BlogPost }) => {
  return (
    <div className="flex flex-col">
      <div>title:{blog.title}</div>
      <div>author:{blog.author}</div>
    </div>
  );
};
