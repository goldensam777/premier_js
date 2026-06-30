import { cn } from "@premier-js/core"

export interface TimelineEvent {
  date: string
  title: string
  description?: string
  icon?: string
}

export interface TimelineProps {
  events: TimelineEvent[]
  title?: string
  subtitle?: string
  variant?: "left" | "alternating"
  bgColor?: string
  titleColor?: string
  lineColor?: string
  dotColor?: string
  dateColor?: string
}

export function Timeline({
  events,
  title,
  subtitle,
  variant = "left",
  bgColor = "bg-[var(--gs-bg)]",
  titleColor = "text-[var(--gs-text)]",
  lineColor = "bg-[var(--gs-border)]",
  dotColor = "bg-[var(--gs-primary)]",
  dateColor = "text-[var(--gs-primary)]",
}: TimelineProps) {
  return (
    <section className={cn("py-20 px-6", bgColor)}>
      <div className="max-w-4xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && <h2 className={cn("text-3xl md:text-4xl font-bold", titleColor)}>{title}</h2>}
            {subtitle && <p className="mt-4 text-lg text-[var(--gs-text-muted)]">{subtitle}</p>}
          </div>
        )}

        <div className="relative">
          <div className={cn("absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2", lineColor)} />

          {events.map((event, i) => {
            const isLeft = variant === "left" || i % 2 === 0
            return (
              <div
                key={i}
                className={cn(
                  "relative flex items-start gap-6 pb-12",
                  variant === "alternating" ? "md:flex-row" : "",
                )}
              >
                <div
                  className={cn(
                    "absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[var(--gs-bg)] z-10",
                    dotColor,
                  )}
                />
                <div
                  className={cn(
                    "ml-10 md:ml-0 md:w-1/2",
                    variant === "alternating"
                      ? isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                      : "md:pl-12",
                  )}
                >
                  <span className={cn("text-sm font-semibold", dateColor)}>{event.date}</span>
                  <h3 className="mt-1 text-lg font-semibold text-[var(--gs-text)]">{event.title}</h3>
                  {event.description && (
                    <p className="mt-1 text-sm text-[var(--gs-text-muted)]">{event.description}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
