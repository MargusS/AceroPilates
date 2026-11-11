// Public URL of the site, used for canonical URLs, robots.txt and sitemap.xml.
// Set NEXT_PUBLIC_SITE_URL to the custom domain (e.g. https://www.example.com);
// on Vercel it falls back to the project's production domain automatically.
function resolveSiteUrl(): string {
	const explicit = process.env.NEXT_PUBLIC_SITE_URL
	if (explicit) return explicit.replace(/\/+$/, "")

	const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL
	if (vercelProduction) return `https://${vercelProduction}`

	return "http://localhost:3000"
}

export const SITE_URL = resolveSiteUrl()
