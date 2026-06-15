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
  strategy?: "strict" | "adaptive" | "collapse"
}

export function Navbar({ 
  logo, 
  links, 
  cta, 
  className,
  strategy = "collapse"
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeHash, setActiveHash] = useState("")
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#classic")
    }
    window.addEventListener("hashchange", handleHashChange)
    handleHashChange()
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkOverflow = () => {
      if (strategy === "strict") {
        setIsCollapsed(false)
        return
      }

      if (window.innerWidth < 768) {
        setIsCollapsed(true)
        return
      }

      if (strategy === "collapse") {
        const totalCharLength = links.reduce((acc, link) => acc + link.label.length, 0)
        const estimatedLinksWidth = totalCharLength * 7.5 + links.length * 32
        const estimatedLogoWidth = logo ? 150 : 0
        const estimatedCtaWidth = cta ? 120 : 0
        const estimatedRequiredWidth = estimatedLogoWidth + estimatedLinksWidth + estimatedCtaWidth + 80

        const availableWidth = window.innerWidth * 0.92
        if (estimatedRequiredWidth > availableWidth) {
          setIsCollapsed(true)
          return
        }
      }

      setIsCollapsed(false)
    }

    checkOverflow()
    window.addEventListener("resize", checkOverflow)
    return () => window.removeEventListener("resize", checkOverflow)
  }, [links, logo, cta, strategy])

  const totalCharLength = links.reduce((acc, l) => acc + l.label.length, 0)
  const isAdaptive = strategy === "adaptive"

  const gapClass = isAdaptive && totalCharLength > 50
    ? "gap-3 md:gap-6"
    : "gap-6 md:gap-12"

  const linkPaddingClass = isAdaptive && totalCharLength > 50
    ? "px-2.5 py-1"
    : "px-4 py-1.5"

  const linkFontSizeStyle = isAdaptive && totalCharLength > 65
    ? { fontSize: "12px" }
    : isAdaptive && totalCharLength > 45
    ? { fontSize: "13px" }
    : { fontSize: "14px" }

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
          "flex flex-row items-center justify-between px-6 py-2.5",
          gapClass,
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
          className={cn("items-center gap-1", isCollapsed ? "hidden" : "hidden md:flex")}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {links.map((link, index) => {
            const isActive = link.href === activeHash
            return (
              <li 
                key={link.href} 
                className={cn("relative rounded-full cursor-pointer flex items-center justify-center", linkPaddingClass)}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <a
                  href={link.href}
                  className="relative z-10 font-medium transition-colors duration-200 whitespace-nowrap"
                  style={{
                    ...linkFontSizeStyle,
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
        <div className={cn("items-center", isCollapsed ? "hidden" : "hidden md:flex")}>
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
          className={cn("p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors", isCollapsed ? "flex" : "hidden")}
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
            className={cn("navbar-mobile-menu fixed left-1/2 -translate-x-1/2 z-40 flex flex-col gap-2 p-5 mt-2 border", isCollapsed ? "flex" : "hidden")}
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
