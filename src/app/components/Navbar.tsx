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

			if (window.scrollY >= center - offsetTop) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
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
		<nav
			className={`${positionClass} w-full left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-white font-medium text-[9px]/[9px] md:text-xs 2xl:text-sm flex justify-center items-center gap-7 py-1 z-50`}
			style={{ top: isFixed ? offsetTopFinal : centerTop }}
		>
			<a href="#space" className="inline-block leading-none text-metal-300 hover:text-gray-300 transition font-bold">
				<span>
					ESPACIO
				</span>
			</a>
			<a href="#team" className="inline-block leading-none text-metal-300 hover:text-gray-300 transition font-bold">
				<span>
					EQUIPO
				</span>
			</a>
			<a href="#services" className="inline-block leading-none text-metal-300 hover:text-gray-300 transition font-bold">
				<span>
					SERVICIOS
				</span>
			</a>
			<a href="#" className="inline-block leading-none text-metal-300 hover:text-gray-300 transition font-bold">
				<span>
					TARIFAS
				</span>
			</a>
			<a href="#" className="inline-block leading-none text-metal-300 hover:text-gray-300 transition font-bold">
				<span>
					CONTACTO
				</span>
			</a>
		</nav>
	);
}
