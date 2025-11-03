'use client';

import Silk from '@/components/Silk';
export default function FullScreenSilk({
	id,
	parentPosition = "relative",
	bgOverlay,
	speed = 3,
	scale = 1,
	color = "#6e7177",
	noiseIntensity = 2,
	rotation = 2,
	children
}: {
	id?: string;
	parentPosition?: string;
	bgOverlay?: string;
	speed?: number;
	scale?: number;
	color?: string;
	noiseIntensity?: number;
	rotation?: number;
	children: React.ReactNode;
}) {

	return (
		<section id={id} className={`${parentPosition} w-full h-screen overflow-hidden`}>
			<div className={`absolute inset-0 ${bgOverlay} z-10`} />
			<div className='absolute inset-0 z-0'>
				<Silk
					speed={speed}
					scale={scale}
					color={color}
					noiseIntensity={noiseIntensity}
					rotation={rotation}
				/>
			</div>
			{children}
		</section >
	);
}


