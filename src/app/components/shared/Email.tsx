import Image from 'next/image';
export default function Email() {

	return (
		<div className="flex items-center gap-1 text-white text-[8px]/[12px]">
			<Image
				src="/icons/alt.svg"
				alt="Instagram"
				width={30}
				height={30}
				className="md:w-[30px] 2xl:w-[40px]"
			/>
			<div className='flex flex-col tracking-widest text-[12px]/[13px] md:text-xs 2xl:text-lg/[20px]'>
				<span className="font-bold">aceropilatesstudio</span>
				<span className="font-light  tracking-[.82em]">gmail.com</span>
			</div>
		</div>
	);
}
