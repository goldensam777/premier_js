import { cn } from "@premier-js/core"

export interface StatItem {
  label:   string
  value:   string | number
  trend?:  { value: number; label?: string }
  color?:  "green" | "blue" | "amber" | "red" | "purple" | "teal"
}

export interface DashboardStatsProps {
  title?:   string
  items:    StatItem[]
  columns?: 2 | 3 | 4
  bgColor?: string
}

const COL_CLS = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
}

const ACCENT: Record<string, string> = {
  green:  "#10b981",
  blue:   "#3b82f6",
  amber:  "#f59e0b",
  red:    "#ef4444",
  purple: "#8b5cf6",
  teal:   "#14b8a6",
}

export function DashboardStats({
  title,
  items   = [],
  columns = 3,
  bgColor = "var(--color-background)",
}: DashboardStatsProps) {
  return (
    <section className="py-8 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-xl font-bold mb-6" style={{ color: "var(--color-text)" }}>
            {title}
          </h2>
        )}
        <div className={cn("grid gap-4", COL_CLS[columns])}>
          {items.map((item, i) => {
            const accent    = ACCENT[item.color ?? "green"]
            const trendUp   = item.trend && item.trend.value >= 0
            const trendColor = trendUp ? "#10b981" : "#ef4444"
            return (
              <div
                key={i}
                className="relative rounded-2xl p-5 overflow-hidden"
                style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                />
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1 truncate"
                      style={{ color: "var(--color-text-muted)" }}>
                      {item.label}
                    </p>
                    <p className="text-3xl font-bold leading-none"
                      style={{ color: "var(--color-text)" }}>
                      {item.value}
                    </p>
                    {item.trend && (
                      <div className="flex items-center gap-1 mt-2">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" style={{ color: trendColor }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                            d={trendUp ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                        </svg>
                        <span className="text-xs font-semibold" style={{ color: trendColor }}>
                          {trendUp ? "+" : ""}{item.trend.value}%
                        </span>
                        {item.trend.label && (
                          <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                            {item.trend.label}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
