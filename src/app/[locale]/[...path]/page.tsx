import { languageCodes } from "@/lib/types/i18n";
import { DYNAMIC_ROUTES } from "../../../next.dynamic.constants.mjs";
import { notFound } from "next/navigation";
export default async function Page({
  params,
}: {
  params: Promise<{ locale: languageCodes; path: Array<string> }>;
}) {
  const { path = [] } = await params;
  const joinedPath = path.join("/");
  const isBlogThere = DYNAMIC_ROUTES.get(`/${joinedPath}`);
  if (!isBlogThere) return notFound();
  return <div>blog</div>;
}
