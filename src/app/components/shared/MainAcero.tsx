import Image from 'next/image';
export default function MainAcero({ imageLayout}: { imageLayout: string;}) {

	return (
		<div className={`${imageLayout} col-start-1 col-span-3 flex justify-center items-center z-10`}>
			<Image
				src="/logos/main-white.png"
				alt="Pilates Studio Dot Matrix"
				width={3535}
				height={511}
				sizes="(min-width: 1536px) 550px, (min-width: 768px) min(85vw, 450px), min(85vw, 512px)"
				priority
				className="w-[85vw] max-w-lg md:max-w-[450px] 2xl:max-w-[550px]"
			/>
		</div>
	);
}
