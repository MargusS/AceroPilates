'use client';

export default function FullScreenVideo({
  id,
  bgVideoMobile,
  bgVideoDesktop,
  bgOverlay,
  alt = 'Fondo',
  children,
}: {
  id?: string;
  bgVideoMobile: string;
  bgVideoDesktop: string;
  bgOverlay?: string;
  alt?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section-frame min-h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fullscreen-bg-video"
        aria-label={alt}
        preload="auto"
      >
        <source src={bgVideoDesktop} media="(min-width: 768px)" type="video/mp4" />
        <source src={bgVideoMobile} media="(max-width: 767px)" type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>

      <div className={`absolute inset-0 z-10 pointer-events-none ${bgOverlay ?? ''}`} />

      <div className="section-inner">
        {children}
      </div>
    </section>
  );
}