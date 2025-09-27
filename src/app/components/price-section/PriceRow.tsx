export default function PriceRow({ sessions, price }: { sessions: string; price: string }) {
	return (
		<div className='flex justify-between items-center'>
			<p className='flex items-center gap-1 text-[13px]/[14px] xl:text-[16px]/[16px]'><span className='font-bold min-w-4'>{sessions}</span> SESIÓN{sessions !== '1' ? 'ES' : ''}</p>
			<span className="w-10 xl:w-25 text-end text-metal-400 font-semibold text-[13px]/[14px] xl:text-[16px]/[16px] bg-white pt-1 pb-0 lg:pt-0 pr-1">{price}€</span>
		</div>
	)
}