"use client"

import { useState } from "react"
import { cn } from "@premier-js/core"

export interface NavLink {
  label: string
  href: string
}

export interface NavbarProps {
  logo: string
  logoSrc?: string
  links?: NavLink[]
  ctaLabel?: string
  ctaHref?: string
  bgColor?: string
  textColor?: string
  borderColor?: string
  logoColor?: string
  sticky?: boolean
}

export function Navbar({
  logo,
  logoSrc,
  links = [],
  ctaLabel,
  ctaHref = "#",
  bgColor = "var(--color-surface)",
  textColor = "var(--color-text-muted)",
  borderColor = "var(--color-border)",
  logoColor = "var(--color-text)",
  sticky = true,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className={cn("w-full border-b", sticky ? "sticky top-0 z-50" : "")}
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-bold text-xl" style={{ color: logoColor }}>
          {logoSrc ? <img src={logoSrc} alt={logo} className="h-8" /> : logo}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: textColor }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {ctaLabel && (
            <a href={ctaHref}>
              <button
                className="px-6 py-2 rounded-lg transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700"
              >
                {ctaLabel}
              </button>
            </a>
          )}
        </div>

        <button
          className="md:hidden"
          style={{ color: textColor }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t"
          style={{ backgroundColor: bgColor, borderColor }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:opacity-80"
              style={{ color: textColor }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {ctaLabel && (
            <a href={ctaHref}>
              <button
                className="px-6 py-2 rounded-lg transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700"
              >
                {ctaLabel}
              </button>
            </a>
          )}
        </div>
      )}
    </nav>
  )
}
