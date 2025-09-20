import Address from './shared/Address';
import MainAcero from './shared/MainAcero';
export default function SpaceSection() {

	return (
		<div className="relative z-20 h-full w-full px-4">
			{/* <MainAcero imageLayout="rotate-x-180 self-start" />
			<MainAcero imageLayout="opacity-50 self-end" /> */}
			<MainAcero imageLayout="rotate-x-180 opacity-50 self-start" />
			<MainAcero imageLayout=" self-end" />
			<div className='my-12 md:my-15 flex flex-col gap-10 md:gap-14 2xl:gap-20 align-center justify-center text-[12px]/[12px] md:text-sm font-light w-full'>
				<h3 className="text-center text-metal-400 font-semibold text-xl bg-white w-[30vw] md:w-[15vw] 2xl:w-[10vw] mx-auto" >ESPACIO</h3>
				<div className='flex flex-col items-center text-white font-light text-[9px]/[11px] md:text-[10px]/[12px] 2xl:text-[13px]/[14px] tracking-widest'>
					<h5 className="font-bold tracking-[.8em] text-[12px]/[13px] md:text-xs">PILATES MÁQUINA</h5>
					<p>TÉCNICA</p>
					<p>PRECISIÓN</p>
					<p>ATENCIÓN PERSONALIZADA</p>
				</div>
				<div className='flex flex-col items-center gap-1 2xl:gap-2 text-center font-normal text-metal-500 tracking-widest text-[10px]/[11px] md:text-[11px]/[12px] 2xl:text-[13px]/[16px]'>
					<p className='bg-white w-[70vw] md:w-[45vw] 2xl:w-[30vw]'>ENTORNO MINIMALISTA</p>
					<p className='bg-white w-[70vw] md:w-[45vw] 2xl:w-[30vw]'>REFORMER</p>
					<p className='bg-white w-[70vw] md:w-[45vw] 2xl:w-[30vw]'>TORRE | CADILLAC</p>
				</div>
			</div>
			<div className='absolute bottom-35 2xl:bottom-40 left-10 md:left-15 2xl:left-30'>
				<Address />
			</div>
			<div className='absolute bottom-5 2xl:bottom-15 left-1/2 transform -translate-x-1/2 w-full flex gap-2 tracking-widest text-white font-light text-[7px] md:text-xs justify-center items-center text-center items-center overflow-hidden'>
				<span className='font-bold pb-[2px] md:pb-0'>PRIMER</span>
				<span className=''>ESTUDIO</span>
				<span className=''>DE</span>
				<span className=''>PILATES</span>
				<span className=''>MÁQUINA</span>
				<span className=''>EN</span>
				<span className='font-bold tracking-[.7em] pb-[2px] md:pb-0'>CARABANCHEL</span>
			</div>
		</div>
	);
}
