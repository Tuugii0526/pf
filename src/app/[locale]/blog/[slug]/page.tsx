import { languageCodes } from "@/lib/types/i18n";
import { getBlogPosts } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: languageCodes; slug: string }>;
}) {
  const { slug, locale } = await params;

  const post = getBlogPosts({
    lang: locale,
  }).find((post) => post.slug === slug && locale == post.metadata.language);
  if (!post) {
    return;
  }
  return <MDXRemote source={post.content} components={{}} />;
}

export function generateStaticParams() {
  return [{ slug: "hello" }, { slug: "try" }];
}

// export const dynamicParams = false;
