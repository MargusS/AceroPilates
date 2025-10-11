import TextType from '@/app/animation/TextType';
import Image from 'next/image';
export default function Email({ className }: { className?: string }) {

	return (
		<div className={`${className} flex items-center gap-1 text-white text-[8px]/[12px] h-[25px]`}>
			<Image
				src="/icons/alt.svg"
				alt="Instagram"
				width={20}
				height={20}
				className="md:w-[25px] 2xl:w-[30px]"
			/>
			<div className='flex flex-col tracking-widest text-[12px]/[13px] md:text-xs/[14px] 2xl:text-base/[18px] w-[100px]  2xl:w-[140px]'>
				<TextType
					text={["aceropilatesstudio gmail.com", "aceropilatesstudio gmail.com"]}
					typingSpeed={75}
					pauseDuration={1500}
					cursorCharacter="|"
					cursorBlinkDuration={500}
					className="font-normal tracking-[1em]"
					showCursor={false}
				/>
				

			</div>
			{/* <div className='flex flex-col tracking-widest text-[12px]/[13px] md:text-xs/[14px] 2xl:text-base/[18px]'>
				<span className="font-bold">aceropilatesstudio</span>
				<span className="font-light  tracking-[.82em]">gmail.com</span>
			</div> */}
		</div>
	);
}
