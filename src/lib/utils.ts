import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import fs from "fs";
import path from "path";
import { languageCodes } from "./types/i18n";
import { blogData } from "@/next.json.mjs";
import { PAGE_METADATA } from "../next.dynamics.mjs";
import { CategoriesT } from "./types/categories";
import { cache } from "react";
import { CATEGORIES, Languages, PER_PAGE_BLOGS } from "./constant";

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const introRegex = /^(?:---[\s\S]*?---)\s*([\s\S]+?)(?=\n\n|#)/m;
  const introductionMatch = introRegex.exec(fileContent);
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
  metadata["startText"] = introductionMatch![1];
  return { metadata: metadata as Metadata, content };
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
type Metadata = {
  createdAt: string;
  updatedAt: string;
  category: string;
  title: string;
  author: string;
  language: string;
  startText: string;
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
const getOneCategoryBlogs = cache(
  ({ category, lang }: { category: CategoriesT; lang: languageCodes }) => {
    return blogData.posts[lang]
      ?.filter((post) => post.categories.includes(category))
      ?.sort((p1, p2) => {
        return (
          new Date(p1.createdAt).getTime() - new Date(p2.createdAt).getTime()
        );
      });
  }
);

export const getCategoryWithItsPossiblePage = () => {
  const categories = Object.values(CATEGORIES);
  const result: { locale: languageCodes; path: string[] }[] = [];
  categories.forEach((c) => {
    Languages.forEach((lang) => {
      const cBlogs = getOneCategoryBlogs({
        category: c,
        lang,
      });
      const totalBlogsLength = cBlogs?.length || 0;
      let totalPages;
      if (totalBlogsLength == 0) {
        totalPages = 0;
      } else {
        totalPages = totalBlogsLength / PER_PAGE_BLOGS;
        totalPages = totalPages % 1 == 1 ? totalPages : Math.ceil(totalPages);
      }
      result.push({
        locale: lang,
        path: [c],
      });
      for (let i = 1; i <= totalPages; i++) {
        result.push({
          locale: lang,
          path: [c, "page", String(i)],
        });
      }
    });
  });
  return result;
};

export function getLangPathParams() {
  const result: { locale: languageCodes; path: string[] }[] =
    getCategoryWithItsPossiblePage();

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

export function getBlogsByCategory({
  category,
  lang,
  page,
}: {
  category: CategoriesT;
  lang: languageCodes;
  page: number;
}) {
  const categoryblogs = getOneCategoryBlogs({
    category,
    lang,
  });
  const totalBlogsLength = categoryblogs?.length || 0;
  let totalPages;
  if (totalBlogsLength == 0) {
    totalPages = 0;
  } else {
    totalPages = totalBlogsLength / PER_PAGE_BLOGS;
    totalPages = totalPages % 1 == 1 ? totalPages : Math.ceil(totalPages);
  }

  return {
    posts: categoryblogs?.slice(
      PER_PAGE_BLOGS * (page - 1),
      PER_PAGE_BLOGS * page
    ),
    pagination: {
      prev: page > 1 ? page - 1 : null,
      next: page < totalPages ? page + 1 : null,
      totalPages,
      totalLength: totalBlogsLength,
    },
  };
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
  // const { metadata, content } = readMDXFile(
  //   path.join(
  //     process.cwd(),
  //     "src",
  //     "content",
  //     lang,
  //     "blog",
  //     fileName + "/index.mdx"
  //   )
  // );
  // return { metadata, content };
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
        fileName + "/index.mdx"
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
  metadata.description = post.metadata.startText;
  return metadata;
}
