import { cn } from "@premier-js/core"

export interface TagCloudItem {
  label: string
  count: number
  href?: string
}

export interface TagCloudProps {
  tags: TagCloudItem[]
  title?: string
  bgColor?: string
  titleColor?: string
  tagBgColor?: string
  tagTextColor?: string
  tagHoverBgColor?: string
}

export function TagCloud({
  tags,
  title = "Tags",
  bgColor = "bg-white",
  titleColor = "text-gray-900",
  tagBgColor = "bg-gray-100",
  tagTextColor = "text-gray-600",
  tagHoverBgColor = "hover:bg-gray-200",
}: TagCloudProps) {
  const maxCount = Math.max(...tags.map((t) => t.count), 1)

  return (
    <div className={cn("p-4 rounded-xl", bgColor)}>
      {title && (
        <h4 className={cn("text-sm font-semibold mb-3", titleColor)}>{title}</h4>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const weight = tag.count / maxCount
          const size = weight > 0.8 ? "text-sm" : weight > 0.5 ? "text-xs" : "text-[11px]"
          return (
            <a
              key={tag.label}
              href={tag.href ?? "#"}
              className={cn(
                "inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-medium transition-colors",
                size, tagBgColor, tagTextColor, tagHoverBgColor,
              )}
            >
              {tag.label}
              <span className="opacity-50">({tag.count})</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
