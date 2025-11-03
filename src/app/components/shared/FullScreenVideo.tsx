'use client';

export default function FullScreenVideo({
  id,
  bgVideoMobile,
  bgVideoDesktop,
  bgOverlay,
  alt = "Fondo",
  children
}: {
  id?: string;
  bgVideoMobile: string;
  bgVideoDesktop: string;
  bgOverlay?: string;
  alt?: string;
  videoPosition?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fullscreen-bg-video"
        aria-label={alt}
      >
        {/* Desktop source */}
        <source src={bgVideoDesktop} media="(min-width: 768px)" type="video/mp4" />
        {/* Mobile source */}
        <source src={bgVideoMobile} media="(max-width: 767px)" type="video/mp4" />
        {/* Fallback text */}
        Tu navegador no soporta videos en HTML5.
      </video>
      {/* Overlay */}
      <div className={`absolute inset-0 pointer-events-none ${bgOverlay}`} />
      {children}
    </section>
  );
}
