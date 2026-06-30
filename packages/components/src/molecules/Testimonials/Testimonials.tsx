import { cn } from "@premier-js/core"

export interface TestimonialItem {
  quote: string
  name: string
  role?: string
  avatarSrc?: string
  initials?: string
}

export interface TestimonialsProps {
  title?: string
  subtitle?: string
  items: TestimonialItem[]
  columns?: 2 | 3
  bgColor?: string
  titleColor?: string
  subtitleColor?: string
  quoteColor?: string
  nameColor?: string
  roleColor?: string
}

export function Testimonials({
  title,
  subtitle,
  items = [],
  columns = 3,
  bgColor = "var(--gs-bg)",
  titleColor = "var(--gs-text)",
  subtitleColor = "var(--gs-text-muted)",
  quoteColor = "var(--gs-text-muted)",
  nameColor = "var(--gs-text)",
  roleColor = "var(--gs-text-muted)",
}: TestimonialsProps) {
  const colStyles = {
    2: "@xl:grid-cols-2",
    3: "@xl:grid-cols-2 @4xl:grid-cols-3",
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto @container">
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

        <div className={cn("grid gap-6", colStyles[columns])}>
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-6 shadow-sm border"
              style={{ backgroundColor: "var(--gs-surface)", borderColor: "var(--gs-border)" }}
            >
              <p className="text-sm leading-relaxed mb-5" style={{ color: quoteColor }}>
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "inline-flex items-center justify-center rounded-full overflow-hidden",
                    "w-10 h-10 text-base bg-[var(--gs-border-subtle)] text-[var(--gs-text-muted)] font-semibold",
                  )}
                >
                  {item.avatarSrc
                    ? <img src={item.avatarSrc} alt={item.name} className="w-full h-full object-cover" />
                    : item.name.slice(0, 2).toUpperCase()
                  }
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: nameColor }}>
                    {item.name}
                  </p>
                  {item.role && (
                    <p className="text-xs" style={{ color: roleColor }}>
                      {item.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
