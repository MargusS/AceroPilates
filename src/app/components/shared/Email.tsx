import TextType from '@/app/animation/TextType';
import Image from 'next/image';

const EMAIL = 'aceropilatestudio@gmail.com';

export default function Email({ className }: { className?: string }) {

	return (
		<a
			href={`mailto:${EMAIL}`}
			className={`${className ?? ''} flex items-center gap-1 text-white text-[8px]/[12px] h-[25px]`}
		>
			{/* Real address in the server HTML, so search engines and screen readers get it. */}
			<span className="sr-only">{EMAIL}</span>
			<Image
				src="/icons/alt.svg"
				alt=""
				aria-hidden="true"
				width={20}
				height={20}
				className="md:w-[25px] 2xl:w-[30px]"
			/>
			{/* Typing animation is purely visual (it starts empty and has no "@"). */}
			<div aria-hidden="true" className='flex flex-col tracking-widest text-[12px]/[13px] md:text-xs/[14px] 2xl:text-base/[18px] w-[100px]  2xl:w-[140px]'>
				<TextType
					text={["aceropilatestudio gmail.com", "aceropilatestudio gmail.com"]}
					typingSpeed={75}
					pauseDuration={1500}
					cursorCharacter="|"
					cursorBlinkDuration={500}
					className="font-normal tracking-[1em]"
					showCursor={false}
				/>
			</div>
		</a>
	);
}
