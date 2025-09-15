import Image from 'next/image';
import MainAcero from './shared/MainAcero';
export default function SpaceSection() {

	return (
		<div className="relative z-20 h-full w-full px-4 grid grid-flow-col grid-rows-2 md:grid-rows-6">
			<div className='md:row-span-3 '>
				<MainAcero imageLayout="rotate-x-180 self-start row-start-2 md:row-start-1" />
				<MainAcero imageLayout="opacity-50 self-start row-start-2 md:row-start-4" />
			</div>



		</div>
	);
}
