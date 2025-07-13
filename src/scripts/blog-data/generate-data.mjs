import { writeFileSync } from "node:fs";
import generateBlogData from "../../next-data/generators/blogData.mjs";
console.log("current working dir:", process.cwd());
console.log("current file:", import.meta.url);
try {
  const blogData = await generateBlogData();
  writeFileSync("./src/data/blog-data.json", JSON.stringify(blogData), "utf8");
} catch (error) {
  console.log(error);
  console.log("error is inside generateing");
}
