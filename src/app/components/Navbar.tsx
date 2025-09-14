"use client";
import { useEffect, useState } from "react";

export default function ScrollNav() {
  const navHeight = 20;
  const offsetTop = 40;
  const [isFixed, setIsFixed] = useState(false);
  const [navReady, setNavReady] = useState(false); // Control renderizado del nav
  const [centerTop, setCenterTop] = useState<number>(0);

  useEffect(() => {
    // Solo ejecuta en el cliente
    const calcCenter = () => {
      setCenterTop(window.innerHeight / 2 - navHeight / 2);
      setNavReady(true);
    };
    calcCenter();
    window.addEventListener("resize", calcCenter);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= centerTop - offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", calcCenter);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [centerTop, navHeight, offsetTop]);

  // Renderiza nav solo cuando se conoce el valor real del top
  if (!navReady) return null; // Alternativamente, un loader o un espacio vacío

  return (
    <nav
      className={isFixed
        ? "fixed w-full left-1/2 transform -translate-x-1/2 bg-white/40 backdrop-blur-sm text-white font-medium text-sm flex justify-around items-center py-1 z-50"
        : "absolute w-full left-1/2 transform -translate-x-1/2 bg-white/40 backdrop-blur-sm text-white font-medium text-sm flex justify-around items-center py-1 z-50"}
      style={{ top: isFixed ? offsetTop : centerTop }}
    >
      <a href="#" className="px-1 hover:text-gray-300 transition text-xs">ESPACIO</a>
      <a href="#" className="px-1 hover:text-gray-300 transition text-xs">EQUIPO</a>
      <a href="#" className="px-1 hover:text-gray-300 transition text-xs">SERVICIOS</a>
      <a href="#" className="px-1 hover:text-gray-300 transition text-xs">TARIFAS</a>
      <a href="#" className="px-1 hover:text-gray-300 transition text-xs">CONTACTO</a>
    </nav>
  );
}
