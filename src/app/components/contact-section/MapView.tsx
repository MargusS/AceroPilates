"use client"

import "maplibre-gl/dist/maplibre-gl.css"
import { setWorkerUrl } from "maplibre-gl"
import { useState } from "react"
import Map, { AttributionControl, Marker, NavigationControl, Popup } from "react-map-gl/maplibre"

// OpenFreeMap: free vector tiles, no API key, commercial use allowed.
const MAP_STYLE = "https://tiles.openfreemap.org/styles/positron"

// MapLibre 6 loads its worker from a separate file the bundler does not pick up on its own.
setWorkerUrl(new URL("maplibre-gl/dist/maplibre-gl-worker.mjs", import.meta.url).href)

const POSITION = { latitude: 40.391887, longitude: -3.7240774 }

export default function MapView() {
	const [showPopup, setShowPopup] = useState(false)

	return (
		<Map
			initialViewState={{ ...POSITION, zoom: 16 }}
			mapStyle={MAP_STYLE}
			style={{ width: "100%", height: "100%" }}
			scrollZoom={false}
			dragRotate={false}
			pitchWithRotate={false}
			touchPitch={false}
			attributionControl={false}
		>
			<NavigationControl position="top-right" showCompass={false} />
			<AttributionControl position="bottom-right" compact={false} />
			<Marker
				{...POSITION}
				anchor="bottom"
				onClick={(e) => {
					e.originalEvent.stopPropagation()
					setShowPopup(true)
				}}
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src="/icons/marker.png" alt="Acero Pilates Studio" width={20} height={16} className="cursor-pointer" />
			</Marker>
			{showPopup && (
				<Popup {...POSITION} anchor="bottom" offset={18} closeButton={false} onClose={() => setShowPopup(false)}>
					Leganés 23 BIS Metro Urgel
				</Popup>
			)}
		</Map>
	)
}
