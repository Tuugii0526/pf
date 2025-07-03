import { getBlogPosts } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }
  return <MDXRemote source={post.content} components={{}} />;
}

export function generateStaticParams() {
  return [{ slug: "hello" }, { slug: "try" }];
}

export const dynamicParams = false;
