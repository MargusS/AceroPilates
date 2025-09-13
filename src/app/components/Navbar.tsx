"use client";
import { useState, useEffect, useRef } from "react";

export default function ScrollNav() {
	const [topPosition, setTopPosition] = useState(0);
	const [maxTop, setMaxTop] = useState(0);
	const navHeight = 60;
	const minTop = 20;
	const rafId = useRef<number | null>(null);

	useEffect(() => {
		// Define maxTop solo en el cliente
		setMaxTop(window.innerHeight / 2 - navHeight / 2);

		// Posición inicial:
		setTopPosition(window.innerHeight / 2 - navHeight / 2);

		const handleScroll = () => {
			if (rafId.current) cancelAnimationFrame(rafId.current);

			rafId.current = requestAnimationFrame(() => {
				const scrollY = window.scrollY;
				const scrollRange = 500;
				let newTop =
					maxTop - ((maxTop - minTop) * Math.min(scrollY, scrollRange)) / scrollRange;

				newTop = Math.max(minTop, Math.min(maxTop, newTop));
				setTopPosition(newTop);
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			if (rafId.current) cancelAnimationFrame(rafId.current);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [navHeight, minTop, maxTop]);

	return (
		<nav
			className="fixed left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white font-medium text-sm md:text-base flex justify-around items-center py-3 px-8 rounded-xl z-50"
			style={{ top: topPosition }}
		>
			{/* enlaces */}
			<a href="#" className="px-3 hover:text-gray-300 transition">
				ESPACIO
			</a>
			<a href="#" className="px-3 hover:text-gray-300 transition">
				EQUIPO
			</a>
			<a href="#" className="px-3 hover:text-gray-300 transition">
				SERVICIOS
			</a>
			<a href="#" className="px-3 hover:text-gray-300 transition">
				TARIFAS
			</a>
			<a href="#" className="px-3 hover:text-gray-300 transition">
				CONTACTO
			</a>
		</nav>
	);
}
