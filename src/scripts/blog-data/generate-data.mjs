import { writeFileSync } from "node:fs";
import generateBlogData from "../../next-data/generators/blogData.mjs";
try {
  const blogData = await generateBlogData();
  writeFileSync("./src/data/blog-data.json", JSON.stringify(blogData), "utf8");
} catch (error) {
  console.lor(error);
  console.log("error is inside generateing");
}
