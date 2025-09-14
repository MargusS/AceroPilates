import Image from 'next/image';
export default function MainAceroBottom() {

	return (
		<div className="self-end col-start-1 row-start-6 md:row-start-8 col-span-3">
			<Image
				src="/logos/main-white.png"
				alt="Pilates Studio Dot Matrix"
				width={1280}
				height={240}
				quality={100}
				priority
				className="w-[80vw] max-w-lg md:max-w-[600px] 2xl:max-w-[1000px]"
			/>
		</div>
	);
}
