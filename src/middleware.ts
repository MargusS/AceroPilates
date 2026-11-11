import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Unknown paths are left to the app so they return a real 404
// (redirecting them to the home made search engines see "soft 404s").
export default createMiddleware({ ...routing, localeDetection: false });

export const config = {
  matcher: "/((?!api|trpc|_next|.*\\..*).*)",
};
