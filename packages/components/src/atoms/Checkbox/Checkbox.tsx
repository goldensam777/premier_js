import { cn } from "@premier-js/core"

export interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
  accentColor?: string
  labelColor?: string
}

export function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
  accentColor = "bg-blue-600",
  labelColor = "text-gray-700",
}: CheckboxProps) {
  return (
    <label className={cn("inline-flex items-center gap-2", disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer")}>
      <div
        onClick={() => !disabled && onChange(!checked)}
        className={cn(
          "w-4 h-4 rounded border-2 flex items-center justify-center transition-colors duration-150",
          checked ? cn(accentColor, "border-transparent") : "border-gray-300 bg-white",
          disabled ? "" : "hover:border-blue-400",
        )}
      >
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      {label && <span className={cn("text-sm", labelColor)}>{label}</span>}
    </label>
  )
}
