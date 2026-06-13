"use client"

import { useState } from "react"
import { cn } from "@premier-js/core"

export interface DocSidebarItem {
  label: string
  href: string
  children?: DocSidebarItem[]
  icon?: string
}

export interface DocSidebarProps {
  items: DocSidebarItem[]
  activeHref?: string
  title?: string
  bgColor?: string
  textColor?: string
  activeBgColor?: string
  activeTextColor?: string
  hoverBgColor?: string
  borderColor?: string
  className?: string
}

export function DocSidebar({
  items,
  activeHref,
  title = "Documentation",
  bgColor = "bg-white",
  textColor = "text-gray-700",
  activeBgColor = "bg-blue-50",
  activeTextColor = "text-blue-700",
  hoverBgColor = "hover:bg-gray-50",
  borderColor = "border-gray-200",
  className,
}: DocSidebarProps) {
  const [expanded, setExpanded] = useState<string[]>([])

  const toggle = (label: string) => {
    setExpanded((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    )
  }

  const renderItem = (item: DocSidebarItem, depth: number = 0) => {
    const isActive = activeHref === item.href
    const isExpanded = expanded.includes(item.label)
    const hasChildren = item.children && item.children.length > 0

    return (
      <div key={item.href}>
        <a
          href={item.href}
          onClick={hasChildren ? (e) => { e.preventDefault(); toggle(item.label) } : undefined}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
            isActive ? cn(activeBgColor, activeTextColor) : cn(textColor, hoverBgColor),
            depth > 0 && "ml-4",
          )}
        >
          {item.icon && <span className="text-base">{item.icon}</span>}
          <span className="flex-1">{item.label}</span>
          {hasChildren && (
            <svg
              className={cn("w-4 h-4 transition-transform duration-150", isExpanded && "rotate-90")}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18l6-6-6-6" />
            </svg>
          )}
        </a>
        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children!.map((child) => renderItem(child, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <aside
      className={cn("w-64 h-full border-r overflow-y-auto p-4", bgColor, borderColor, className)}
    >
      {title && (
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4 px-3">
          {title}
        </h3>
      )}
      <nav className="space-y-1">
        {items.map((item) => renderItem(item))}
      </nav>
    </aside>
  )
}
