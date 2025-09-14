import Image from 'next/image';
import Link from 'next/link';
export default function Instagram() {

	return (
		<div className=" absolute right-[-65px] md:right-0 bottom-[270px] md:bottom-[300px] flex items-center">
			<Link href="https://instagram.com/aceropilates/" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center rotate-90">
				<Image
					src="/icons/instagram.svg"
					alt="Instagram"
					width={30}
					height={30}
				/>
				<span className="font-semibold text-white text-[14px] tracking-[.6em]">aceropilates</span>
			</Link>
		</div>
	);
}
