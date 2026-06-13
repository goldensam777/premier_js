import { cn } from "@premier-js/core"

export interface HowItWorksStep {
  step: number
  title: string
  description: string
  icon?: string
}

export interface HowItWorksProps {
  steps: HowItWorksStep[]
  title?: string
  subtitle?: string
  variant?: "numbered" | "timeline"
  bgColor?: string
  titleColor?: string
  subtitleColor?: string
  stepColor?: string
  lineColor?: string
}

export function HowItWorks({
  steps,
  title,
  subtitle,
  variant = "numbered",
  bgColor = "bg-white",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-500",
  stepColor = "bg-blue-600",
  lineColor = "bg-gray-200",
}: HowItWorksProps) {
  return (
    <section className={cn("py-20 px-6", bgColor)}>
      <div className="max-w-4xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && <h2 className={cn("text-3xl md:text-4xl font-bold", titleColor)}>{title}</h2>}
            {subtitle && <p className={cn("mt-4 text-lg max-w-2xl mx-auto", subtitleColor)}>{subtitle}</p>}
          </div>
        )}

        {variant === "numbered" ? (
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg",
                    stepColor,
                  )}
                >
                  {s.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{s.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0",
                      stepColor,
                    )}
                  >
                    {s.icon ?? s.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={cn("w-0.5 flex-1 mt-1", lineColor)} />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
