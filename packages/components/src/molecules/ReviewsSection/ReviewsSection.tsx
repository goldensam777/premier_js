import { cn } from "@premier-js/core"

export interface Review {
  name: string
  role?: string
  avatarSrc?: string
  content: string
  rating?: number
}

export interface ReviewsSectionProps {
  reviews: Review[]
  title?: string
  subtitle?: string
  columns?: 2 | 3
  bgColor?: string
  cardBgColor?: string
  titleColor?: string
  starColor?: string
}

export function ReviewsSection({
  reviews,
  title = "Avis clients",
  subtitle,
  columns = 3,
  bgColor = "bg-white",
  cardBgColor = "bg-gray-50",
  titleColor = "text-gray-900",
  starColor = "text-yellow-400",
}: ReviewsSectionProps) {
  return (
    <section className={cn("py-20 px-6", bgColor)}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className={cn("text-3xl md:text-4xl font-bold", titleColor)}>{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-gray-500">{subtitle}</p>}
        </div>

        <div className={cn(
          "grid gap-6",
          columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3",
        )}>
          {reviews.map((review, i) => (
            <div key={i} className={cn("rounded-xl p-6", cardBgColor)}>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating ?? 5 }).map((_, j) => (
                  <svg key={j} className={cn("w-4 h-4", starColor)} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-600 mb-4">&ldquo;{review.content}&rdquo;</p>
              <div className="flex items-center gap-3">
                {review.avatarSrc ? (
                  <img src={review.avatarSrc} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                    {review.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  {review.role && <p className="text-xs text-gray-500">{review.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
