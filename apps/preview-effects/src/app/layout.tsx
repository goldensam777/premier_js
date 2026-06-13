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
  "flex", "flex-col", "items-center", "justify-center", "gap-4", "gap-6", "gap-12",
  "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "grid-cols-2",
  "text-3xl", "font-bold", "text-2xl", "text-lg", "font-semibold", "text-sm", "text-xs",
  "text-[var(--color-text-muted)]",
  "bg-[var(--color-surface)]", "rounded-xl", "shadow-sm", "border", "border-[var(--color-border)]",
  "p-6", "space-y-8", "mb-8", "mt-8", "pb-4", "mb-6",
  "hover:shadow-md", "transition-shadow", "w-full", "h-full",
  "inline-flex", "items-center", "gap-2", "px-4", "py-2",
  "bg-[var(--color-primary)]", "text-white", "rounded-lg", "hover:opacity-90",
  "no-underline", "text-[var(--color-primary)]", "hover:underline",
  "overflow-hidden", "relative", "h-96", "w-96", "h-full", "w-full",
  "fixed", "inset-0", "z-50", "bg-black/50", "backdrop-blur-sm",
  "object-cover", "aspect-video",
  "pointer-events-none", "select-none",
  "text-center", "text-left",
  "font-mono", "font-medium",
  "leading-relaxed",
  "py-4", "px-6", "py-2",
  "rounded-full", "rounded-lg",
  "bg-[var(--color-primary)]/10", "text-[var(--color-primary)]",
  "divide-y", "divide-[var(--color-border)]",
  "hover:bg-[var(--color-background)]",
  "h-screen", "w-screen",
  "top-0", "left-0", "absolute", "z-0",
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
