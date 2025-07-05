import { languageCodes } from "@/lib/types/i18n";
import { getBlog, getLangPathParams, getMetadata } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
export const generateStaticParams = async () => {
  return getLangPathParams();
};
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: languageCodes; path: Array<string> }>;
}) => {
  const { path, locale } = await params;
  const metadata = getMetadata({
    lang: locale,
    fileName: path.join("/"),
  });
  return metadata;
};
export default async function Page({
  params,
}: {
  params: Promise<{ locale: languageCodes; path: Array<string> }>;
}) {
  const { path, locale } = await params;
  const post = getBlog({
    lang: locale,
    fileName: path.join("/"),
  });
  if (!post.content) {
    return <div>Empty</div>;
  }
  return <MDXRemote source={post.content} components={{}} />;
}
