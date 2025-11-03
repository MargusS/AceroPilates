import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { use } from 'react';
import ContactSection from '../components/ContactSection';
import HomeSection from '../components/HomeSection';
import Navbar from '../components/Navbar';
import PricesSection from '../components/PricesSection';
import ServicesSection from '../components/ServicesSection';
import FullScreenImage from '../components/shared/FullScreenImage';
import Instagram from '../components/Instagram';
import SpaceSection from '../components/SpaceSection';
import TeamSection from '../components/TeamSection';
import FullScreenSilk from '../components/shared/FullScreenSilk';
import FixedPopover from '../components/shared/FixedPopOver';
export default function Home({ params }: { params: Promise<{ locale: string }> }) {

	const { locale } = use(params);

	setRequestLocale(locale);
	const dictonary = useTranslations('LandingPage');

	return (
		<main className="">
			<Navbar />
			<Instagram />
			<FixedPopover />
			<FullScreenSilk id='home' bgOverlay="bg-white/30" speed={9}><HomeSection /></FullScreenSilk>
			<FullScreenImage id='space' bgImageMobile="/images/new-space-mobile.jpg" bgImageDesktop="/images/new-space.jpg" bgOverlay="bg-white/10" imagePosition="center"><SpaceSection /></FullScreenImage>
			<FullScreenImage id='team' bgImageMobile="/images/new-team-mobile.jpg" bgImageDesktop="/images/new-team.jpg" bgOverlay="bg-black/20" imagePosition="center"><TeamSection /></FullScreenImage>
			<div className="relative overflow-hidden">
				<ServicesSection />
				<div className="absolute top-[31.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10">
					<Image
						src="/logos/dotted-metal.png"
						alt="Pilates Studio Dot Matrix"
						width={1280}
						height={480}
						className="w-[95vw] max-w-lg md:w-[50vw] md:max-w-[700px]opacity-70"
					/>
				</div>
				<PricesSection />
				<div className="absolute top-[66.5%]  left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-25">
					<Image
						src="/logos/circle-metal.png"
						alt="Pilates Studio Dot Matrix"
						width={1280}
						height={480}
						className="w-[110vw] max-w-xl md:w-[60vw] md:max-w-[1000px] xl:max-w-[600px] opacity-100"
					/>
				</div>
				<FullScreenSilk id='contact' parentPosition='' rotation={0.55} bgOverlay="bg-white/20"><ContactSection /></FullScreenSilk>
			</div>
		</main>
	);
}
