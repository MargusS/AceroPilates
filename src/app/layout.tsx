// The real root layout (<html>, fonts, metadata) lives in app/[locale]/layout.tsx.
// This pass-through layout only exists so app/not-found.tsx can render for
// URLs outside any locale.
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return children;
}
