import { languageCodes } from "@/lib/types/i18n";
import { getBlog } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: languageCodes; path: Array<string> }>;
}) {
  const { path, locale } = await params;
  const post = getBlog({
    lang: locale,
    fileName: path.join("/") + ".mdx",
  });
  if (!post.content) {
    return <div>Empty</div>;
  }
  return <MDXRemote source={post.content} components={{}} />;
}
