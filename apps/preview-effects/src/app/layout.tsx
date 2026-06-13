import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Premier.js — Effects Preview",
  description: "Effets visuels preview app",
}

export const dynamic = "force-dynamic"

const _safelist = [
  "min-h-screen", "bg-[var(--color-background)]", "text-[var(--color-text)]",
  "max-w-7xl", "mx-auto", "px-4", "py-8", "sm:px-6", "lg:px-8",
  "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-6",
  "flex", "flex-col", "items-center", "justify-center", "gap-4",
  "text-3xl", "font-bold", "text-2xl", "text-lg", "font-semibold",
  "text-sm", "text-[var(--color-text-muted)]",
  "bg-[var(--color-surface)]", "rounded-xl", "shadow-sm", "border", "border-[var(--color-border)]",
  "p-6", "space-y-8", "mb-8", "mt-8", "pb-4", "mb-6",
  "hover:shadow-md", "transition-shadow", "w-full", "h-full",
  "inline-flex", "items-center", "gap-2", "px-4", "py-2",
  "bg-[var(--color-primary)]", "text-white", "rounded-lg", "hover:opacity-90",
  "no-underline", "text-[var(--color-primary)]", "hover:underline",
  "overflow-hidden", "relative", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4",
  "col-span-2", "col-span-3", "object-cover", "aspect-video",
  "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center",
  "bg-black/50", "backdrop-blur-sm",
  "pointer-events-none", "select-none",
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <span className={_safelist.join(" ")} hidden />
      </body>
    </html>
  )
}
