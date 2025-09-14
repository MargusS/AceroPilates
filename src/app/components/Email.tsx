import Image from 'next/image';
export default function Email() {

	return (
		<div className="flex items-center gap-1 ">
			<Image
				src="/icons/alt.svg"
				alt="Instagram"
				width={30}
				height={30}
			/>
			<div className='flex flex-col tracking-widest text-[12px]/[13px]'>
				<span className="font-bold">aceropilatesstudio</span>
				<span className="font-light  tracking-[.82em]">gmail.com</span>
			</div>
		</div>
	);
}
