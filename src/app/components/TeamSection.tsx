import Image from 'next/image';
import Email from './shared/Email';
export default function TeamSection() {

	return (
		<div className="relative h-full w-full px-4 overflow-hidden z-30">
			<div className='flex justify-center my-2'>
				<Image
					src="/logos/dotted-white.png"
					alt="Pilates Studio Dot Matrix"
					width={1280}
					height={480}
					className="w-[70vw] max-w-lg md:w-[40vw] md:max-w-[600px]"
				/>
			</div>
			<div
				className="absolute right-1/10 top-60 flex flex-col items-end space-y-6 md:space-y-8 xl:space-y-10 gap-5"
			>
				<div className='text-white text-[12px]/[12px] md:text-[13px]/[13px] 2xl:text-[14px]/[14px] tracking-wide flex flex-col items-end gap-1 rotate-90 text-center translate-x-11 md:translate-x-12 xl:translate-x-13'>
					<p className='inline-block leading-none w-fit bg-metal-500 font-normal px-1 py-1 text-right'>DANIEL</p>
					<p className='inline-block leading-none bg-metal-500 font-light px-1 py-1 tracking-[.5em]'>FERNÁNDEZ</p>
				</div>

				<p className="text-white font-light text-[10px]/[12px] md:text-[13px]/[13px] 2xl:text-[14px]/[14px] tracking-wide" >BAILARÍN Y FUNDADOR</p>
			</div>
			<div className='absolute top-80 left-1/10'>
				<h3 className="text-center text-metal-400 font-semibold text-xl bg-white w-[30vw] md:w-[15vw] 2xl:w-[10vw] mx-auto" >EQUIPO</h3>
			</div>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10 w-full'>
				<h4 className='text-center text-white font-semibold text-sm  md:text-lg 2xl:text-xl tracking-[.45em] mx-auto'>TÉCNICA Y SENSIBILIDAD</h4>
				<p className='text-center text-white text-[10px]/[11px] md:text-[12px]/[13px] 2xl:text-[14px]/[15px] font-light tracking-widest w-[50vw] md:w-[20vw] 2xl:w-[18vw] mx-auto'>FUSIONA <span className='font-bold text-sm md:text-lg 2xl:text-xl'>19</span> AÑOS DE EXPERIENCIA EN MOVIMIENTO CON UNA PASIÓN POR LA DANZA Y EL <span className='font-bold'>PILATES</span></p>
			</div>
			<div className='absolute bottom-30 left-1/15'>
				<Email />
			</div>
		</div>
	);
}
