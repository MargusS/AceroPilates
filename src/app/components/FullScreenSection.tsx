
import Image from 'next/image';
export default function FullScreenSection({ bgImage, imagePosition, children }: { bgImage: string; imagePosition: string; children: React.ReactNode }) {

	return (
		<main className="">
			<section className="relative w-full h-screen overflow-hidden">
				<Image
					src={bgImage}
					alt="Fondo"
					layout="fill"
					objectFit="cover"
					objectPosition={imagePosition}
					priority
					className="z-0"
				/>
				<div className="absolute inset-0 bg-black/20 z-10" />
				{children}
			</section >
		</main>
	);
}
