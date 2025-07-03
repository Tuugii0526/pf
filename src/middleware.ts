import { NextRequest, NextResponse } from "next/server";
import { getLocale } from "./lib/middleware/getLocale";
import { languageCodes } from "./lib/types/i18n";

const locales: languageCodes[] = ["en", "mn"];
const defaultLocale = "mn";
export function middleware(request: NextRequest) {
  // const acceptLanguage = request.headers.get('accept-language');
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;
  const localLanguage = getLocale(request, locales, defaultLocale);
  request.nextUrl.pathname = `/${localLanguage}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}
export const config = {
  matcher: ["/((?!.next|favicon.ico|public).*)"],
};
