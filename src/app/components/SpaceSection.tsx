import Image from 'next/image';
import MainAcero from './shared/MainAcero';
export default function SpaceSection() {

	return (
		<div className="relative z-20 h-full w-full px-4 grid grid-flow-col grid-rows-2 md:grid-rows-6">
			<div className='md:row-span-3 '>
				<MainAcero imageOrientation="rotate-x-180" imagePosition="self-start" rowStart={1} />
				<MainAcero imageOrientation="opacity-50" imagePosition="self-start" rowStart={2} />
			</div>



		</div>
	);
}
