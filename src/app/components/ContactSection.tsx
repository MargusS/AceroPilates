import Image from 'next/image';
import LocationMap from './contact-section/LocationMap';
import Address from './shared/Address';
import Email from './shared/Email';
import SectionTitle from './shared/SectionTitle';
export default function ContactSection() {

	return (
		<div className="relative z-20 h-full w-full px-4 grid grid-flow-col grid-rows-2 md:grid-rows-6 overflow-hidden">

			<div className="my-2 md:row-span-3 place-self-start w-full flex flex-col md:flex-row md:justify-center items-center gap-12 md:gap-25">
				<Image
					src="/logos/dotted-white.png"
					alt="Pilates Studio Dot Matrix"
					width={1280}
					height={240}
					className="w-[70vw] max-w-lg md:w-[40vw] md:max-w-[550px]"
				/>
			</div>

			<div className='absolute top-[25%] xl:top-[33%] h-[32vh] xl:h-[55vh] w-full xl:w-[40vw] xl:max-w-[600px] xl:right-1/2 xl:translate-x-1/2 z-10 '>
				<LocationMap />
			</div>

			<div className="md:row-span-3 grid grid-rows-6 md:grid-rows-8 grid-cols-3 justify-items-center w-full">
				<div className="row-start-4 md:row-start-5 col-span-3 self-start md:self-end place-self-start pl-5 md:pl-15">
					<Address />
				</div>
				<div className="row-start-5 md:row-start-6 col-span-2 self-start md:self-end place-self-start pl-5 md:pl-15">
					<Email />
				</div>
				<div className='row-start-6 md:row-start-8 col-span-3 self-center flex justify-center items-center text-center gap-4 md:gap-12 text-white text-[8px]/[12px] 2xl:text-sm tracking-widest font-light'>
					<span>PILATES</span>
					<span>SUELO</span>
					<div className='flex flex-col'>
						<span>ENTRENAMIENTO</span>
						<span>PERSONAL</span>
					</div>
					<span>PILATES</span>
					<span>EMBARAZO</span>
				</div>
				{/* <MainAcero imageLayout="row-start-6 md:row-start-8 self-end" /> */}
			</div>

		</div>
	);
}
