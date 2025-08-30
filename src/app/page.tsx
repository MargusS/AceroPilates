
export default function Home() {
	return (
		<main className="p-8 space-y-6">
			<h1 className="text-3xl font-bold">Nimbus Sans Heading</h1>
			<p>
				This paragraph uses <span className="font-sans">Nimbus Sans</span> as the default body font.
			</p>

			<div>
				<h2 className="font-dotmatrix font-bold text-2xl mb-2">DotMatrix Title</h2>
				<p className="font-dotmatrix text-lg">
					This line is rendered in the DotMatrix custom font for a digital or retro look.
				</p>
			</div>

			<div>
				<h2 className="font-tiny font-bold text-2xl mb-2">Tiny Title</h2>
				<p className="font-tiny text-lg">
					This line is rendered in the DotMatrix custom font for a digital or retro look.
				</p>
			</div>
		</main>
	);
}
