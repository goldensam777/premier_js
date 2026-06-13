"use client"

import { useState, useEffect } from "react"
import { cn } from "@premier-js/core"

export interface TOCItem {
  id: string
  label: string
  level: 2 | 3 | 4
}

export interface TOCProps {
  items: TOCItem[]
  title?: string
  activeColor?: string
  linkColor?: string
  titleColor?: string
}

export function TOC({
  items,
  title = "Sur cette page",
  activeColor = "text-blue-600",
  linkColor = "text-gray-500",
  titleColor = "text-gray-900",
}: TOCProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" },
    )

    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <nav className="space-y-1">
      {title && (
        <h4 className={cn("text-sm font-semibold mb-3", titleColor)}>{title}</h4>
      )}
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            "block text-sm py-1 transition-colors duration-150",
            item.level === 3 && "pl-4",
            item.level === 4 && "pl-8",
            activeId === item.id ? activeColor : cn(linkColor, "hover:text-gray-700"),
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
