export default function ServiceRow({ title }: { title: string }) {
	return (
		<div className="w-full flex flex-col gap-3 text-center font-normal text-white text-[11px]/[12px] md:text-[11px]/[14px] xl:text-xs tracking-widest place-self-center">
			<div className="flex flex-col gap-3 xl:gap-6">
				<div className="grid grid-rows-2 grid-cols-3">
					<p className="col-span-3">{title}</p>
					<div className="col-span-2 h-[1px] lg:h-[2px] mt-1 bg-white"></div>
				</div>
				<div className="grid grid-rows-2 grid-cols-3">
					<p className="col-span-3">{title}</p>
					<div className="col-span-2 h-[1px] lg:h-[2px] mt-1 bg-white"></div>
				</div>
			</div>
		</div>
	);
}