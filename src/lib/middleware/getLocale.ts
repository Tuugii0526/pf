import { languageCodes } from "@/lib/types/i18n";
import { match } from "@formatjs/intl-localematcher";
import { NextRequest } from "next/server";
export const getLocale = (
  request: NextRequest,
  locales: languageCodes[],
  defaultLocale: string
) => {
  const header = request?.headers?.get("accept-language");
  const languages =
    header
      ?.split(",")
      ?.map((lang) => {
        const [code, qValue] = lang.trim().split(";q=");
        return { code, q: qValue ? parseFloat(qValue) : 1.0 };
      })
      ?.sort((a, b) => b.q - a.q)
      ?.map((lang) => lang.code) || [];
  return match(languages, locales, defaultLocale);
};
