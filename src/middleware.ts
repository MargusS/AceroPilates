import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware({ ...routing, localeDetection: false });

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignora rutas técnicas/estáticas
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return intlMiddleware(req);
  }

  // Primer segmento (posible locale)
  const [, seg1] = pathname.split("/");

  const isKnownLocale = routing.locales.includes(
    seg1 as (typeof routing.locales)[number]
  );

  // Si tiene primer segmento y NO es un locale válido, lo quitamos
  if (seg1 && !isKnownLocale) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(/^\/[^/]+/, "") || "/";
    return NextResponse.redirect(url);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: "/((?!api|trpc|_next|.*\\..*).*)",
};
