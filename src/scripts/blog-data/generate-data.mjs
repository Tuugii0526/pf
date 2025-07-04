import { writeFileSync } from "node:fs";
import generateBlogData from "../../next-data/generators/blogData.mjs";

const blogData = await generateBlogData();

writeFileSync(
  new URL(`../../../src/public/blog-data.json`, import.meta.url),
  JSON.stringify(blogData),
  "utf8"
);
