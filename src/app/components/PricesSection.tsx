import Address from './shared/Address';
import MainAcero from './shared/MainAcero';
export default function PricesSection() {

	return (
		<div className="relative z-20 h-full w-full px-4 grid grid-rows-[20vh_65vh_15vh]">
			<div className='row-start-1'>
				{/* <MainAcero imageLayout="rotate-x-180 self-start" />
				<MainAcero imageLayout="opacity-50 self-end" /> */}
				<MainAcero imageLayout="rotate-x-180 opacity-50 self-start" />
				<MainAcero imageLayout=" self-end" />
			</div>
			<div className='row-start-2 place-self-start flex flex-col gap-5 md:gap-7 align-center justify-center text-[12px]/[12px] xl:text-[16px]/[16px] md:text-sm font-light w-full xl:pt-10'>
				<h3 className="text-center text-metal-400 font-semibold text-lg bg-white w-[30vw] md:w-[15vw] 2xl:w-[10vw] mx-auto pt-1 py-0 lg:pt-0" >TARIFAS</h3>
				<div className='flex flex-col text-white w-35 md:w-55 xl:w-90 mx-auto gap-3'>
					<div className='flex flex-col items-center md:items-start w-full'>
						<h5 className="font-normal text-xl md:text-2 xl:text-4xl">MENSUALIDAD</h5>
						<p className="font-light text-[9px]/[5px] md:text-[10px]/[12px] xl:text-[15px]/[16px] tracking-[.28em] md:tracking-[.6em] xl:tracking-[.7em]" >SESIONES SEMANALES</p>
					</div>
					<div className='flex flex-col gap-1 w-full'>
						<div className='flex justify-between items-center'>
							<p className='flex items-center gap-1 text-[12px]/[12px] xl:text-[16px]/[16px]'><span className='font-bold min-w-4'>1</span> SESIÓN</p>
							<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[12px]/[12px] xl:text-[16px]/[16px] bg-white pt-[.5px] pb-0 lg:pt-0">65€</span>
						</div>
						<div className='flex justify-between items-center'>
							<p className='flex items-center gap-1 text-[12px]/[12px] xl:text-[16px]/[16px]'><span className='font-bold min-w-4'>2</span> SESIONES</p>
							<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[12px]/[12px] xl:text-[16px]/[16px] bg-white pt-[.5px] pb-0 lg:pt-0">120€</span>
						</div>
						<div className='flex justify-between items-center'>
							<p className='flex items-center gap-1 text-[12px]/[12px] xl:text-[16px]/[16px]'><span className='font-bold min-w-4'>3</span> SESIONES</p>
							<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[12px]/[12px] xl:text-[16px]/[16px] bg-white pt-[.5px] pb-0 lg:pt-0">160€</span>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-start text-white w-35 md:w-55 xl:w-90 mx-auto gap-1'>
					<h5 className="font-normal text-xl md:text-2 xl:text-4xl">BONOS</h5>
					<div className='flex flex-col gap-1 w-full'>
						<div className='flex justify-between items-center'>
							<p className='flex items-center gap-1 text-[12px]/[12px] xl:text-[16px]/[16px]'><span className='font-bold min-w-4'>5</span> SESIÓN</p>
							<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[12px]/[12px] xl:text-[16px]/[16px] bg-white pt-[.5px] pb-0 lg:pt-0">95€</span>
						</div>
						<div className='flex justify-between items-center'>
							<p className='flex items-center gap-1 text-[12px]/[12px] xl:text-[16px]/[16px]'><span className='font-bold min-w-4'>10</span> SESIONES</p>
							<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[12px]/[12px] xl:text-[16px]/[16px] bg-white pt-[.5px] pb-0 lg:pt-0">180€</span>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-start text-white w-35 md:w-55 xl:w-90 mx-auto gap-1'>
					<h5 className="font-normal text-xl md:text-2 xl:text-4xl">PRIVADAS</h5>
					<div className='flex flex-col gap-1 w-full'>
						<div className='flex justify-between items-center'>
							<p className='flex items-center gap-1 text-[12px]/[12px] xl:text-[16px]/[16px]'><span className='font-bold min-w-4'>1</span> SESIÓN</p>
							<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[12px]/[12px] xl:text-[16px]/[16px] bg-white pt-[.5px] pb-0 lg:pt-0">40€</span>
						</div>
						<div className='flex justify-between items-center'>
							<p className='flex items-center gap-1 text-[12px]/[12px] xl:text-[16px]/[16px]'><span className='font-bold min-w-4'>5</span> SESIONES</p>
							<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[12px]/[12px] xl:text-[16px]/[16px] bg-white pt-[.5px] pb-0 lg:pt-0">210€</span>
						</div>
						<div className='flex justify-between items-center'>
							<p className='flex items-center gap-1 text-[12px]/[12px] xl:text-[16px]/[16px]'><span className='font-bold min-w-4'>10</span> SESIONES</p>
							<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[12px]/[12px] xl:text-[16px]/[16px] bg-white pt-[.5px] pb-0 lg:pt-0">390€</span>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-start text-white w-35 md:w-55 xl:w-90 mx-auto mt-5'>
					<div className='flex flex-col gap-1 w-full'>
						<div className='flex justify-between items-center'>
							<p className='flex items-center gap-1 text-[11px]/[12px]'>CLASE DE PRUEBA</p>
							<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[12px]/[12px] xl:text-[16px]/[16px] bg-white pt-[.5px] pb-0 lg:pt-0">10€</span>
						</div>
						<div className='flex justify-between items-center'>
							<p className='flex items-center gap-1 text-[11px]/[12px]'>CLASE SUELTA</p>
							<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[12px]/[12px] xl:text-[16px]/[16px] bg-white pt-[.5px] pb-0 lg:pt-0">20€</span>
						</div>
					</div>
				</div>
				<div className='flex flex-col text-center mt-5 xl:mt-10 text-metal-500 w-50 xl:w-80 mx-auto'>
					<span className='font-bold text-3xl/[5px] md:text-4xl/[6px]' >*</span>
					<span className='font-normal text-[6px]/[7px] xl:text-[9px]/[10px]'>MENSUALIDADES Y BONOS CANJEABLES EN PERIODO DE UN MES DESDE LA FECHA DE COMPRA</span>
				</div>
			</div>
		</div>
	);
}
