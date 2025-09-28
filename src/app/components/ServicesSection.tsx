import MainAcero from "./shared/MainAcero";
import SectionTitle from "./shared/SectionTitle";

export default function ServicesSection() {

	const items = ["INICIAL", "INTERMEDIO", "AVANZADO"];

	return (
		<section id="services" className="relative h-full w-full grid grid-flow-col grid-rows-[20vh_10vh_55vh_15vh] z-20">
			<div className='row-start-1'>
				{/* <MainAcero imageLayout="rotate-x-180 self-start" />
							<MainAcero imageLayout="opacity-50 self-end" /> */}
				<MainAcero imageLayout="rotate-x-180 opacity-50 self-start" />
				<MainAcero imageLayout=" self-end" />
			</div>
			<div className="row-start-2 relative h-full w-full grid grid-flow-col ">
				<div className="place-self-center lg:place-self-end relative no-scrollbar flex overflow-x-hidden w-full items-center">
					<div className="animate-marquee flex whitespace-nowrap md:justify-around md:w-full">
						{items.map((item, i) => (
							<span key={i} className="mx-8 text-2xl font-light lg:text-3xl text-white tracking-wide">{item}</span>
						))}
					</div>
					<div className="absolute top-0 left-0 animate-marquee2 flex whitespace-nowrap md:justify-around md:w-full">
						{items.map((item, i) => (
							<span key={`dup-${i}`} className="mx-8 text-2xl font-light lg:text-3xl text-white tracking-wide">{item}</span>
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
							<div className="col-start-2 col-span-2 h-[1px] lg:h-[2px] mt-1 bg-white"></div>
						</div>
						<div className="grid grid-rows-2 grid-cols-3">
							<p className="col-span-3">PILATES EMBARAZO</p>
							<div className="col-span-2 h-[1px] lg:h-[2px] mt-1 bg-white"></div>
						</div>
						<div className="grid grid-rows-2 grid-cols-3">
							<p className="col-start-2 place-self-center items-center">ENTRENAMIENTO PARA BAILARINES</p>
							<div className="row-start-2 col-start-2 col-span-2 h-[1px] lg:h-[2px] mt-1 bg-white"></div>
						</div>
						<div className="grid grid-rows-2 grid-cols-3">
							<p className="col-span-3">CLASES PRIVADAS</p>
							<div className="col-span-2 h-[1px] lg:h-[2px] mt-1 bg-white"></div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="pt-20 pl-10 lg:pl-50">
				<p className="font-bold text-white text-[11px]/[12px] md:text-[13px]/[14px] 2xl:text-[16px]/[16px] tracking-widest">CLASES DE <span className="font-light text-2xl md:text-4xl">50</span> MIN</p>
				<p className="font-light text-white text-[8px]/[5px] md:text-[10px]/[6px] 2xl:text-[12px]/[7px] tracking-[.65em]">MAÑANA Y TARDE</p>
			</div> */}
		</section>
	);
}
