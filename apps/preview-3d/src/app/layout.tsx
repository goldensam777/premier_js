import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AETHER — Creative Digital Studio",
  description: "Where code meets art. We craft immersive digital experiences with cutting-edge 3D technology.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        {children}
      </body>
    </html>
  )
}
