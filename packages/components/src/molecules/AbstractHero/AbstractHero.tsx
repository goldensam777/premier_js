import { cn } from "@premier-js/core"

export interface AbstractHeroProps {
  title: string
  subtitle?: string
  gradient?: string
  pattern?: "dots" | "grid" | "waves" | "none"
  patternColor?: string
  minHeight?: string
  titleColor?: string
  subtitleColor?: string
}

export function AbstractHero({
  title,
  subtitle,
  gradient = "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500",
  pattern = "dots",
  patternColor = "rgba(255,255,255,0.1)",
  minHeight = "60vh",
  titleColor = "text-white",
  subtitleColor = "text-white/80",
}: AbstractHeroProps) {
  const patternStyles: Record<string, React.CSSProperties> = {
    dots: {
      backgroundImage: `radial-gradient(${patternColor} 1px, transparent 1px)`,
      backgroundSize: "24px 24px",
    },
    grid: {
      backgroundImage: `linear-gradient(${patternColor} 1px, transparent 1px), linear-gradient(90deg, ${patternColor} 1px, transparent 1px)`,
      backgroundSize: "40px 40px",
    },
    waves: {
      background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='${encodeURIComponent(patternColor)}' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'/%3E%3C/svg%3E") bottom/cover no-repeat`,
    },
    none: {},
  }

  return (
    <section
      className={cn("relative flex items-center justify-center overflow-hidden px-6", gradient)}
      style={{ minHeight }}
    >
      <div className="absolute inset-0" style={patternStyles[pattern] ?? patternStyles.dots} />
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6 py-20">
        <h1 className={cn("text-4xl md:text-6xl font-bold leading-tight tracking-tight", titleColor)}>
          {title}
        </h1>
        {subtitle && (
          <p className={cn("text-lg md:text-xl max-w-2xl mx-auto", subtitleColor)}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
