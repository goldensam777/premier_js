import { cn } from "@premier-js/core"

export interface ProductCardProps {
  name: string
  price: number
  currency?: string
  image?: string
  href?: string
  description?: string
  rating?: number
  badge?: string
  onAddToCart?: () => void
  bgColor?: string
  titleColor?: string
  textColor?: string
  accentColor?: string
  badgeColor?: string
  buttonColor?: string
}

export function ProductCard({
  name,
  price,
  currency = "€",
  image,
  href,
  description,
  rating,
  badge,
  onAddToCart,
  bgColor = "bg-white",
  titleColor = "text-gray-900",
  textColor = "text-gray-500",
  accentColor = "text-yellow-400",
  badgeColor = "bg-red-500",
  buttonColor = "bg-blue-600",
}: ProductCardProps) {
  const Wrapper = href ? "a" : "div"
  const wrapperProps = href ? { href } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={cn("block rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-shadow hover:shadow-md", bgColor)}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {image && (
          <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        )}
        {badge && (
          <span className={cn("absolute top-3 left-3 text-xs font-semibold text-white px-2 py-0.5 rounded-full", badgeColor)}>
            {badge}
          </span>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h3 className={cn("font-semibold", titleColor)}>{name}</h3>
        {description && <p className={cn("text-sm line-clamp-2", textColor)}>{description}</p>}
        {rating !== undefined && (
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className={cn("w-3.5 h-3.5", i < rating ? accentColor : "text-gray-200")} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between pt-2">
          <span className={cn("text-lg font-bold", titleColor)}>
            {currency}{price.toFixed(2)}
          </span>
          {onAddToCart && (
            <button
              onClick={(e) => { e.preventDefault(); onAddToCart() }}
              className={cn("text-xs font-medium text-white px-3 py-1.5 rounded-lg transition-opacity hover:opacity-90", buttonColor)}
            >
              Ajouter
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
