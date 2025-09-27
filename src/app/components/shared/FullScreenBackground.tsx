
import Image, { getImageProps } from 'next/image';
export default function FullScreenBackground({
	id,
	bgImageMobile,
	bgImageDesktop,
	bgOverlay,
	alt = "Fondo",
	imagePosition = "center",
	children
}: {
	id?: string;
	bgImageMobile: string;
	bgImageDesktop: string;
	bgOverlay?: string;
	alt?: string;
	imagePosition?: string;
	children: React.ReactNode;
}) {
	const {
		props: { srcSet: desktopSrcSet, ...desktopRest }
	} = getImageProps({
		src: bgImageDesktop,
		alt,
		width: 1440,
		height: 1024,
		sizes: "100vw",
		quality: 100
	});

	// Props para mobile (ejemplo: 750x1334)
	const {
		props: { srcSet: mobileSrcSet, ...mobileRest }
	} = getImageProps({
		src: bgImageMobile,
		alt,
		width: 750,
		height: 1334,
		sizes: "100vw",
		quality: 100
	});
	return (
		<section id={id} className="relative w-full h-screen">
			<picture>
				<source media="(min-width: 768px)" srcSet={desktopSrcSet} />
				<source media="(max-width: 767px)" srcSet={mobileSrcSet} />
				<img
					{...desktopRest}
					alt={alt}
					style={{
						objectFit: "cover",
						objectPosition: imagePosition,
						width: "100%",
						height: "100%",
						position: "absolute",
					}}
				/>
			</picture>
			<div className={`absolute inset-0 ${bgOverlay} z-10`} />
			{children}
		</section >
	);
}


