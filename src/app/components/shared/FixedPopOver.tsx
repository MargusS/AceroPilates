'use client';
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function FixedLiquidGlassPopover() {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setOpen(false);
			}
		}
		if (open) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [open]);

	return (
		<div
			ref={ref}
			className="fixed bottom-6 right-6 z-50 flex flex-row-reverse items-end"
		>
			<button
				className="
          px-4 py-2 rounded-full shadow-lg border border-white/20
          bg-white/20 backdrop-blur-lg
          text-metal-600 font-semibold text-sm
          hover:bg-white/40 transition-colors
        "
				onClick={() => setOpen((v) => !v)}
				aria-expanded={open}
				style={{
					boxShadow:
						"0 4px 30px rgba(0,0,0,0.1), 0 1.5px 8px rgba(0,0,0,0.07)",
				}}
			>
				Inscríbete
			</button>
			{open && (
				<div className="
          absolute right-full mr-2 mb-1 mt-2 w-34
          bg-white/60 rounded-xl border border-white/30
          backdrop-blur-lg shadow-lg p-2
          text-gray-900
        ">
					<p className="text-sm mb-2">
						¿Quieres unirte? Inscríbete en el formulario.
					</p>
					<Link
						href="https://docs.google.com/forms/d/e/1FAIpQLSc892PMMWPc1iKVYasikzPRlHtjVsid1wVgNqzJmjxnaS-tvg/viewform"
						className="underline text-metal-700 hover:text-metal-500 font-bold text-sm"
					>
						Ir al formulario
					</Link>
				</div>
			)}
		</div>
	);
}
