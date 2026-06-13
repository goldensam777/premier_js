import { cn } from "@premier-js/core"
import { ProductCard } from "../ProductCard"
import type { ProductCardProps } from "../ProductCard"

export interface ProductGridProps {
  products: ProductCardProps[]
  columns?: 2 | 3 | 4
  title?: string
  subtitle?: string
  bgColor?: string
  titleColor?: string
}

export function ProductGrid({
  products,
  columns = 3,
  title,
  subtitle,
  bgColor = "bg-white",
  titleColor = "text-gray-900",
}: ProductGridProps) {
  const colStyles = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section className={cn("py-20 px-6", bgColor)}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && <h2 className={cn("text-3xl font-bold", titleColor)}>{title}</h2>}
            {subtitle && <p className="mt-3 text-gray-500">{subtitle}</p>}
          </div>
        )}
        <div className={cn("grid gap-6", colStyles[columns])}>
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
