"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeHash, setActiveHash] = useState("")

  useEffect(() => {
    if (typeof window === "undefined") return
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#classic")
    }
    window.addEventListener("hashchange", handleHashChange)
    handleHashChange()
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <>
      <style>{`
        .navbar-inner {
          width: fit-content;
          max-width: min(92%, 1200px);
        }
        .navbar-mobile-menu {
          width: min(92%, 480px);
        }
        @media (min-width: 768px) {
          .navbar-inner {
            width: fit-content;
            max-width: min(95%, 1200px);
          }
        }
      `}</style>
      
      <nav
        className={cn(
          "navbar-inner fixed top-6 left-1/2 -translate-x-1/2 z-50",
          "flex flex-row items-center justify-between gap-6 md:gap-12 px-6 py-2.5",
          "rounded-full border",
          "backdrop-blur-2xl shadow-xl transition-all duration-300",
          className,
        )}
        style={{
          background: "color-mix(in srgb, var(--gs-bg) 80%, transparent)",
          borderColor: "color-mix(in srgb, var(--gs-text) 15%, transparent)",
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.18), inset 0 1px 0 0 color-mix(in srgb, var(--gs-text) 22%, transparent)"
        }}
      >
        {/* Logo Slot */}
        <div className="flex items-center flex-shrink-0">
          {logo && <a href="/" className="hover:opacity-90 transition-opacity">{logo}</a>}
        </div>

        {/* Desktop Links (with sliding hover indicator) */}
        <ul 
          className="hidden md:flex items-center gap-1"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {links.map((link, index) => {
            const isActive = link.href === activeHash
            return (
              <li 
                key={link.href} 
                className="relative px-4 py-1.5 rounded-full cursor-pointer flex items-center justify-center"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <a
                  href={link.href}
                  className="relative z-10 text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                  style={{
                    color: isActive || hoveredIndex === index 
                      ? "var(--gs-text)" 
                      : "var(--gs-text-muted)"
                  }}
                >
                  {link.label}
                </a>

                {/* Sliding background pill on hover */}
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="nav-hover-bg"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{
                      background: "color-mix(in srgb, var(--gs-text) 8%, transparent)"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}

                {/* Subtile dot under active link */}
                {isActive && hoveredIndex !== index && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute bottom-0.5 w-1 h-1 rounded-full"
                    style={{
                      background: "var(--gs-primary)"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        {/* CTA Button Slot */}
        <div className="hidden md:flex items-center">
          {cta && (
            <a href={cta.href}>
              <Button
                variant="primary"
                style={{
                  background: "var(--gs-text)",
                  color: "var(--gs-bg)",
                  borderRadius: "9999px",
                  padding: "0.5rem 1.25rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  boxShadow: "0 4px 12px -3px rgba(0,0,0,0.15)"
                }}
              >
                {cta.label}
              </Button>
            </a>
          )}
        </div>

        {/* Hamburger Mobile Trigger */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          style={{ color: "var(--gs-text)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown with Spring Animations */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="navbar-mobile-menu fixed md:hidden left-1/2 -translate-x-1/2 z-40 flex flex-col gap-2 p-5 mt-2 border"
            style={{
              top: "calc(6px + 3.75rem)",
              background: "color-mix(in srgb, var(--gs-surface) 92%, transparent)",
              borderColor: "color-mix(in srgb, var(--gs-text) 15%, transparent)",
              borderRadius: "20px",
              backdropFilter: "blur(28px)",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.3)"
            }}
          >
            {links.map((link) => {
              const isActive = link.href === activeHash
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium py-2 px-4 rounded-xl transition-all duration-200"
                  style={{
                    color: isActive ? "var(--gs-text)" : "var(--gs-text-muted)",
                    background: isActive ? "color-mix(in srgb, var(--gs-text) 8%, transparent)" : "transparent"
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            })}
            
            {cta && (
              <a href={cta.href} onClick={() => setMenuOpen(false)} className="mt-2 w-full">
                <Button
                  variant="primary"
                  style={{
                    background: "var(--gs-text)",
                    color: "var(--gs-bg)",
                    borderRadius: "9999px",
                    width: "100%",
                    padding: "0.6rem 0",
                    fontWeight: 600
                  }}
                >
                  {cta.label}
                </Button>
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
