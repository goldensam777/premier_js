"use client"

import { cn } from "@premier-js/core"

export interface FilterOption {
  label: string
  value: string
  count?: number
}

export interface FilterGroup {
  name: string
  options: FilterOption[]
}

export interface FilterPanelProps {
  groups: FilterGroup[]
  selected: Record<string, string[]>
  onChange: (group: string, values: string[]) => void
  title?: string
  bgColor?: string
  textColor?: string
  accentColor?: string
  borderColor?: string
}

export function FilterPanel({
  groups,
  selected,
  onChange,
  title = "Filtres",
  bgColor = "bg-white",
  textColor = "text-gray-700",
  accentColor = "text-blue-600",
  borderColor = "border-gray-200",
}: FilterPanelProps) {
  const handleToggle = (groupName: string, value: string) => {
    const current = selected[groupName] ?? []
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    onChange(groupName, next)
  }

  return (
    <div className={cn("rounded-xl border p-4 space-y-5", borderColor, bgColor)}>
      {title && (
        <h4 className={cn("text-sm font-semibold", textColor)}>{title}</h4>
      )}
      {groups.map((group) => (
        <div key={group.name}>
          <h5 className={cn("text-xs font-semibold uppercase tracking-wider mb-2", textColor)}>
            {group.name}
          </h5>
          <div className="space-y-1.5">
            {group.options.map((option) => {
              const isSelected = (selected[group.name] ?? []).includes(option.value)
              return (
                <label
                  key={option.value}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleToggle(group.name, option.value)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className={cn("text-sm flex-1", isSelected ? accentColor : textColor)}>
                    {option.label}
                  </span>
                  {option.count !== undefined && (
                    <span className={cn("text-xs", textColor)}>({option.count})</span>
                  )}
                </label>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
