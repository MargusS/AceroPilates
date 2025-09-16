import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import FullScreenBackground from '../components/shared/FullScreenBackground';
import HomeSection from '../components/HomeSection';
import Navbar from '../components/Navbar';
import SpaceSection from '../components/SpaceSection';
import Instagram from '../components/shared/Instagram';
export default function Home({ params }: { params: Promise<{ locale: string }> }) {

	const { locale } = use(params);

	setRequestLocale(locale);
	const dictonary = useTranslations('LandingPage');

	return (
		<main className="">
			<Navbar />
			<Instagram />
			<FullScreenBackground bgImage="/images/image00000.jpg" imagePosition="center"><HomeSection /></FullScreenBackground>
			<FullScreenBackground bgImage="/images/image00004.jpg" imagePosition="right"><SpaceSection /></FullScreenBackground>
		</main>
	);
}
