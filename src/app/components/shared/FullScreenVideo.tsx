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
      } catch {
        // Silencio intencional: si el autoplay falla, mantenemos el poster.
      }
    };

    const handlePlaying = () => revealVideo();
    const handleLoadedData = () => revealVideo();
    const handleTimeUpdate = () => {
      if (video.currentTime > 0.01) {
        revealVideo();
      }
    };

    tryPlay();

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);

    revealTimeout = setTimeout(() => {
      if (video.readyState >= 2) {
        revealVideo();
      }
    }, 1200);

    return () => {
      mounted = false;
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      if (revealTimeout) clearTimeout(revealTimeout);
    };
  }, []);

  return (
    <section
      id={id}
      className="section-frame min-h-screen"
      style={{
        backgroundImage: `url('${posterImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label={alt}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterImage}
        className={`fullscreen-bg-video transition-opacity duration-300 ease-out ${
          isVideoVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <source
          src={bgVideoDesktop}
          media="(min-width: 768px)"
          type="video/mp4"
        />
        <source
          src={bgVideoMobile}
          media="(max-width: 767px)"
          type="video/mp4"
        />
        Tu navegador no soporta videos en HTML5.
      </video>

      <div
        className={`absolute inset-0 z-10 pointer-events-none ${bgOverlay ?? ""}`}
      />

      <div className="section-inner">{children}</div>
    </section>
  );
}