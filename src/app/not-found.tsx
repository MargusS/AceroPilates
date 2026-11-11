import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
	title: "Página no encontrada | Acero Pilates Studio",
};

export default function NotFound() {
	return (
		<html lang="es">
			<body className="min-h-svh bg-metal-600 text-white">
				<main className="flex min-h-svh flex-col items-center justify-center gap-6 px-4 text-center">
					<p className="text-xs tracking-[.6em] text-metal-200">ERROR 404</p>
					<h1 className="text-2xl md:text-4xl font-light tracking-widest">PÁGINA NO ENCONTRADA</h1>
					<Link
						href="/"
						className="bg-white px-4 pt-1 pb-0.5 text-sm font-semibold tracking-widest text-metal-400"
					>
						VOLVER AL INICIO
					</Link>
				</main>
			</body>
		</html>
	);
}
