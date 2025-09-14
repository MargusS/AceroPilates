"use client";
import { useEffect, useState } from "react";

export default function ScrollNav() {
	const navHeight = 0;
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
	const positionClass = isFixed ? "fixed" : "absolute";

	return (
		<nav
			className={`${positionClass} w-full left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-white font-medium text-sm flex justify-center items-center gap-7 py-1 z-50`}

			style={{ top: isFixed ? offsetTop : centerTop }}
		>
			<a href="#" className=" text-metal-300 hover:text-gray-300 transition text-[9px]/[9px] md:text-xs font-bold">EQUIPO</a>
			<a href="#" className=" text-metal-300 hover:text-gray-300 transition text-[9px]/[9px] md:text-xs font-bold">ESPACIO</a>
			<a href="#" className=" text-metal-300 hover:text-gray-300 transition text-[9px]/[9px] md:text-xs font-bold">SERVICIOS</a>
			<a href="#" className=" text-metal-300 hover:text-gray-300 transition text-[9px]/[9px] md:text-xs font-bold">TARIFAS</a>
			<a href="#" className=" text-metal-300 hover:text-gray-300 transition text-[9px]/[9px] md:text-xs font-bold">CONTACTO</a>
		</nav>
	);
}
