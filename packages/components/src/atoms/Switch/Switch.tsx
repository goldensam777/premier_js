import { cn } from "@premier-js/core"

export interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
  activeColor?: string
  inactiveColor?: string
  labelColor?: string
  size?: "sm" | "md" | "lg"
}

export function Switch({
  checked,
  onChange,
  label,
  disabled = false,
  activeColor = "bg-blue-600",
  inactiveColor = "bg-gray-300",
  labelColor = "text-gray-700",
  size = "md",
}: SwitchProps) {
  const sizeStyles = {
    sm: { track: "w-7 h-4", thumb: "w-3 h-3", translate: "translate-x-3" },
    md: { track: "w-9 h-5", thumb: "w-4 h-4", translate: "translate-x-4" },
    lg: { track: "w-11 h-6", thumb: "w-5 h-5", translate: "translate-x-5" },
  }

  const s = sizeStyles[size]

  return (
    <label className={cn("inline-flex items-center gap-2", disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer")}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative inline-flex items-center rounded-full transition-colors duration-200",
          s.track,
          checked ? activeColor : inactiveColor,
        )}
      >
        <span
          className={cn(
            "inline-block bg-white rounded-full shadow transform transition-transform duration-200",
            s.thumb,
            checked ? s.translate : "translate-x-0.5",
          )}
        />
      </button>
      {label && <span className={cn("text-sm font-medium", labelColor)}>{label}</span>}
    </label>
  )
}
