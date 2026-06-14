import { cn } from "@premier-js/core"

export interface ButtonProps {
  children: React.ReactNode
  isDefault?: boolean
  variant?: "default" | "primary"
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export function Button({
  children,
  isDefault = true,
  variant = isDefault ? "default" : "primary",
  className,
  style,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const base = "px-6 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
  const defaultStyle = "bg-white border border-gray-300 text-gray-800 hover:border-black hover:bg-gray-50"

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variant === "default" && defaultStyle, className)}
      style={style}
    >
      {children}
    </button>
  )
}
