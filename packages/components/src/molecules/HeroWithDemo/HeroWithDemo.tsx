import { cn } from "@premier-js/core"

export interface HeroWithDemoProps {
  title: string
  subtitle?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  demoContent?: React.ReactNode
  align?: "left" | "center"
  bgColor?: string
  titleColor?: string
  bgContent?: React.ReactNode
}

export function HeroWithDemo({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaHref = "#",
  demoContent,
  align = "left",
  bgColor = "var(--color-background)",
  titleColor = "var(--color-text)",
  bgContent,
}: HeroWithDemoProps) {
  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: bgColor }}>
      {bgContent && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {bgContent}
        </div>
      )}
      <div className={cn("relative z-10 max-w-6xl mx-auto", align === "center" ? "text-center" : "")}>
        <div className={cn("grid gap-12 items-center", demoContent ? "lg:grid-cols-2" : "")}>
          <div className={cn("space-y-6", align === "center" && !demoContent ? "mx-auto max-w-3xl" : "")}>
            {subtitle && (
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">{subtitle}</p>
            )}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight" style={{ color: titleColor }}>
              {title}
            </h1>
            {description && (
              <p className="text-lg text-gray-600 max-w-2xl">{description}</p>
            )}
            {ctaLabel && (
              <a
                href={ctaHref}
                className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                {ctaLabel}
              </a>
            )}
          </div>
          {demoContent && (
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              {demoContent}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
