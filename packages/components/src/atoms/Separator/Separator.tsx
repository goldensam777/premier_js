import { cn } from "@premier-js/core"

export interface SeparatorProps {
  orientation?: "horizontal" | "vertical"
  color?: string
  thickness?: string
  className?: string
}

export function Separator({
  orientation = "horizontal",
  color = "bg-gray-200",
  thickness = "h-px",
  className,
}: SeparatorProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        orientation === "horizontal" ? cn("w-full", thickness) : "h-full w-px",
        color,
        className,
      )}
    />
  )
}
