import LocationMap from './contact-section/LocationMap';
import Address from './shared/Address';
import Email from './shared/Email';
export default function ContactSection() {

	return (
		<div className="relative z-20 h-full w-full px-4 grid grid-flow-col grid-rows-2 md:grid-rows-6 overflow-hidden">

			<div className='absolute top-[22%] h-[32vh] xl:h-[80vh] w-full xl:w-[70vw] xl:right-0 xl:opacity-80 z-0'>
				<LocationMap />
			</div>

			<div className="row-start-2 md:row-start-4 md:row-span-3 grid grid-rows-6 md:grid-rows-8 grid-cols-3 justify-items-center w-full">
				<div className="row-start-2 md:row-start-3 col-span-3 self-end xl:self-start place-self-start pl-5 md:pl-15">
					<div className='flex flex-col mt-3 md:mt-10 xl:mt-0 text-white font-light leading-5 text-sm md:text-lg 2xl:text-xl max-w-[92vw] md:max-w-none'>
						<div className='flex align-center gap-2 md:gap-4'>
							<p className='font-normal text-[9px]'>08:00 - 11:30 / 17:00 - 21:00</p>
							<p className='tracking-widest'>| LUN. & MIE </p>
						</div>
						<div className='flex align-center gap-2 md:gap-4'>
							<p className='font-normal text-[9px]'>08:00 - 12:00 / 17:30 - 21:30</p>
							<p className='tracking-widest'>| MAR. & JUE.</p>
						</div>
						<div className='flex align-center gap-2 md:gap-4'>
							<p className='font-normal text-[9px]'>08:00 - 12:00 / 16:30 - 19:30</p>
							<p className='tracking-widest'>| VIE.</p>
						</div>
					</div>
				</div>
				<div className="row-start-4 md:row-start-5 col-span-3 self-start md:self-end place-self-start pl-5 md:pl-15">
					<Address />
				</div>
				<div className="row-start-5 md:row-start-6 col-span-2 self-start md:self-end place-self-start pl-5 md:pl-15">
					<Email />
				</div>
			</div>
		</div>
	);
}
