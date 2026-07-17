"use client";

import { useEffect, useRef, useState } from "react";
import MainAcero from "./shared/MainAcero";
import SectionTitle from "./shared/SectionTitle";

export default function ServicesSection() {
	const items = ["INICIAL", "INTERMEDIO", "AVANZADO"];
	const sectionRef = useRef<HTMLElement | null>(null);
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const node = sectionRef.current;
		if (!node) return;

		const updateProgress = () => {
			const rect = node.getBoundingClientRect();
			const viewportHeight = window.innerHeight;
			const start = viewportHeight * 0.35;
			const end = viewportHeight * 0.005;

			const raw = (start - rect.top) / (start - end);
			const clamped = Math.max(0, Math.min(1, raw));
			const eased = 1 - Math.pow(1 - clamped, 2.2);

			setScrollProgress(eased);
		};

		updateProgress();

		window.addEventListener("scroll", updateProgress, { passive: true });
		window.addEventListener("resize", updateProgress);

		return () => {
			window.removeEventListener("scroll", updateProgress);
			window.removeEventListener("resize", updateProgress);
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			id="services"
			className="relative h-full w-full grid grid-flow-col grid-rows-[20vh_10vh_55vh_15vh] z-20"
		>
			<div className="row-start-1">
				<MainAcero imageLayout="rotate-x-180 opacity-50 self-start" />
				<MainAcero imageLayout=" self-end" />
			</div>

			<div className="row-start-2 relative h-full w-full grid grid-flow-col">
				<div className="place-self-center lg:place-self-end relative no-scrollbar flex overflow-x-hidden w-full items-center">
					<div className="animate-marquee flex whitespace-nowrap md:justify-around md:w-full">
						{items.map((item, i) => (
							<span
								key={i}
								className="mx-8 text-2xl font-light lg:text-3xl text-white tracking-wide"
							>
								{item}
							</span>
						))}
					</div>
					<div className="absolute top-0 left-0 animate-marquee2 flex whitespace-nowrap md:justify-around md:w-full">
						{items.map((item, i) => (
							<span
								key={`dup-${i}`}
								className="mx-8 text-2xl font-light lg:text-3xl text-white tracking-wide"
							>
								{item}
							</span>
						))}
					</div>
				</div>
			</div>

			<div className="row-start-3 relative h-full w-full grid grid-flow-col grid-rows-[30%_70%]">
				<SectionTitle title="SERVICIOS" className="place-self-center" />

				<div className="place-self-start w-full flex flex-col gap-3 text-center font-normal text-white text-[11px]/[12px] md:text-[11px]/[14px] xl:text-xs tracking-widest place-self-center">
					<div className="flex flex-col gap-5 xl:gap-6">
						<div className="grid grid-rows-2 grid-cols-3">
							<p className="col-span-3">PILATES MÁQUINA</p>
							<div className="col-start-2 col-span-2 mt-1">
								<div
									className="service-line service-line-right"
									style={{
										transform: `scaleX(${scrollProgress})`,
										opacity: 0.35 + scrollProgress * 0.65,
									}}
								/>
							</div>
						</div>

						<div className="grid grid-rows-2 grid-cols-3">
							<p className="col-span-3">PILATES EMBARAZO</p>
							<div className="col-span-2 mt-1">
								<div
									className="service-line service-line-left"
									style={{
										transform: `scaleX(${scrollProgress})`,
										opacity: 0.35 + scrollProgress * 0.65,
									}}
								/>
							</div>
						</div>

						<div className="grid grid-rows-2 grid-cols-3">
							<p className="col-start-2 place-self-center items-center">
								ENTRENAMIENTO PARA BAILARINES
							</p>
							<div className="row-start-2 col-start-2 col-span-2 mt-1">
								<div
									className="service-line service-line-right"
									style={{
										transform: `scaleX(${scrollProgress})`,
										opacity: 0.35 + scrollProgress * 0.65,
									}}
								/>
							</div>
						</div>

						<div className="grid grid-rows-2 grid-cols-3">
							<p className="col-span-3">CLASES PRIVADAS</p>
							<div className="col-span-2 mt-1">
								<div
									className="service-line service-line-left"
									style={{
										transform: `scaleX(${scrollProgress})`,
										opacity: 0.35 + scrollProgress * 0.65,
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}