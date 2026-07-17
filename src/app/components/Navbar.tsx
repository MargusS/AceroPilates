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

const links = [
  { href: "#space", label: "ESPACIO" },
  { href: "#team", label: "EQUIPO" },
  { href: "#services", label: "SERVICIOS" },
  { href: "#prices", label: "TARIFAS" },
  { href: "#contact", label: "CONTACTO" },
];

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
      <div className="site-shell">
        <nav className="pointer-events-auto mx-auto flex w-full items-center justify-center border-y border-white/55 bg-white/88 px-2 py-1 backdrop-blur-sm supports-[backdrop-filter]:bg-white/78 md:px-4 md:py-1.5">
          <div className="flex w-full items-center justify-center overflow-hidden whitespace-nowrap">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-w-0 flex-shrink items-center justify-center px-2 py-1 text-[clamp(0.5rem,1.75vw,0.72rem)] leading-none font-semibold tracking-[0.02em] text-metal-400 transition-colors duration-200 hover:text-metal-700 md:px-3 md:text-[0.72rem] lg:px-4 lg:text-xs"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}