import Image from 'next/image';
import Link from 'next/link';
export default function Instagram() {

	return (
		<div className="fixed bottom-1/4 right-[-4rem] md:right-[-3rem] z-50 ">
				<Link href="https://instagram.com/aceropilates/" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center rotate-90">
					<Image
						src="/icons/instagram.svg"
						alt="Instagram"
						width={30}
						height={30}
					/>
					<h4 className="font-semibold text-white text-[14px] 2xl:text-lg tracking-[.6em] ">aceropilates</h4>
				</Link>
		</div>
	);
}
