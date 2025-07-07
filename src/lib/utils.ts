import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import fs from "fs";
import path from "path";
import { languageCodes } from "./types/i18n";
import { blogData } from "@/next.json.mjs";
import { PAGE_METADATA } from "../next.dynamics.mjs";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
type Metadata = {
  date: string;
  category: string;
  title: string;
  author: string;
  language: string;
};
const pathMap: Map<
  string,
  null | {
    metadata: Metadata;
    content: string;
  }
> = new Map();
for (const [key, value] of Object.entries(blogData.posts)) {
  value.forEach((blog) => {
    pathMap.set(`${key}${blog.slug}`, null);
  });
}
export function getLangPathParams() {
  const result: { locale: languageCodes; path: string[] }[] = [];
  for (const [key, value] of Object.entries(blogData.posts)) {
    value.forEach((blog) => {
      const paths = blog.slug.split("/");
      result.push({
        locale: key as languageCodes,
        path: paths.slice(1, paths.length),
      });
    });
  }
  return result;
}
export function getCategories() {
  return blogData.categories as string[];
}
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim() as keyof Metadata] = value;
  });
  return { metadata: metadata as Metadata, content };
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
  } catch (error) {
    console.log(error);
    return { metadata: null, content: null };
  }
}

export function getBlog({
  lang,
  fileName,
}: {
  lang: languageCodes;
  fileName: string;
}) {
  if (!pathMap.has(`${lang}/${fileName}`)) {
    return {
      metadata: null,
      content: null,
    };
  }
  const result = pathMap.get(`${lang}/${fileName}`);
  if (!result) {
    const { metadata, content } = readMDXFile(
      path.join(
        process.cwd(),
        "src",
        "content",
        lang,
        "blog",
        fileName + ".mdx"
      )
    );
    if (content && metadata) {
      pathMap.set(`${lang}/${fileName}`, {
        metadata,
        content,
      });
      return { metadata, content };
    }
    return {
      metadata: null,
      content: null,
    };
  }
  return result;
}
export function getMetadata(props: { lang: languageCodes; fileName: string }) {
  const metadata = { ...PAGE_METADATA };
  const post = getBlog(props);
  if (!post.metadata) {
    return metadata;
  }
  metadata.title = post.metadata.title;
  return metadata;
}
export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }
  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
