"use client"

import { useState } from "react"
import { cn } from "@premier-js/core"
import { Button } from "../../atoms/Button"

export interface NavLink {
  label: string
  href: string
}

export interface NavbarProps {
  logo?: React.ReactNode
  links: NavLink[]
  cta?: { label: string; href: string }
  className?: string
}

export function Navbar({ logo, links, cta, className }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={cn("gs-glass flex items-center justify-between px-4 py-2", className)}>
      {logo && (
        <a href="/" className="flex-shrink-0">
          {logo}
        </a>
      )}

      <div className="hidden md:flex items-center gap-6 mx-auto">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--gs-text-muted)" }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center">
        {cta && (
          <a href={cta.href}>
            <Button
              variant="primary"
              style={{
                background: "var(--gs-text)",
                color: "var(--gs-bg)",
                borderRadius: "var(--gs-radius)",
              }}
            >
              {cta.label}
            </Button>
          </a>
        )}
      </div>

      <button
        className="md:hidden p-2"
        style={{ color: "var(--gs-text)" }}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {menuOpen && (
        <div
          className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-2 p-4 md:hidden"
          style={{
            background: "var(--gs-surface)",
            border: "1px solid var(--gs-border)",
            borderRadius: "var(--gs-radius)",
            backdropFilter: "blur(var(--gs-blur))",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--gs-text-muted)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {cta && (
            <a href={cta.href} onClick={() => setMenuOpen(false)}>
              <Button
                variant="primary"
                style={{
                  background: "var(--gs-text)",
                  color: "var(--gs-bg)",
                  borderRadius: "var(--gs-radius)",
                  width: "100%",
                }}
              >
                {cta.label}
              </Button>
            </a>
          )}
        </div>
      )}
    </nav>
  )
}
