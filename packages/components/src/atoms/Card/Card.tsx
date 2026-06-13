import { cn } from "@premier-js/core"

export interface CardProps {
  children: React.ReactNode
  padding?: string
  shadow?: "none" | "sm" | "md" | "lg" | "xl"
  borderColor?: string
  bgColor?: string
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl"
  hoverable?: boolean
  className?: string
}

export function Card({
  children,
  padding = "p-6",
  shadow = "md",
  borderColor = "var(--color-border)",
  bgColor = "var(--color-surface)",
  rounded = "xl",
  hoverable = false,
  className,
}: CardProps) {
  const shadowStyles = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  }

  const roundedStyles = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
  }

  return (
    <div
      className={cn(
        "border",
        padding,
        shadowStyles[shadow],
        roundedStyles[rounded],
        hoverable ? "hover:shadow-lg hover:-translate-y-1 transition-all duration-200" : "",
        className,
      )}
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
    >
      {children}
    </div>
  )
}
