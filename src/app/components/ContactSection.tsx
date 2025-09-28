import Image from 'next/image';
import LocationMap from './contact-section/LocationMap';
import Address from './shared/Address';
import Email from './shared/Email';
import SectionTitle from './shared/SectionTitle';
export default function ContactSection() {

	return (
		<div className="relative z-20 h-full w-full px-4 grid grid-flow-col grid-rows-2 md:grid-rows-6 overflow-hidden">

			<div className='absolute top-[22%] h-[32vh] xl:h-[80vh] w-full xl:w-[70vw] xl:right-0 xl:opacity-80 z-0'>
				<LocationMap />
			</div>

			<div className="row-start-2 md:row-start-4 md:row-span-3 grid grid-rows-6 md:grid-rows-8 grid-cols-3 justify-items-center w-full">
				<div className="row-start-2 md:row-start-3 col-span-3 self-end xl:self-start place-self-start pl-5 md:pl-15">
					{/* <p className="text-white text-[11px]/[12px] md:text-[11px]/[14px] 2xl:text-[13px]/[16px] font-normal tracking-[1.5em]">HORARIOS</p> */}
					<div className='flex flex-col mt-3 md:mt-10 xl:mt-0 text-white font-light leading-5 text-sm md:text-lg 2xl:text-xl'>
						<div className='flex align-center gap-2 md:gap-4'>
							<p className='tracking-widest'>LUN. & MIE | </p>
							<p className='font-normal text-[9px]'>08:00 - 11:30 / 17:00 - 21:00</p>
						</div>
						<div className='flex align-center gap-2 md:gap-4'>
							<p className='tracking-widest'>MAR. & JUE. | </p>
							<p className='font-normal text-[9px]'>08:00 - 12:00 / 17:30 - 21:30</p>
						</div>
						<div className='flex align-center gap-2 md:gap-4'>
							<p className='tracking-widest'>VIE. |</p>
							<p className='font-normal text-[9px]'>08:00 - 12:00 / 16:30 - 19:30</p>
						</div>
					</div>
				</div>
				<div className="row-start-4 md:row-start-5 col-span-3 self-start md:self-end place-self-start pl-5 md:pl-15">
					<Address />
				</div>
				<div className="row-start-5 md:row-start-6 col-span-2 self-start md:self-end place-self-start pl-5 md:pl-15">
					<Email />
				</div>
				{/* <div className='row-start-6 md:row-start-8 col-span-3 self-center flex justify-center items-center text-center gap-4 md:gap-12 text-white text-[8px]/[12px] 2xl:text-sm tracking-widest font-light'>
					<span>PILATES</span>
					<span>SUELO</span>
					<div className='flex flex-col'>
						<span>ENTRENAMIENTO</span>
						<span>PERSONAL</span>
					</div>
					<span>PILATES</span>
					<span>EMBARAZO</span>
				</div> */}
				{/* <MainAcero imageLayout="row-start-6 md:row-start-8 self-end" /> */}
			</div>

		</div>
	);
}
