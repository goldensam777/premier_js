import { cn } from "@premier-js/core"

export interface PostCardProps {
  title: string
  excerpt: string
  href: string
  date?: string
  authorName?: string
  authorAvatar?: string
  coverImage?: string
  tags?: string[]
  bgColor?: string
  titleColor?: string
  textColor?: string
  hoverBgColor?: string
}

export function PostCard({
  title,
  excerpt,
  href,
  date,
  authorName,
  authorAvatar,
  coverImage,
  tags,
  bgColor = "bg-white",
  titleColor = "text-gray-900",
  textColor = "text-gray-500",
  hoverBgColor = "hover:bg-gray-50",
}: PostCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "block rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-200",
        bgColor,
        hoverBgColor,
        "hover:shadow-md",
      )}
    >
      {coverImage && (
        <div className="aspect-video overflow-hidden">
          <img src={coverImage} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
      )}
      <div className="p-5">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className={cn("text-lg font-semibold leading-snug", titleColor)}>{title}</h3>
        <p className={cn("mt-2 text-sm leading-relaxed line-clamp-3", textColor)}>{excerpt}</p>
        {(date || authorName) && (
          <div className="mt-4 flex items-center gap-3 text-xs" style={{ color: textColor }}>
            {authorAvatar && (
              <img src={authorAvatar} alt={authorName ?? ""} className="w-6 h-6 rounded-full object-cover" />
            )}
            {authorName && <span>{authorName}</span>}
            {date && <span>{date}</span>}
          </div>
        )}
      </div>
    </a>
  )
}
