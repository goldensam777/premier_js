import { cn } from "@premier-js/core"

export interface FeaturesGridItem {
  icon?: string
  title: string
  description: string
}

export interface FeaturesGridProps {
  items: FeaturesGridItem[]
  title?: string
  subtitle?: string
  columns?: 2 | 3 | 4
  bgColor?: string
  cardBgColor?: string
  cardBorderColor?: string
  titleColor?: string
  subtitleColor?: string
  iconColor?: string
}

export function FeaturesGrid({
  items,
  title,
  subtitle,
  columns = 3,
  bgColor = "bg-gray-50",
  cardBgColor = "bg-white",
  cardBorderColor = "border-gray-100",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-500",
  iconColor = "text-blue-600",
}: FeaturesGridProps) {
  const colStyles = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section className={cn("py-20 px-6", bgColor)}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && <h2 className={cn("text-3xl md:text-4xl font-bold", titleColor)}>{title}</h2>}
            {subtitle && <p className={cn("mt-4 text-lg max-w-2xl mx-auto", subtitleColor)}>{subtitle}</p>}
          </div>
        )}
        <div className={cn("grid gap-6", colStyles[columns])}>
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "rounded-xl p-6 shadow-sm border transition-shadow hover:shadow-md",
                cardBgColor, cardBorderColor,
              )}
            >
              {item.icon && (
                <div className={cn("text-2xl mb-4", iconColor)}>{item.icon}</div>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
