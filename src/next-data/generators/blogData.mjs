"use strict";

import { createReadStream } from "node:fs";
import { join } from "node:path";
import readline from "node:readline";

import graymatter from "gray-matter";
import { getMarkdownFiles } from "../../next.helper.mjs";
const blogPath = join(process.cwd(), "src/content");
/**
 * This method parses the source (raw) Markdown content into Frontmatter
 * and returns basic information for blog posts
 *
 * @param {string} filename the filename related to the blogpost
 * @param {string} source the source markdown content of the blog post
 */
const getFrontMatter = (filename, source) => {
  const {
    title = "Untitled",
    author = "Tuguldur",
    username,
    date = new Date(),
    category = "uncategorized",
    language,
  } = graymatter(source).data;

  // We also use publishing years as categories for the blog
  const publishYear = new Date(date).getUTCFullYear();

  // Provides a full list of categories for the Blog Post which consists of
  // all = (all blog posts), publish year and the actual blog category
  const categories = [category, `year-${publishYear}`, "all"];

  // this is the url used for the blog post it based on the category and filename
  let regexPattern = new RegExp(`${language}/blog`);
  const slug = filename
    .replace(regexPattern, "")
    .split(".")
    .slice(0, 1)
    .join("");

  return {
    title,
    author,
    username,
    date: new Date(date),
    categories,
    slug,
    language,
  };
};

/**
 * This method is used to generate the Node.js Website Blog Data
 * for self-consumption during RSC and Static Builds
 *
 * @return {Promise<import('../../types').BlogData>}
 */

const generateBlogData = async () => {
  // We retrieve the full pathnames of all Blog Posts to read each file individually
  const filenames = await getMarkdownFiles(process.cwd(), "src/content");
  /**j
   * This contains the metadata of all available blog categories
   */

  const blogCategories = new Set(["all"]);
  const languageCategorizedPosts = {};

  await Promise.all(
    filenames.map(
      (filename, i) =>
        new Promise((resolve) => {
          // We create a stream for reading a file instead of reading the files
          const _stream = createReadStream(join(blogPath, filename));

          // We create a readline interface to read the file line-by-line
          const _readLine = readline.createInterface({ input: _stream });

          let rawFrontmatter = "";
          let frontmatterSeparatorsEncountered = 0;

          // We read line by line
          _readLine.on("line", (line) => {
            rawFrontmatter += `${line}\n`;

            // We observe the frontmatter separators
            if (line === "---") {
              frontmatterSeparatorsEncountered++;
            }

            // Once we have two separators we close the readLine and the stream
            if (frontmatterSeparatorsEncountered === 2) {
              _readLine.close();
              _stream.close();
            }
          });

          // Then we parse gray-matter on the frontmatter
          // This allows us to only read the frontmatter part of each file
          // and optimise the read-process as we have thousands of markdown files
          _readLine.on("close", () => {
            const frontMatterData = getFrontMatter(filename, rawFrontmatter);
            frontMatterData["id"] = i;
            frontMatterData.categories.forEach((category) => {
              // we add the category to the categories set
              blogCategories.add(category);
            });
            if (!languageCategorizedPosts[frontMatterData.language]) {
              languageCategorizedPosts[frontMatterData.language] = [];
            }
            const categorizedPosts =
              languageCategorizedPosts[frontMatterData.language];
            categorizedPosts.push(frontMatterData);
            resolve(frontMatterData);
          });
        })
    )
  );
  return { categories: [...blogCategories], posts: languageCategorizedPosts };
};

export default generateBlogData;
