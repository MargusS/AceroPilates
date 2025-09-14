import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import FullScreenSection from '../components/shared/FullScreenSection';
import HomeSection from '../components/HomeSection';
import Navbar from '../components/Navbar';
import SpaceSection from '../components/SpaceSection';
export default function Home({ params }: { params: Promise<{ locale: string }> }) {

	const { locale } = use(params);

	setRequestLocale(locale);
	const dictonary = useTranslations('LandingPage');

	return (
		<main className="">
			<Navbar />
			<FullScreenSection bgImage="/images/image00000.jpg" imagePosition="center"><HomeSection /></FullScreenSection>
			<FullScreenSection bgImage="/images/image00004.jpg" imagePosition="right"><SpaceSection /></FullScreenSection>
		</main>
	);
}
