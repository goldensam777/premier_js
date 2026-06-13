import { cn } from "@premier-js/core"

export interface CTABannerProps {
  title: string
  description?: string
  ctaLabel: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  align?: "left" | "center"
  bgColor?: string
  titleColor?: string
  descriptionColor?: string
}

export function CTABanner({
  title,
  description,
  ctaLabel,
  ctaHref = "#",
  secondaryCtaLabel,
  secondaryCtaHref = "#",
  align = "center",
  bgColor = "var(--color-primary)",
  titleColor = "#ffffff",
  descriptionColor = "rgba(255,255,255,0.75)",
}: CTABannerProps) {
  const isCenter = align === "center"

  return (
    <section className="py-20 px-6" style={{ backgroundColor: bgColor }}>
      <div className={cn("max-w-3xl mx-auto", isCenter ? "text-center" : "text-left")}>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: titleColor }}>
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-lg" style={{ color: descriptionColor }}>
            {description}
          </p>
        )}

        <div className={cn("mt-8 flex flex-wrap gap-3", isCenter ? "justify-center" : "")}>
          <a href={ctaHref}>
            <button className="px-6 py-2 rounded-lg transition-all duration-200 bg-white text-blue-600 hover:bg-gray-100 border-white">
              {ctaLabel}
            </button>
          </a>
          {secondaryCtaLabel && (
            <a href={secondaryCtaHref}>
              <button className="px-6 py-2 rounded-lg transition-all duration-200 border border-white/40 text-white hover:bg-white/10 bg-transparent">
                {secondaryCtaLabel}
              </button>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
