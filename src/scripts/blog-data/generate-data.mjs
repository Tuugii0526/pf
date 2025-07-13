import { writeFileSync } from "node:fs";
import generateBlogData from "../../next-data/generators/blogData.mjs";
try {
  const blogData = await generateBlogData();
  writeFileSync(
    new URL(`../../../src/data/blog-data.json`, import.meta.url),
    JSON.stringify(blogData),
    "utf8"
  );
} catch (error) {
  console.log("error is inside generateing");
}
