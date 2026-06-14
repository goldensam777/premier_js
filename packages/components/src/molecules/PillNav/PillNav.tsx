"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { cn } from "@premier-js/core"

export interface PillNavItem {
  label: string
  href: string
}

export interface PillNavProps {
  items: PillNavItem[]
  className?: string
  defaultActive?: number
}

export function PillNav({ items, className, defaultActive = 0 }: PillNavProps) {
  const [active, setActive] = useState(defaultActive)

  const handleClick = useCallback((index: number, href: string) => {
    setActive(index)
    window.location.href = href
  }, [])

  return (
    <nav
      className={cn(
        "relative inline-flex items-center rounded-full px-1.5 py-1.5",
        className,
      )}
      style={{ background: "var(--gs-surface)" }}
    >
      {items.map((item, i) => (
        <button
          key={item.href}
          onClick={() => handleClick(i, item.href)}
          className={cn(
            "relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
          )}
          style={{
            color: active === i ? "var(--gs-bg)" : "var(--gs-text)",
          }}
        >
          {item.label}
          {active === i && (
            <motion.div
              layoutId="pill"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              className="absolute inset-0 -z-10 rounded-full"
              style={{ background: "var(--gs-text)" }}
            />
          )}
        </button>
      ))}
    </nav>
  )
}
