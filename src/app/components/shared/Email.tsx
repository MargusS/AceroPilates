import Image from 'next/image';
export default function Email() {

	return (
		<div className="flex items-center gap-1 text-white text-[8px]/[12px]">
			<Image
				src="/icons/alt.svg"
				alt="Instagram"
				width={20}
				height={20}
				className="md:w-[25px] 2xl:w-[30px]"
			/>
			<div className='flex flex-col tracking-widest text-[12px]/[13px] md:text-xs/[14px] 2xl:text-base/[18px]'>
				<span className="font-bold">aceropilatesstudio</span>
				<span className="font-light  tracking-[.82em]">gmail.com</span>
			</div>
		</div>
	);
}
