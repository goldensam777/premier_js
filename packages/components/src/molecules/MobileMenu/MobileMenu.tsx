"use client"

import { useState, useEffect } from "react"
import { cn } from "@premier-js/core"

export interface MobileMenuItem {
  label: string
  href: string
  children?: MobileMenuItem[]
}

export interface MobileMenuProps {
  items: MobileMenuItem[]
  isOpen: boolean
  onClose: () => void
  activeHref?: string
  bgColor?: string
  textColor?: string
  activeColor?: string
  overlayColor?: string
}

export function MobileMenu({
  items,
  isOpen,
  onClose,
  activeHref,
  bgColor = "bg-white",
  textColor = "text-gray-700",
  activeColor = "text-blue-600",
  overlayColor = "bg-black/40",
}: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string[]>([])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const toggle = (label: string) => {
    setExpanded((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    )
  }

  const renderItem = (item: MobileMenuItem) => {
    const isActive = activeHref === item.href
    const isExpanded = expanded.includes(item.label)
    const hasChildren = item.children && item.children.length > 0

    return (
      <div key={item.href}>
        <a
          href={item.href}
          onClick={(e) => {
            if (hasChildren) { e.preventDefault(); toggle(item.label); return }
            onClose()
          }}
          className={cn(
            "flex items-center justify-between py-3 px-4 text-base font-medium border-b border-gray-100",
            isActive ? activeColor : textColor,
          )}
        >
          {item.label}
          {hasChildren && (
            <svg
              className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </a>
        {hasChildren && isExpanded && (
          <div className="bg-gray-50 pl-4">
            {item.children!.map((child) => (
              <a
                key={child.href}
                href={child.href}
                onClick={onClose}
                className={cn(
                  "block py-2 px-4 text-sm border-b border-gray-100",
                  activeHref === child.href ? activeColor : textColor,
                )}
              >
                {child.label}
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className={cn("absolute inset-0", overlayColor)} onClick={onClose} />
      <div className={cn("absolute top-0 left-0 right-0 max-h-screen overflow-y-auto shadow-xl", bgColor)}>
        <div className="flex items-center justify-end p-4 border-b border-gray-100">
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav>
          {items.map(renderItem)}
        </nav>
      </div>
    </div>
  )
}
