import { cn } from "@premier-js/core"

export interface PaginationProps {
  current: number
  total: number
  onChange: (page: number) => void
  siblingCount?: number
  bgColor?: string
  activeBgColor?: string
  activeTextColor?: string
  textColor?: string
  disabledColor?: string
}

export function Pagination({
  current,
  total,
  onChange,
  siblingCount = 1,
  bgColor = "hover:bg-gray-100",
  activeBgColor = "bg-blue-600",
  activeTextColor = "text-white",
  textColor = "text-gray-700",
  disabledColor = "text-gray-300",
}: PaginationProps) {
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i)

  const getPages = (): (number | "dots")[] => {
    const totalPages = Math.max(1, total)
    const left = Math.max(2, current - siblingCount)
    const right = Math.min(totalPages - 1, current + siblingCount)

    const pages: (number | "dots")[] = [1]

    if (left > 2) pages.push("dots")
    pages.push(...range(left, right))
    if (right < totalPages - 1) pages.push("dots")

    if (totalPages > 1) pages.push(totalPages)

    return pages
  }

  const pages = getPages()

  const btn = (page: number, disabled: boolean, label: string) => (
    <button
      onClick={() => !disabled && onChange(page)}
      disabled={disabled}
      className={cn(
        "w-9 h-9 rounded-lg text-sm font-medium transition-colors",
        disabled ? cn("cursor-not-allowed", disabledColor) : cn(textColor, bgColor),
      )}
      aria-label={label}
    >
      {label}
    </button>
  )

  return (
    <nav className="flex items-center justify-center gap-1" aria-label="Pagination">
      {btn(Math.max(1, current - 1), current === 1, "←")}
      {pages.map((page, i) =>
        page === "dots" ? (
          <span key={`dots-${i}`} className={cn("w-9 h-9 flex items-center justify-center text-sm", disabledColor)}>
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onChange(page)}
            className={cn(
              "w-9 h-9 rounded-lg text-sm font-medium transition-colors",
              page === current ? cn(activeBgColor, activeTextColor) : cn(textColor, bgColor),
            )}
            aria-current={page === current ? "page" : undefined}
          >
            {page}
          </button>
        ),
      )}
      {btn(Math.min(total, current + 1), current === total, "→")}
    </nav>
  )
}
