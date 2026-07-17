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
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => {
      setIsVideoReady(true);
      void video.play().catch(() => {});
    };

    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

    video.addEventListener("loadeddata", handleReady);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("loadeddata", handleReady);
      video.removeEventListener("canplay", handleCanPlay);
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
        preload="metadata"
        poster={posterImage}
        className={`fullscreen-bg-video transition-opacity duration-700 ease-out ${
          isVideoReady ? "opacity-100" : "opacity-0"
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