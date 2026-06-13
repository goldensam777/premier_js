import { cn } from "@premier-js/core"

export interface ButtonProps {
  children: React.ReactNode
  isDefault?: boolean
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export function Button({
  children,
  isDefault = true,
  className,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const defaultStyle = "bg-white border border-gray-300 text-gray-800 hover:border-black hover:bg-gray-50"
  const primaryStyle = "bg-blue-600 text-white hover:bg-blue-700"
  const style = isDefault ? defaultStyle : primaryStyle

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-6 py-2 rounded-lg transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        style,
        className,
      )}
    >
      {children}
    </button>
  )
}
