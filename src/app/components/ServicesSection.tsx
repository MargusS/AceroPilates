export default function ServicesSection() {

	const items = ["INICIAL", "INTERMEDIO", "AVANZADO"];

	return (

		<div className="relative h-full w-full grid grid-flow-col grid-rows-3">
			<div className="relative h-full w-full grid grid-flow-col grid-rows-3">
				<div className="row-start-3 place-self-center lg:place-self-end relative no-scrollbar flex overflow-x-hidden w-full items-center">
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
			<div className="relative h-full w-full grid grid-flow-col grid-rows-3">
				<h3 className="place-self-center text-center text-metal-400 font-semibold text-lg bg-white w-[30vw] md:w-[15vw] 2xl:w-[10vw] mx-auto pt-1 py-0 lg:pt-0" >SERVICIOS</h3>
				<div className="place-self-start w-full flex flex-col gap-3 text-center font-normal text-white text-[11px]/[12px] md:text-[11px]/[14px] 2xl:text-[13px]/[16px] tracking-widest place-self-center">
					<div className="flex flex-col gap-3">
						<div className="grid grid-rows-2 grid-cols-3">
							<p className="col-span-3">PILATES MÁQUINA</p>
							<div className="col-start-2 col-span-2 h-[1px] mt-1 bg-white"></div>
						</div>
						<div className="grid grid-rows-2 grid-cols-3">
							<p className="col-span-3">PILATES EMBARAZO</p>
							<div className="col-span-2 h-[1px] mt-1 bg-white"></div>
						</div>
					</div>
				</div>
				<div className="place-self-start w-full flex flex-col gap-3 text-center font-normal text-white text-[11px]/[12px] md:text-[11px]/[14px] 2xl:text-[13px]/[16px] tracking-widest place-self-center">

					<div className="flex flex-col gap-3">
						<div className="grid grid-rows-2 grid-cols-3">
							<p className="col-start-2 place-self-center items-center">ENTRENAMIENTO PARA BAILARINES</p>
							<div className="row-start-2 col-start-2 col-span-2 h-[1px] mt-1 bg-white"></div>
						</div>
						<div className="grid grid-rows-2 grid-cols-3">
							<p className="col-span-3">CLASES PRIVADAS</p>
							<div className="col-span-2 h-[1px] mt-1 bg-white"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="pt-20 pl-10 lg:pl-50">
				<p className="font-bold text-white text-[11px]/[12px] md:text-[13px]/[14px] 2xl:text-[16px]/[16px] tracking-widest">CLASES DE <span className="font-light text-2xl md:text-4xl">50</span> MIN</p>
				<p className="font-light text-white text-[8px]/[5px] md:text-[10px]/[6px] 2xl:text-[12px]/[7px] tracking-[.65em]">MAÑANA Y TARDE</p>
			</div>
		</div>
	);
}
