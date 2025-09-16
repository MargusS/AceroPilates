import Image from 'next/image';
import Address from './shared/Address';
import Email from './shared/Email';
import Instagram from './shared/Instagram';
import MainAcero from './shared/MainAcero';
export default function HomeSection() {

	return (
		<div className="relative z-20 h-full w-full px-4 grid grid-flow-col grid-rows-2 md:grid-rows-6">

			<div className="mt-5 md:mt-0 md:row-span-3 place-self-center w-full flex flex-col md:flex-row md:justify-center items-center gap-15 md:gap-25">
				<Image
					src="/logos/dotted-white.png"
					alt="Pilates Studio Dot Matrix"
					width={1280}
					height={240}
					className="w-[80vw] max-w-lg md:w-[40vw] md:max-w-[600px]  "
				/>
				<Image
					src="/logos/dotted-metal.png"
					alt="Acero Pilates Studio"
					width={1280}
					height={240}
					priority
					className="w-[80vw] max-w-lg md:w-[40vw] md:max-w-[600px] mb-8 md:mb-0"
				/>
			</div>


			<div className="md:row-span-3 grid grid-rows-6 md:grid-rows-8 grid-cols-3 justify-items-center text-white text-[8px]/[12px] md:text-sm font-light w-full">
				<div className="row-start-2 2xl:row-start-3 col-span-2 self-end place-self-start pl-5 md:pl-15 text-white text-[8px]/[12px] 2xl:text-xs">
					<Address />
				</div>
				<div className="row-start-4 2xl:row-start-5 col-span-2 self-end place-self-start pl-5 md:pl-15 text-white text-[8px]/[12px]">
					<Email />
				</div>
				<div className='row-start-5 md:row-start-6 col-span-3 self-end flex justify-center items-center text-center gap-4 md:gap-12 tracking-widest'>
					<span>PILATES</span>
					<span>SUELO</span>
					<div className='flex flex-col'>
						<span>ENTRENAMIENTO</span>
						<span>PERSONAL</span>
					</div>
					<span>PILATES</span>
					<span>EMBARAZO</span>
				</div>
				<MainAcero  imageLayout="row-start-6 md:row-start-8 self-end"/>
			</div>

		</div>
	);
}
