import Image from 'next/image';
import Link from 'next/link';
export default function Instagram() {

	return (
		<div className="fixed bottom-1/4 right-[-4rem] md:right-[-3rem] z-50 ">
				<Link href="https://instagram.com/aceropilates/" target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center rotate-90">
					<Image
						src="/icons/instagram.svg"
						alt="Instagram"
						width={20}
						height={20}
						className="pt-[1px] pb-0 lg:w-[25px] lg:h-[25px]"
					/>
					<h4 className="font-semibold text-white text-[12px] 2xl:text-sm tracking-[.6em] ">aceropilates</h4>
				</Link>
		</div>
	);
}
