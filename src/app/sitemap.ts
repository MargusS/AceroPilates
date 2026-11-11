import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

// Only the Spanish home is listed: /en currently serves the same Spanish
// content and is marked noindex until it is actually translated.
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${SITE_URL}/`,
			changeFrequency: "monthly",
			priority: 1,
		},
	]
}
