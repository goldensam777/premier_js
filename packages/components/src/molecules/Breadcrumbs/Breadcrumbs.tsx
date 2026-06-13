import { cn } from "@premier-js/core"

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  separator?: string
  textColor?: string
  linkColor?: string
  activeColor?: string
  separatorColor?: string
  className?: string
}

export function Breadcrumbs({
  items,
  separator = "/",
  textColor = "text-gray-500",
  linkColor = "text-blue-600",
  activeColor = "text-gray-900",
  separatorColor = "text-gray-300",
  className,
}: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb" className={cn("flex items-center gap-1.5 text-sm", className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className={cn("select-none", separatorColor)}>{separator}</span>}
            {item.href && !isLast ? (
              <a href={item.href} className={cn("hover:underline", linkColor)}>
                {item.label}
              </a>
            ) : (
              <span className={cn(isLast ? activeColor : textColor)}>
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
