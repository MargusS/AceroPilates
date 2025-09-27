export default function SectionTitle({ title, className }: { title: string, className?: string }) {
	return (
		<h3 className={`${className} text-center text-metal-400 font-semibold text-lg bg-white w-[30vw] md:w-[15vw] 2xl:w-[10vw] mx-auto pt-1 pb-0 lg:pt-0`} >{title}</h3>
	);
}