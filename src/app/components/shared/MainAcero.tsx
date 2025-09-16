import Image from 'next/image';
export default function MainAcero({ imageLayout}: { imageLayout: string;}) {

	return (
		<div className={`${imageLayout} col-start-1 col-span-3 flex justify-center items-center`}>
			<Image
				src="/logos/main-white.png"
				alt="Pilates Studio Dot Matrix"
				width={1280}
				height={240}
				quality={100}
				priority
				className="w-[85vw] max-w-lg md:max-w-[450px] 2xl:max-w-[625px]"
			/>
		</div>
	);
}
