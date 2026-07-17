"use client";
import { useEffect, useState } from "react";

export default function ScrollNav() {
  const navHeight = 18;
  const [isFixed, setIsFixed] = useState(false);
  const [navReady, setNavReady] = useState(false);
  const [centerTop, setCenterTop] = useState(0);

  useEffect(() => {
    const calculateNavCenter = () => {
      const width = window.innerWidth;

      let offsetTop;
      if (width < 375) offsetTop = 30;
      else if (width < 768) offsetTop = 37;
      else if (width < 1536) offsetTop = 50;
      else offsetTop = 70;

      const center = window.innerHeight / 2 - navHeight / 2;

      setCenterTop(center);
      setNavReady(true);
      setIsFixed(window.scrollY >= center - offsetTop);
    };

    calculateNavCenter();

    window.addEventListener("scroll", calculateNavCenter);
    window.addEventListener("resize", calculateNavCenter);

    return () => {
      window.removeEventListener("scroll", calculateNavCenter);
      window.removeEventListener("resize", calculateNavCenter);
    };
  }, []);

  if (!navReady) return null;

  const positionClass = isFixed ? "fixed" : "absolute";

  let offsetTopFinal;
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    if (width < 375) offsetTopFinal = 30;
    else if (width < 768) offsetTopFinal = 37;
    else if (width < 1536) offsetTopFinal = 50;
    else offsetTopFinal = 70;
  } else {
    offsetTopFinal = 40;
  }

  return (
    <div
      className={`${positionClass} left-0 right-0 z-50 pointer-events-none`}
      style={{ top: isFixed ? offsetTopFinal : centerTop }}
    >
      <div className="site-shell px-4 md:px-6">
        <nav className="pointer-events-auto mx-auto flex w-fit max-w-full items-center justify-center gap-4 rounded-full border border-white/20 bg-white/85 px-4 md:px-5 text-[9px]/[9px] font-medium backdrop-blur-md md:gap-5 md:text-xs 2xl:text-sm">
          <a href="#space" className="inline-block leading-none text-metal-300 transition hover:text-gray-300 font-bold pt-2 pb-1">
            ESPACIO
          </a>
          <a href="#team" className="inline-block leading-none text-metal-300 transition hover:text-gray-300 font-bold pt-2 pb-1">
            EQUIPO
          </a>
          <a href="#services" className="inline-block leading-none text-metal-300 transition hover:text-gray-300 font-bold pt-2 pb-1">
            SERVICIOS
          </a>
          <a href="#prices" className="inline-block leading-none text-metal-300 transition hover:text-gray-300 font-bold pt-2 pb-1">
            TARIFAS
          </a>
          <a href="#contact" className="inline-block leading-none text-metal-300 transition hover:text-gray-300 font-bold pt-2 pb-1">
            CONTACTO
          </a>
        </nav>
      </div>
    </div>
  );
}