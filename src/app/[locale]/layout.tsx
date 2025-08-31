import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server'
import localFont from 'next/font/local'
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

export const metadata: Metadata = {
	title: "Acero Pilates Studio",
	description: "Estudio de Pilates en Madrid - Clases presenciales y online",
};

export default async function RootLayout({ children, params }: Props) {

	const { locale } = await params || { locale: routing.defaultLocale };
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
