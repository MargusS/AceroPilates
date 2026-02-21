import PriceRow from './price-section/PriceRow';
import MainAcero from './shared/MainAcero';
import SectionTitle from './shared/SectionTitle';
export default function PricesSection() {

	return (
		<section id="prices" className="relative z-20 h-[115vh] w-full px-4 grid grid-rows-[20vh_65vh_15vh]">
			<div className='row-start-2 place-self-start flex flex-col gap-5 md:gap-7 align-center justify-center text-[13px]/[14px] xl:text-[16px]/[16px] md:text-sm font-light w-full xl:pt-10'>
				<SectionTitle title="TARIFAS" />
				<div className='flex flex-col text-white w-45 md:w-55 xl:w-90 mx-auto gap-3'>
					<div className='flex flex-col items-start w-full'>
						<h5 className="font-normal text-xl md:text-2 xl:text-4xl">MENSUALIDAD</h5>
						<p className="font-light text-[9px]/[5px] md:text-[10px]/[12px] xl:text-[15px]/[16px] tracking-[.52em] md:tracking-[.6em] xl:tracking-[.7em]" >SESIONES SEMANALES</p>
					</div>
					<div className='flex flex-col gap-1 w-full'>
						<PriceRow sessions="1" price="65" />
						<PriceRow sessions="2" price="120" />
						<PriceRow sessions="3" price="160" />
					</div>
				</div>
				<div className='flex flex-col items-start text-white w-45 md:w-55 xl:w-90 mx-auto gap-1'>
					<h5 className="font-normal text-xl md:text-2 xl:text-4xl">BONOS</h5>
					<div className='flex flex-col gap-1 w-full'>
						<PriceRow sessions="6" price="115" />
					</div>
				</div>
				<div className='flex flex-col items-start text-white w-45 md:w-55 xl:w-90 mx-auto gap-1'>
					<h5 className="font-normal text-xl md:text-2 xl:text-4xl">PRIVADAS</h5>
					<div className='flex flex-col gap-1 w-full'>
						<PriceRow sessions="1" price="60" />
						<PriceRow sessions="6" price="300" />
					</div>
				</div>
				<div className='flex flex-col items-start text-white w-45 md:w-55 xl:w-90 mx-auto mt-5'>
					<div className='flex flex-col gap-1 w-full'>
						<div className='flex justify-between items-center'>
							<p className='flex items-center gap-1 text-[11px]/[12px]'>CLASE DE PRUEBA</p>
							<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[13px]/[14px] xl:text-[16px]/[16px] bg-white pt-1 pb-0 lg:pt-0 pr-1">10€</span>
						</div>
						<div className='flex justify-between items-center'>
							<p className='flex items-center gap-1 text-[11px]/[12px]'>CLASE SUELTA</p>
							<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[13px]/[14px] xl:text-[16px]/[16px] bg-white pt-1 pb-0 lg:pt-0 pr-1">20€</span>
						</div>
					</div>
				</div>
				<div className='flex flex-col text-center mt-5 xl:mt-10 text-metal-200 w-50 xl:w-80 mx-auto'>
					<span className='font-bold text-3xl/[5px] md:text-4xl/[6px]' >*</span>
					<span className='font-normal text-[6px]/[7px] xl:text-[9px]/[10px]'>MENSUALIDADES Y BONOS CANJEABLES EN PERIODO DE UN MES DESDE LA FECHA DE COMPRA</span>
				</div>
			</div>
		</section>
	);
}
