import type { ReactNode } from 'react';

type PriceGroupProps = {
	title: string;
	subtitle?: string;
	children: ReactNode;
};

export default function PriceGroup({ title, subtitle, children }: PriceGroupProps) {
	return (
		<div className='flex flex-col gap-2 w-full'>
			<div className='flex flex-col gap-1 xl:gap-1.5'>
				<h3 className='font-normal text-xl md:text-2xl xl:text-4xl leading-none'>{title}</h3>
				{subtitle && (
					<p className='font-light text-[9px] md:text-[10px] xl:text-[15px] leading-none tracking-[.52em] md:tracking-[.6em] xl:tracking-[.7em]'>
						{subtitle}
					</p>
				)}
			</div>
			<div className='flex flex-col gap-1'>{children}</div>
		</div>
	);
}
