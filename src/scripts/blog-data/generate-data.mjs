import { writeFileSync } from "node:fs";
import generateBlogData from "../../next-data/generators/blogData.mjs";
import path from "node:path";
try {
  const blogData = await generateBlogData();
  writeFileSync(
    path.join(process.cwd(), "/src/data/blog-data.json"),
    JSON.stringify(blogData),
    "utf8"
  );
} catch (error) {
  console.log(error);
  console.log("error is inside generateing");
}
