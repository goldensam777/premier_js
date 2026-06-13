import { cn } from "@premier-js/core"

export interface RadioOption {
  value: string
  label: string
}

export interface RadioProps {
  options: RadioOption[]
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  direction?: "horizontal" | "vertical"
  accentColor?: string
  labelColor?: string
}

export function Radio({
  options,
  value,
  onChange,
  disabled = false,
  direction = "vertical",
  accentColor = "bg-blue-600",
  labelColor = "text-gray-700",
}: RadioProps) {
  return (
    <div className={cn("flex gap-4", direction === "vertical" ? "flex-col" : "flex-row flex-wrap")}>
      {options.map((opt) => {
        const selected = value === opt.value
        return (
          <label
            key={opt.value}
            className={cn(
              "inline-flex items-center gap-2",
              disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
            )}
          >
            <div
              onClick={() => !disabled && onChange(opt.value)}
              className={cn(
                "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-150",
                selected ? "border-blue-600" : "border-gray-300",
                disabled ? "" : "hover:border-blue-400",
              )}
            >
              {selected && <div className={cn("w-2 h-2 rounded-full", accentColor)} />}
            </div>
            <span className={cn("text-sm", labelColor)}>{opt.label}</span>
          </label>
        )
      })}
    </div>
  )
}
