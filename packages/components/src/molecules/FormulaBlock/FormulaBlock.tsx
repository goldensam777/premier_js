import { cn } from "@premier-js/core"

export interface FormulaBlockProps {
  latex: string
  inline?: boolean
  bgColor?: string
  textColor?: string
  className?: string
}

export function FormulaBlock({
  latex,
  inline = false,
  bgColor = "bg-gray-50",
  textColor = "text-gray-900",
  className,
}: FormulaBlockProps) {
  if (inline) {
    return (
      <span
        className={cn("font-mono text-sm italic px-1", textColor, className)}
        title={latex}
      >
        {latex}
      </span>
    )
  }

  return (
    <div
      className={cn(
        "rounded-lg p-4 overflow-x-auto text-center font-mono text-sm",
        bgColor, textColor, className,
      )}
    >
      {latex}
    </div>
  )
}
