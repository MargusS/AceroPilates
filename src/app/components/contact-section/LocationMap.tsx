"use client"

import "leaflet/dist/leaflet.css"
import dynamic from "next/dynamic"
import L from "leaflet"
import { useEffect, useState } from "react"

const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false })

// Importa Marker y Popup también con SSR deshabilitado
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false })



export default function MapComponent() {
	const [customIcon, setCustomIcon] = useState<import("leaflet").Icon | null>(null)
	const position: [number, number] = [40.3215498, -3.7551768]; // Coordenadas de Madrid, España

	useEffect(() => {
		import("leaflet").then(L => {
			const customIcon = new L.Icon({
				iconUrl: "/icons/marker.png",  // Pon aquí la ruta relativa a tu imagen (en /public)
				iconSize: [20, 16], // tamaño del icono en píxeles
				iconAnchor: [0, 0], // punto del icono que corresponde a la posición del mapa (pico inferior central)
				popupAnchor: [0, -32], // posición del popup relativo al icono
			})
			setCustomIcon(customIcon)
		})
	}, [])

	if (!customIcon) return <div></div>

	return (
		<MapContainer center={position} zoom={17} className="map-container" style={{ height: "100%", width: "100%" }}>
			<TileLayer
				url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
				attribution="&copy; <a href='https://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions' target='_blank'>CARTO</a>"
				maxZoom={20}
			/>
			<Marker position={position} icon={customIcon}>
				<Popup>Leganés 23 BIS Metro Urgel</Popup>
			</Marker>
		</MapContainer>
	)
}
