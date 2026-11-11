import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';
import type { Metadata } from "next";
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import "../globals.css";

type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

const nimbusSans = localFont({
	variable: "--font-nimbus-sans",
	display: "swap",
	src: [
		{
			path: "../fonts/nimbus/nimbus-sans-light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../fonts/nimbus/nimbus-sans-regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/nimbus/nimbus-sans-bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
})

const dotMatrix = localFont({
	variable: "--font-dot-matrix",
	display: "swap",
	src: [
		{
			path: "../fonts/dotmatrix/dot-matrix-regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/dotmatrix/dot-matrix-bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
})

const tiny = localFont({
	variable: "--font-tiny",
	display: "swap",
	src: [
		{
			path: "../fonts/tiny/tiny-60.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/tiny/tiny-80.woff2",
			weight: "700",
			style: "normal",
		},
	],
})

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
	const { locale } = await params;
	const isDefaultLocale = locale === routing.defaultLocale;

	return {
		metadataBase: new URL(SITE_URL),
		title: "Acero Pilates Studio",
		description: "Estudio de Pilates en Madrid - Clases presenciales y online",
		// Both locales currently show the same Spanish content, so the Spanish
		// home is the canonical page and /en stays out of the index until translated.
		alternates: { canonical: "/" },
		robots: isDefaultLocale ? undefined : { index: false, follow: true },
		// Stop mobile browsers (iOS Safari) from turning the phone number into a tappable link.
		formatDetection: { telephone: false },
	};
}

export default async function RootLayout({ children, params }: Props) {

	const { locale } = await params;
	// Only the configured locales exist; anything else (e.g. /foo.txt) is a 404
	// instead of rendering the home page with a bogus `lang`.
	if (!hasLocale(routing.locales, locale)) notFound();
	setRequestLocale(locale);

	return (
		<html lang={locale}>
			<body
				className={`${nimbusSans.className} ${dotMatrix.variable} ${tiny.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
