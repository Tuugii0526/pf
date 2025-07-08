import { BASE_URL } from "@/lib/constant";
import { getCategoryWithItsPossiblePage, getLangPathParams } from "@/lib/utils";
import type { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const allStaticParams = getLangPathParams();
  const allCategoryParams = getCategoryWithItsPossiblePage()
    .filter((path) => path.locale == "en")
    .map((path) => {
      const currentDate = new Date().toISOString();
      return {
        url: `${BASE_URL}/en/${path.path.join("/")}`,
        lastModified: currentDate,
        changeFrequency: "always" as const,
        alternates: {
          languages: {
            mn: `${BASE_URL}/mn/${path.path.join("/")}`,
          },
        },
      };
    });
  const allEnglistPaths = allStaticParams
    .filter((path) => path.locale == "en")
    .map((path) => {
      const currentDate = new Date().toISOString();
      return {
        url: `${BASE_URL}/en/${path.path.join("/")}`,
        lastModified: currentDate,
        changeFrequency: "always" as const,
        alternates: {
          languages: {
            mn: `${BASE_URL}/mn/${path.path.join("/")}`,
          },
        },
      };
    });

  const result = [...allEnglistPaths, ...allCategoryParams];
  console.dir(result, { depth: null });
  return result;
};
export default sitemap;
export const dynamic = "force-static";
export const revalidate = false;
