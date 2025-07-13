import { writeFileSync } from "node:fs";
import generateBlogData from "../../next-data/generators/blogData.mjs";
console.log("SCRIPT IS WORKING");
const blogData = await generateBlogData();
writeFileSync(
  new URL(`../../../src/data/blog-data.json`, import.meta.url),
  JSON.stringify(blogData),
  "utf8"
);
