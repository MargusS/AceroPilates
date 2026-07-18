import Image from 'next/image';
import Address from './shared/Address';
import Email from './shared/Email';
import MainAcero from './shared/MainAcero';
export default function HomeSection() {

	return (
		<div className="relative z-20 min-h-[100svh] w-full px-4 grid grid-rows-[auto_1fr] md:grid-rows-[34svh_1fr]">
			<div className="mt-5 md:mt-0 md:row-span-3 place-self-center w-full">
				<div className="relative flex min-h-[34svh] flex-col items-center justify-start md:hidden">
					<div className="relative w-full max-w-[540px]">
						<Image
							src="/logos/dotted-white.png"
							alt="Pilates Studio Dot Matrix"
							width={1920}
							height={822}
							priority
							className="hero-logo-mobile-main relative z-20 w-full"
						/>

						<Image
							src="/logos/dotted-metal.png"
							alt="Acero Pilates Studio"
							width={1920}
							height={822}
							className="hero-logo-mobile-echo absolute inset-x-0 top-[72%] z-10 mx-auto w-full max-w-[500px]"
						/>
					</div>
				</div>

				<div className="relative hidden w-full items-start justify-center md:flex">
					<div className="relative flex w-full max-w-[1200px] flex-col items-center justify-center md:min-h-[30svh]">
						<div className="relative w-full max-w-[760px] xl:max-w-[660px]">
							<Image
								src="/logos/dotted-metal.png"
								alt="Acero Pilates Studio"
								width={1920}
								height={822}
								priority
								className="hero-logo-main relative z-10 w-full"
							/>

							<Image
								src="/logos/dotted-white.png"
								alt="Pilates Studio Dot Matrix"
								width={1920}
								height={822}
								className="hero-logo-ghost absolute inset-0 z-20 w-full"
							/>
						</div>

						<div className="pointer-events-none absolute inset-x-0 top-[58%] z-10 flex justify-center">
							<div className="h-px w-[42vw] max-w-[520px] bg-white/18 blur-[0.5px]" />
						</div>
					</div>
				</div>
			</div>

			<div className="grid h-full grid-rows-6 md:grid-rows-8 2xl:grid-rows-6 grid-cols-3 justify-items-center w-full">
				<div className="row-start-3 2xl:row-start-3 col-span-3 self-end lg:self-start place-self-start pl-5 md:pl-15">
					<Address />
				</div>
				<div className="row-start-4 2xl:row-start-4 col-span-2 self-end place-self-start pl-5 md:pl-15">
					<Email />
				</div>
				<div className='row-start-5 md:row-start-7 2xl:row-start-5 col-span-3 self-end md:self-start 2xl:self-end flex justify-center items-center text-center gap-4 md:gap-12 text-white text-[8px]/[12px] 2xl:text-sm tracking-widest font-light'>
					<span>PILATES</span>
					<span>SUELO</span>
					<div className='flex flex-col'>
						<span>ENTRENAMIENTO</span>
						<span>PERSONAL</span>
					</div>
					<span>PILATES</span>
					<span>EMBARAZO</span>
				</div>
				<MainAcero imageLayout="row-start-6 md:row-start-8 2xl:row-start-6 self-end translate-y-1 md:translate-y-3" />
			</div>

		</div>
	);
}
