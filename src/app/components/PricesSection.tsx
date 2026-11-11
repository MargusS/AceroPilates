import PriceGroup from './price-section/PriceGroup';
import PriceRow from './price-section/PriceRow';
import SectionTitle from './shared/SectionTitle';
export default function PricesSection() {

	return (
		<section id="prices" className="relative z-20 h-[115vh] w-full px-4 grid grid-rows-[20vh_65vh_15vh]">
			<div className='row-start-2 place-self-start flex flex-col gap-5 md:gap-7 align-center justify-center font-light w-full xl:pt-6'>
				<SectionTitle title="TARIFAS" />
				<div className='flex flex-col gap-5 md:gap-6 xl:gap-5 text-white w-45 md:w-55 xl:w-90 mx-auto'>
					<PriceGroup title="MENSUALIDAD" subtitle="SESIONES SEMANALES">
						<PriceRow sessions="1" price="65" />
						<PriceRow sessions="2" price="120" />
						<PriceRow sessions="3" price="160" />
					</PriceGroup>
					<PriceGroup title="BONOS">
						<PriceRow sessions="6" price="120" />
					</PriceGroup>
					<PriceGroup title="PRIVADAS">
						<PriceRow sessions="1" price="60" />
						<PriceRow sessions="6" price="300" />
					</PriceGroup>
					<PriceGroup title="SEMI-PRIVADAS" subtitle="2 PERSONAS">
						<PriceRow sessions="1" price="70" note="35€ / PERSONA" />
					</PriceGroup>
					<PriceRow label="CLASE SUELTA" price="20" />
				</div>
				<div className='flex flex-col text-center mt-5 xl:mt-2 text-metal-200 w-50 xl:w-80 mx-auto'>
					<span className='font-bold text-3xl/[5px] md:text-4xl/[6px]' >*</span>
					<span className='font-normal text-[6px]/[7px] xl:text-[9px]/[10px]'>MENSUALIDADES Y BONOS CANJEABLES EN PERIODO DE UN MES DESDE LA FECHA DE COMPRA</span>
				</div>
			</div>
		</section>
	);
}
