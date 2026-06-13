import { cn } from "@premier-js/core"

export interface PricingPlan {
  name: string
  price: number | string
  period?: string
  description?: string
  features: string[]
  ctaLabel?: string
  ctaHref?: string
  highlighted?: boolean
  badgeLabel?: string
}

export interface PricingTableProps {
  id?: string
  title?: string
  subtitle?: string
  plans: PricingPlan[]
  bgColor?: string
  titleColor?: string
  subtitleColor?: string
}

export function PricingTable({
  id,
  title,
  subtitle,
  plans = [],
  bgColor = "var(--color-surface)",
  titleColor = "var(--color-text)",
  subtitleColor = "var(--color-text-muted)",
}: PricingTableProps) {
  return (
    <section id={id} className="py-20 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: titleColor }}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: subtitleColor }}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const isHighlighted = plan.highlighted
            return (
              <div
                key={i}
                className={cn(
                  "border rounded-xl p-6 flex flex-col",
                  isHighlighted ? "shadow-xl" : "shadow-sm",
                )}
                style={{
                  backgroundColor: isHighlighted ? "var(--color-primary)" : "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-semibold text-sm"
                    style={{ color: isHighlighted ? "rgba(255,255,255,0.85)" : "var(--color-text-muted)" }}
                  >
                    {plan.name}
                  </span>
                  {plan.badgeLabel && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor: isHighlighted ? "rgba(255,255,255,0.2)" : "var(--color-primary)",
                        color: "#ffffff",
                      }}
                    >
                      {plan.badgeLabel}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: isHighlighted ? "#ffffff" : "var(--color-text)" }}
                  >
                    {typeof plan.price === "number" ? `${plan.price.toLocaleString()} FCFA` : plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className="text-sm ml-1"
                      style={{ color: isHighlighted ? "rgba(255,255,255,0.6)" : "var(--color-text-muted)" }}
                    >
                      /{plan.period}
                    </span>
                  )}
                </div>

                {plan.description && (
                  <p
                    className="text-sm mb-6"
                    style={{ color: isHighlighted ? "rgba(255,255,255,0.7)" : "var(--color-text-muted)" }}
                  >
                    {plan.description}
                  </p>
                )}

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {(plan.features ?? []).map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: isHighlighted ? "#ffffff" : "var(--color-primary)" }}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{ color: isHighlighted ? "rgba(255,255,255,0.85)" : "var(--color-text-muted)" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href={plan.ctaHref ?? "#"}>
                  <button
                    className={cn(
                      "w-full py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isHighlighted
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-blue-600 text-white hover:bg-blue-700",
                    )}
                  >
                    {plan.ctaLabel ?? "Commencer"}
                  </button>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
