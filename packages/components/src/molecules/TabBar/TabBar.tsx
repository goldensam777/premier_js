"use client"

import { useState } from "react"
import { cn } from "@premier-js/core"

export interface TabBarItem {
  label: string
  value: string
  icon?: string
}

export interface TabBarProps {
  items: TabBarItem[]
  value: string
  onChange: (value: string) => void
  variant?: "underline" | "pills" | "boxed"
  activeColor?: string
  inactiveColor?: string
  activeBgColor?: string
}

export function TabBar({
  items,
  value,
  onChange,
  variant = "underline",
  activeColor = "text-blue-600",
  inactiveColor = "text-gray-500",
  activeBgColor = "bg-blue-50",
}: TabBarProps) {
  const [localValue, setLocalValue] = useState(value)

  const selected = value ?? localValue

  const handleChange = (v: string) => {
    setLocalValue(v)
    onChange?.(v)
  }

  const variantStyles = {
    underline: {
      container: "border-b border-gray-200",
      tab: (isActive: boolean) =>
        cn(
          "pb-2 border-b-2 transition-colors",
          isActive ? cn("border-blue-600", activeColor) : cn("border-transparent", inactiveColor, "hover:text-gray-700"),
        ),
    },
    pills: {
      container: "gap-1",
      tab: (isActive: boolean) =>
        cn(
          "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
          isActive ? cn(activeBgColor, activeColor) : cn(inactiveColor, "hover:bg-gray-100"),
        ),
    },
    boxed: {
      container: "border border-gray-200 rounded-lg p-1",
      tab: (isActive: boolean) =>
        cn(
          "px-4 py-2 rounded-md text-sm font-medium transition-colors",
          isActive ? cn("bg-white shadow-sm", activeColor) : cn(inactiveColor, "hover:text-gray-700"),
        ),
    },
  }

  const s = variantStyles[variant]

  return (
    <div className={cn("flex items-center", s.container)}>
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => handleChange(item.value)}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-colors",
            s.tab(selected === item.value),
          )}
        >
          {item.icon && <span>{item.icon}</span>}
          {item.label}
        </button>
      ))}
    </div>
  )
}
