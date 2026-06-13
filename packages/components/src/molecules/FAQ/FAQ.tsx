import { cn } from "@premier-js/core"

export interface FAQItem {
  title: string
  content: string
}

export interface FAQProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
  bgColor?: string
  titleColor?: string
  subtitleColor?: string
}

export function FAQ({
  title,
  subtitle,
  items = [],
  bgColor = "var(--color-background)",
  titleColor = "var(--color-text)",
  subtitleColor = "var(--color-text-muted)",
}: FAQProps) {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-3xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: titleColor }}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg" style={{ color: subtitleColor }}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div
          className="border rounded-xl overflow-hidden"
          style={{ borderColor: "var(--color-border)" }}
        >
          {items.map((item, index) => (
            <details key={index} className="group">
              <summary
                className="flex items-center justify-between px-5 py-4 text-left cursor-pointer hover:brightness-95 transition-all duration-150 list-none"
                style={{ backgroundColor: "var(--color-surface)", color: "var(--color-text)" }}
              >
                <span className="font-medium text-sm">{item.title}</span>
                <svg
                  className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  style={{ color: "var(--color-text-muted)" }}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div
                className="px-5 py-4 text-sm border-t"
                style={{ backgroundColor: "var(--color-background)", color: "var(--color-text-muted)", borderColor: "var(--color-border)" }}
              >
                {item.content}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
