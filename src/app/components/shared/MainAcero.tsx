import Image from 'next/image';
export default function MainAcero({ imageOrientation, imagePosition, rowStart }: { imageOrientation: string; imagePosition: string; rowStart: number;}) {

	return (
		<div className={`${imagePosition} row-start-${rowStart} md:row-start-${rowStart + 2} col-start-1  col-span-3 flex justify-center items-center`}>
			<Image
				src="/logos/main-white.png"
				alt="Pilates Studio Dot Matrix"
				width={1280}
				height={240}
				quality={100}
				priority
				className={`${imageOrientation} w-[80vw] max-w-lg md:max-w-[600px] 2xl:max-w-[700px]`}
			/>
		</div>
	);
}
