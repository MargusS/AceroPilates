"use client";

import { useEffect, useState } from "react";

const NAV_HEIGHT = 18;
const DEFAULT_TOP = 40;

function getOffsetTop(width: number) {
  if (width < 375) return 30;
  if (width < 768) return 37;
  if (width < 1536) return 50;
  return 70;
}

export default function ScrollNav() {
  const [isFixed, setIsFixed] = useState(false);
  const [topPosition, setTopPosition] = useState(DEFAULT_TOP);

  useEffect(() => {
    const updateNavPosition = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const offsetTop = getOffsetTop(width);
      const center = height / 2 - NAV_HEIGHT / 2;
      const shouldBeFixed = window.scrollY >= center - offsetTop;

      setIsFixed(shouldBeFixed);
      setTopPosition(shouldBeFixed ? offsetTop : center);
    };

    updateNavPosition();

    window.addEventListener("scroll", updateNavPosition, { passive: true });
    window.addEventListener("resize", updateNavPosition);

    return () => {
      window.removeEventListener("scroll", updateNavPosition);
      window.removeEventListener("resize", updateNavPosition);
    };
  }, []);

  return (
    <div
      className={`${isFixed ? "fixed" : "absolute"} left-0 right-0 z-50 pointer-events-none`}
      style={{ top: topPosition }}
    >
      <div className="site-shell px-4 md:px-6">
        <nav className="pointer-events-auto mx-auto flex w-fit max-w-full items-center justify-center gap-4 rounded-full border border-white/20 bg-white/85 px-4 md:px-5 text-[9px]/[9px] font-medium backdrop-blur-md md:gap-5 md:text-xs 2xl:text-sm">
          <a href="#space" className="inline-block pt-2 pb-1 leading-none font-bold text-metal-300 transition hover:text-gray-300">
            ESPACIO
          </a>
          <a href="#team" className="inline-block pt-2 pb-1 leading-none font-bold text-metal-300 transition hover:text-gray-300">
            EQUIPO
          </a>
          <a href="#services" className="inline-block pt-2 pb-1 leading-none font-bold text-metal-300 transition hover:text-gray-300">
            SERVICIOS
          </a>
          <a href="#prices" className="inline-block pt-2 pb-1 leading-none font-bold text-metal-300 transition hover:text-gray-300">
            TARIFAS
          </a>
          <a href="#contact" className="inline-block pt-2 pb-1 leading-none font-bold text-metal-300 transition hover:text-gray-300">
            CONTACTO
          </a>
        </nav>
      </div>
    </div>
  );
}