import Image from 'next/image';
export default function MainAceroBottom() {

	return (
		<div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 w-[85vw] max-w-2xl">
			<Image
				src="/logos/main-white.png"
				alt="Pilates Studio Dot Matrix"
				width={320}
				height={60}
				style={{ width: "100%", height: "auto" }}
				priority
			/>
		</div>
	);
}
