import createMiddleware from "next-intl/middleware";
import { LocalePrefix } from "next-intl/routing";

// export const localePrefix = "as-needed" satisfies LocalePrefix;
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
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(nl|en)/:path*",
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};

// import createMiddleware from "next-intl/middleware";
// import {
//   defaultLocale,
//   localePrefix,
//   locales,
//   pathnames,
// } from "@/constants/config";

// export default createMiddleware({
//   defaultLocale,
//   locales,
//   pathnames,
//   localePrefix,
// });

// export const config = {
//   matcher: [
//     // Enable a redirect to a matching locale at the root
//     "/",

//     // Set a cookie to remember the previous locale for
//     // all requests that have a locale prefix
//     "/(nl|en)/:path*",

//     // Enable redirects that add missing locales
//     // (e.g. `/pathnames` -> `/en/pathnames`)
//     "/((?!_next|_vercel|.*\\..*).*)",
//   ],
// };
