import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Premier.js — Preview",
  description: "Component preview app",
}

const _safelist = [
  "absolute", "animate-bounce", "animate-in", "animate-pulse", "animate-spin",
  "aspect-square", "aspect-video", "backdrop-blur-sm",
  "bg-blue-100", "bg-blue-50", "bg-blue-600", "bg-current", "bg-gray-100",
  "bg-gray-200", "bg-gray-50", "bg-green-50", "bg-red-50", "bg-transparent",
  "bg-white", "bg-white/20", "block", "border", "border-2", "border-b",
  "border-blue-600", "border-collapse", "border-gray-100", "border-gray-200",
  "border-gray-300", "border-green-200", "border-l", "border-r",
  "border-red-200", "border-t", "border-transparent", "border-white",
  "border-white/40", "bottom-0",
  "cursor-crosshair", "cursor-not-allowed", "cursor-pointer",
  "disabled:cursor-not-allowed", "disabled:opacity-40", "disabled:opacity-50",
  "divide-gray-100", "divide-y", "duration-150", "duration-200", "duration-300",
  "duration-500", "ease-out",
  "fade-in", "fill-current", "fixed", "flex", "flex-1", "flex-col",
  "flex-shrink-0", "flex-wrap", "font-bold", "font-medium", "font-semibold",
  "gap-1", "gap-1.5", "gap-2", "gap-3", "gap-4", "gap-8", "grow",
  "h-0.5", "h-1", "h-10", "h-12", "h-16", "h-2", "h-24", "h-3", "h-4", "h-5",
  "h-6", "h-8", "h-9", "h-full", "h-px",
  "hover:bg-black/10", "hover:bg-blue-400", "hover:bg-blue-50",
  "hover:bg-blue-600", "hover:bg-gray-100", "hover:bg-gray-200",
  "hover:bg-gray-50", "hover:border-black", "hover:border-blue-400",
  "hover:brightness-95", "hover:scale-105", "hover:text-blue-600",
  "hover:text-white", "hover:underline",
  "inline-flex", "inset-0", "items-center", "items-end", "items-start",
  "justify-between", "justify-center",
  "leading-none", "left-0", "left-1/2",
  "max-w-25", "max-w-6xl", "max-w-xl",
  "mb-1", "mb-10", "mb-2", "mb-6", "min-h-screen", "ml-0.5", "ml-2", "mr-2",
  "mt-0.5", "mt-1", "mt-10", "mt-2", "mt-4", "mt-8", "mx-2", "mx-auto",
  "no-underline",
  "object-cover", "opacity-0", "opacity-100", "opacity-50", "opacity-60",
  "overflow-auto", "overflow-hidden", "overflow-x-auto", "overflow-y-auto",
  "p-0.5", "p-1", "p-12", "p-2", "p-3", "p-4", "p-5", "p-6",
  "pb-2", "pb-3", "pl-2", "pointer-events-none", "pr-2", "pt-2", "pt-6",
  "px-2", "px-3", "px-4", "px-5", "px-6",
  "py-1", "py-10", "py-12", "py-16", "py-2", "py-20", "py-3", "py-4", "py-5",
  "py-6", "py-8",
  "relative", "resize-none", "resize-y", "right-0", "right-4", "ring-0",
  "ring-offset-0", "rotate-45", "rounded-full", "rounded-lg", "rounded-none",
  "rounded-xl", "row-gap-6",
  "scale-125", "scrollbar-none", "self-center", "shadow", "shadow-lg",
  "shadow-md", "shadow-sm", "shrink-0", "slide-in-from-bottom-2",
  "space-x-2", "space-x-4", "space-y-2", "space-y-4", "space-y-8",
  "stroke-current",
  "text-2xl", "text-3xl", "text-4xl", "text-base", "text-blue-600",
  "text-blue-700", "text-blue-800", "text-center", "text-gray-400",
  "text-gray-500", "text-gray-600", "text-gray-700", "text-gray-800",
  "text-gray-900", "text-green-700", "text-left", "text-red-500", "text-sm",
  "text-white", "text-xs", "top-0", "top-4", "tracking-wider", "transform",
  "transition-all", "transition-colors", "transition-opacity",
  "transition-shadow", "transition-transform", "translate-x-0.5",
  "translate-x-1",
  "uppercase",
  "visible",
  "w-0", "w-10", "w-11", "w-12", "w-14", "w-16", "w-2", "w-20", "w-24",
  "w-3", "w-32", "w-4", "w-40", "w-48", "w-5", "w-56", "w-6", "w-8", "w-9",
  "w-96", "w-full", "whitespace-nowrap",
  "z-10", "z-50", "z-9999",
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        {/* hidden safelist for Tailwind JIT */}
        <span className={_safelist.join(" ")} hidden />
      </body>
    </html>
  )
}
