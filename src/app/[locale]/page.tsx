import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import FullScreenBackground from '../components/shared/FullScreenBackground';
import HomeSection from '../components/HomeSection';
import Navbar from '../components/Navbar';
import SpaceSection from '../components/SpaceSection';
import Instagram from '../components/shared/Instagram';
import TeamSection from '../components/TeamSection';
import ServicesSection from '../components/ServicesSection';
import Image from 'next/image';
import PricesSection from '../components/PricesSection';
import ContactSection from '../components/ContactSection';
export default function Home({ params }: { params: Promise<{ locale: string }> }) {

	const { locale } = use(params);

	setRequestLocale(locale);
	const dictonary = useTranslations('LandingPage');

	return (
		<main className="">
			<Navbar />
			<Instagram />
			<FullScreenBackground id='home' bgImageMobile="/images/image00000.jpg" bgImageDesktop="/images/image00000.jpg" imagePosition="center"><HomeSection /></FullScreenBackground>
			<FullScreenBackground id='space' bgImageMobile="/images/space-mobile.jpg" bgImageDesktop="/images/space-desktop.jpg" imagePosition="right"><SpaceSection /></FullScreenBackground>
			<div className="relative overflow-hidden">
				<FullScreenBackground id='team' bgImageMobile="/images/team-mobile.jpg" bgImageDesktop="/images/team-desktop.jpg" imagePosition="center"><TeamSection /></FullScreenBackground>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10">
					<Image
						src="/logos/circle-metal.png"
						alt="Pilates Studio Dot Matrix"
						width={1280}
						height={480}
						className="w-[110vw] max-w-lg md:w-[40vw] md:max-w-[650px] opacity-70"
					/>
				</div>
				<FullScreenBackground id='services' bgImageMobile="/images/image00000.jpg" bgImageDesktop="/images/image00000.jpg" imagePosition="center"><ServicesSection /></FullScreenBackground>
			</div>
			<FullScreenBackground id='prices' bgImageMobile="/images/image00001.jpg" bgImageDesktop="/images/image00001.jpg" imagePosition="left"><PricesSection /></FullScreenBackground>
			<FullScreenBackground id='contact' bgImageMobile="/images/image00000.jpg" bgImageDesktop="/images/image00000.jpg" imagePosition="left"><ContactSection /></FullScreenBackground>
		</main>
	);
}
