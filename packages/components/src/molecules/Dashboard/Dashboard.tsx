"use client"

import { cn } from "@premier-js/core"

interface StatCard {
  label: string
  value: string | number
  change?: string
  positive?: boolean
  icon?: React.ReactNode
  iconBg?: string
}

interface RecentItem {
  id: string
  title: string
  subtitle?: string
  status?: string
  statusColor?: string
  date?: string
  avatar?: React.ReactNode
}

export interface DashboardProps {
  username?: string
  stats?: StatCard[]
  recentItems?: RecentItem[]
  recentTitle?: string
  actions?: React.ReactNode
  bgColor?: string
  cardBgColor?: string
  borderColor?: string
  titleColor?: string
  subtitleColor?: string
  statValueColor?: string
  statLabelColor?: string
}

export function Dashboard({
  username,
  stats = [],
  recentItems = [],
  recentTitle = "Activité récente",
  actions,
  bgColor = "bg-gray-50",
  cardBgColor = "bg-white",
  borderColor = "border-gray-200",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-500",
  statValueColor = "text-gray-900",
  statLabelColor = "text-gray-500",
}: DashboardProps) {
  const now = new Date()
  const hour = now.getHours()
  const greeting =
    hour < 12 ? "Bonjour" : hour < 18 ? "Bon après-midi" : "Bonsoir"

  return (
    <div className={cn("min-h-screen", bgColor, "p-6")}>
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className={cn("text-2xl font-bold", titleColor)}>
              {username ? `${greeting}, ${username}` : greeting}
            </h1>
            <p className={cn("mt-1 text-sm", subtitleColor)}>
              {now.toLocaleDateString("fr-FR", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          {actions && <div className="flex items-center gap-3">{actions}</div>}
        </div>

        {stats.length > 0 && (
          <div className={cn(
            "grid gap-4",
            stats.length === 1 ? "grid-cols-1" :
            stats.length === 2 ? "grid-cols-1 sm:grid-cols-2" :
            stats.length === 3 ? "grid-cols-1 sm:grid-cols-3" :
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
          )}>
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl p-5 shadow-sm border"
                style={{ backgroundColor: cardBgColor, borderColor: borderColor }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className={cn("text-sm", statLabelColor)}>{stat.label}</p>
                    <p className={cn("mt-1 text-2xl font-bold", statValueColor)}>
                      {stat.value}
                    </p>
                    {stat.change && (
                      <p className={cn("mt-1 text-xs font-medium", stat.positive ? "text-green-600" : "text-red-500")}>
                        {stat.positive ? "↑" : "↓"} {stat.change}
                      </p>
                    )}
                  </div>
                  {stat.icon && (
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", stat.iconBg ?? "bg-blue-50")}>
                      {stat.icon}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {recentItems.length > 0 && (
          <div
            className="rounded-xl p-6 shadow-sm border"
            style={{ backgroundColor: cardBgColor, borderColor: borderColor }}
          >
            <h2 className={cn("text-base font-semibold mb-4", titleColor)}>
              {recentTitle}
            </h2>
            <div className="flex flex-col divide-y divide-gray-100">
              {recentItems.map((item) => (
                <div key={item.id}
                  className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                  {item.avatar && (
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                      {item.avatar}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className={cn("text-sm font-medium truncate", titleColor)}>
                      {item.title}
                    </p>
                    {item.subtitle && (
                      <p className={cn("text-xs truncate", subtitleColor)}>
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {item.status && (
                      <span className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
                        item.statusColor ?? "bg-gray-100 text-gray-600",
                      )}>
                        {item.status}
                      </span>
                    )}
                    {item.date && (
                      <span className={cn("text-xs", subtitleColor)}>
                        {item.date}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
