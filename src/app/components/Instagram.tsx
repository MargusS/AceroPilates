import Image from 'next/image';
import Link from 'next/link';
export default function Instagram() {

	return (
		<div className="flex items-center">
			<Link href="https://instagram.com/aceropilates/" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center rotate-90">
				<Image
					src="/icons/instagram.svg"
					alt="Instagram"
					width={30}
					height={30}
				/>
				<span className="font-semibold text-white text-[14px] 2xl:text-2xl tracking-[.6em]">aceropilates</span>
			</Link>
		</div>
	);
}
