"use client"

import "leaflet/dist/leaflet.css"
import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

const MapContainer = dynamic(
	() => import("react-leaflet").then((mod) => mod.MapContainer),
	{ ssr: false }
)

const TileLayer = dynamic(
	() => import("react-leaflet").then((mod) => mod.TileLayer),
	{ ssr: false }
)

const Marker = dynamic(
	() => import("react-leaflet").then((mod) => mod.Marker),
	{ ssr: false }
)

const Popup = dynamic(
	() => import("react-leaflet").then((mod) => mod.Popup),
	{ ssr: false }
)

export default function MapComponent() {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [shouldLoadMap, setShouldLoadMap] = useState(false)
	const [customIcon, setCustomIcon] = useState<import("leaflet").Icon | null>(null)

	const position: [number, number] = [40.391887, -3.7240774]

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

	useEffect(() => {
		if (!shouldLoadMap) return

		let mounted = true

		import("leaflet").then((L) => {
			if (!mounted) return

			const icon = new L.Icon({
				iconUrl: "/icons/marker.png",
				iconSize: [20, 16],
				iconAnchor: [10, 16],
				popupAnchor: [0, -16],
			})

			setCustomIcon(icon)
		})

		return () => {
			mounted = false
		}
	}, [shouldLoadMap])

	return (
		<div ref={containerRef} className="h-full w-full">
			{shouldLoadMap && customIcon ? (
				<MapContainer
					center={position}
					zoom={17}
					className="map-container h-full w-full"
					style={{ height: "100%", width: "100%" }}
					preferCanvas
					scrollWheelZoom={false}
				>
					<TileLayer
						url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
						attribution="&copy; <a href='https://www.openstreetmap.org/copyright' target='_blank' rel='noopener noreferrer'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions' target='_blank' rel='noopener noreferrer'>CARTO</a>"
						maxZoom={20}
						updateWhenIdle
					/>
					<Marker position={position} icon={customIcon}>
						<Popup>Leganés 23 BIS Metro Urgel</Popup>
					</Marker>
				</MapContainer>
			) : (
				<div
					className="h-full w-full bg-[#d9d4ca]"
					aria-hidden="true"
				/>
			)}
		</div>
	)
}