
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
					quality={100}
					sizes="100vw"
					className="z-0 select-none pointer-events-none"
					priority
				/>
				<div className="absolute inset-0 bg-black/10 z-10" />
				{children}
			</section >
		</main>
	);
}
