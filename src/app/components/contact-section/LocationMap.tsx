"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

const MapView = dynamic(() => import("./MapView"), {
	ssr: false,
	loading: () => <MapPlaceholder />,
})

function MapPlaceholder() {
	return <div className="h-full w-full bg-[#efefef]" aria-hidden="true" />
}

export default function LocationMap() {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [shouldLoadMap, setShouldLoadMap] = useState(false)

	useEffect(() => {
		const node = containerRef.current
		if (!node || shouldLoadMap) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setShouldLoadMap(true)
					observer.disconnect()
				}
			},
			{
				rootMargin: "300px 0px",
				threshold: 0.01,
			}
		)

		observer.observe(node)

		return () => observer.disconnect()
	}, [shouldLoadMap])

	return (
		<div ref={containerRef} className="map-container h-full w-full">
			{shouldLoadMap ? <MapView /> : <MapPlaceholder />}
		</div>
	)
}
