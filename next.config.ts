import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
   reactStrictMode: true,
   images: {
      // AVIF first (~70% smaller than the previous WebP at no visible loss), WebP as fallback.
      formats: ["image/avif", "image/webp"],
      // Single high quality for every image; any other `quality` value snaps to this.
      qualities: [90],
   },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
