import { cn } from "@premier-js/core"

export interface StreamingIndicatorProps {
  label?: string
  dotColor?: string
  textColor?: string
}

export function StreamingIndicator({
  label = "Génération en cours",
  dotColor = "bg-blue-600",
  textColor = "text-gray-500",
}: StreamingIndicatorProps) {
  return (
    <div className="flex items-center gap-2 py-2">
      <div className="flex gap-1">
        <span className={cn("w-2 h-2 rounded-full animate-bounce", dotColor)} style={{ animationDelay: "0ms" }} />
        <span className={cn("w-2 h-2 rounded-full animate-bounce", dotColor)} style={{ animationDelay: "150ms" }} />
        <span className={cn("w-2 h-2 rounded-full animate-bounce", dotColor)} style={{ animationDelay: "300ms" }} />
      </div>
      {label && <span className={cn("text-sm", textColor)}>{label}</span>}
    </div>
  )
}
