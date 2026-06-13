import { cn } from "@premier-js/core"

export interface LabelProps {
  children: React.ReactNode
  htmlFor?: string
  required?: boolean
  requiredColor?: string
  className?: string
}

export function Label({
  children,
  htmlFor,
  required = false,
  requiredColor = "text-red-500",
  className,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-sm font-medium text-gray-700", className)}
    >
      {children}
      {required && <span className={cn("ml-0.5", requiredColor)}>*</span>}
    </label>
  )
}
