import createMiddleware from "next-intl/middleware";
import { LocalePrefix } from "next-intl/routing";

export const localePrefix = "as-needed" satisfies LocalePrefix;

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "bg"],

  // Used when no locale matches
  defaultLocale: "bg",
  // localePrefix,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(bg|en)/:path*"],
  // ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
