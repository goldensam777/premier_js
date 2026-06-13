import { cn } from "@premier-js/core"

export interface LogoCloudItem {
  src: string
  alt: string
  href?: string
}

export interface LogoCloudProps {
  items: LogoCloudItem[]
  title?: string
  bgColor?: string
  titleColor?: string
  opacity?: number
  columns?: number
}

export function LogoCloud({
  items,
  title = "Ils nous font confiance",
  bgColor = "bg-gray-50",
  titleColor = "text-gray-400",
  opacity = 0.6,
  columns = 4,
}: LogoCloudProps) {
  return (
    <section className={cn("py-12 px-6", bgColor)}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <p className={cn("text-center text-sm font-semibold uppercase tracking-wider mb-8", titleColor)}>
            {title}
          </p>
        )}
        <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-8 items-center", columns > 4 ? `lg:grid-cols-${columns}` : "")}>
          {items.map((item, i) => (
            <div key={i} className="flex justify-center">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-8 object-contain transition-all duration-200 hover:opacity-100"
                    style={{ opacity }}
                  />
                </a>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-8 object-contain"
                  style={{ opacity }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
