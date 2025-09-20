
export default function Address() {

	return (
		<div className="text-white text-[8px]/[12px] 2xl:text-xs" >
			<span className="font-medium text-[8px]/[16px] 2xl:text-xs tracking-[.25em]">602 - 721 - 291</span>

			<div className='flex gap-5'>
				<span className="font-light tracking-widest">
					CALLE CAMINO VIEJO
				</span>
				<span className="tracking-[1em]">MADRID</span>
			</div>
			<div className='flex gap-1 tracking-[0.5em]'>
				<span className="font-light">LEGANES</span>
				<span className="font-medium">23</span>
				<span className="font-light">BIS</span>
				<span className="font-medium tracking-widest">METRO URGEL</span>
			</div>
		</div>

	);
}
