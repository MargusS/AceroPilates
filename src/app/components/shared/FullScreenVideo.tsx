"use client";

import { useEffect, useRef, useState } from "react";

type FullScreenVideoProps = {
	id?: string;
	bgVideoMobile: string;
	bgVideoDesktop: string;
	bgOverlay?: string;
	alt?: string;
	posterImage?: string;
	children: React.ReactNode;
};

export default function FullScreenVideo({
	id,
	bgVideoMobile,
	bgVideoDesktop,
	bgOverlay,
	alt = "Fondo",
	posterImage = "/images/bgHome-poster.webp",
	children,
}: FullScreenVideoProps) {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [isVideoVisible, setIsVideoVisible] = useState(false);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		let mounted = true;
		let revealTimeout: ReturnType<typeof setTimeout> | null = null;

		const revealVideo = () => {
			if (!mounted) return;
			setIsVideoVisible(true);
		};

		const tryPlay = async () => {
			try {
				await video.play();
			} catch { }
		};

		const handlePlaying = () => {
			revealVideo();
		};

		const handleLoadedData = () => {
			revealVideo();
		};

		tryPlay();

		video.addEventListener("playing", handlePlaying);
		video.addEventListener("loadeddata", handleLoadedData);

		revealTimeout = setTimeout(() => {
			if (video.readyState >= 2) {
				revealVideo();
			}
		}, 1200);

		return () => {
			mounted = false;
			video.removeEventListener("playing", handlePlaying);
			video.removeEventListener("loadeddata", handleLoadedData);
			if (revealTimeout) clearTimeout(revealTimeout);
		};
	}, []);

	return (
		<section
			id={id}
			aria-label={alt}
			className="relative min-h-[100svh] overflow-hidden"
			style={{
				backgroundImage: `url('${posterImage}')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="absolute inset-0 z-0">
				<video
					ref={videoRef}
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
					poster={posterImage}
					aria-hidden="true"
					className={`fullscreen-bg-video pointer-events-none h-full w-full object-cover transition-opacity duration-300 ease-out ${isVideoVisible ? "opacity-100" : "opacity-0"
						}`}
				>
					<source
						src={bgVideoMobile}
						media="(max-width: 767px)"
						type="video/mp4"
					/>
					<source
						src={bgVideoDesktop}
						media="(min-width: 768px)"
						type="video/mp4"
					/>
					Video not supported in this browser.
				</video>
			</div>

			<div
				className={`absolute inset-0 z-10 pointer-events-none ${bgOverlay ?? ""}`}
			/>

			<div className="relative z-20 min-h-[100svh]">
				<div className="section-inner">{children}</div>
			</div>
		</section>
	);
}