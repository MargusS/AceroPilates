import Image from 'next/image';
export default function TeamSection() {

	return (
		<div className="relative h-full w-full px-4 overflow-hidden z-30">
			<div className='flex justify-center my-3'>
				<Image
					src="/logos/dotted-white.png"
					alt="Pilates Studio Dot Matrix"
					width={1280}
					height={480}
					className="w-[80vw] max-w-lg md:w-[40vw] md:max-w-[600px]"
				/>
			</div>

		</div>
	);
}
