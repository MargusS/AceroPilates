type PriceRowProps = {
	price: string;
	sessions?: string;
	label?: string;
	note?: string;
};

export default function PriceRow({ sessions, label, price, note }: PriceRowProps) {
	const text = label ?? (sessions === '1' ? 'SESIÓN' : 'SESIONES');

	return (
		<div className='flex flex-col gap-1'>
			<div className='flex items-center justify-between gap-3 h-[18px] md:h-5 text-[13px] xl:text-base leading-none'>
				<p className='flex items-center [text-box:trim-both_cap_alphabetic]'>
					{sessions && <span className='font-bold tabular-nums w-4 xl:w-5'>{sessions}</span>}
					<span className='font-light'>{text}</span>
				</p>
				<span className='flex items-center justify-end h-full w-12 md:w-14 xl:w-24 shrink-0 px-1.5 xl:px-2 bg-white text-metal-400 font-semibold tabular-nums [text-box:trim-both_cap_alphabetic]'>
					{price}€
				</span>
			</div>
			{note && (
				<span className='self-end -mr-[.2em] text-[8px] md:text-[9px] xl:text-[11px] leading-none font-light tracking-[.2em] text-white/80'>
					{note}
				</span>
			)}
		</div>
	);
}
