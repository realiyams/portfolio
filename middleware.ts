import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "id"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language");
  const locale =
    acceptLanguage?.startsWith("id") ? "id" : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|.*\\..*).*)",
  ],
};

