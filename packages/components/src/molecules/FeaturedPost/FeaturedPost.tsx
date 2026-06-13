import { cn } from "@premier-js/core"

export interface FeaturedPostProps {
  title: string
  excerpt: string
  href: string
  date?: string
  authorName?: string
  authorRole?: string
  authorAvatar?: string
  coverImage?: string
  tags?: string[]
  bgColor?: string
  titleColor?: string
  textColor?: string
  overlayColor?: string
}

export function FeaturedPost({
  title,
  excerpt,
  href,
  date,
  authorName,
  authorRole,
  authorAvatar,
  coverImage,
  tags,
  bgColor = "bg-gray-900",
  titleColor = "text-white",
  textColor = "text-gray-300",
  overlayColor = "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
}: FeaturedPostProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative block rounded-2xl overflow-hidden min-h-[400px]",
        bgColor,
      )}
    >
      {coverImage && (
        <img
          src={coverImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className={cn("absolute inset-0", overlayColor)} />
      <div className="relative z-10 p-8 flex flex-col justify-end h-full min-h-[400px]">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-medium text-white bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
        <h2 className={cn("text-2xl md:text-4xl font-bold leading-tight", titleColor)}>
          {title}
        </h2>
        <p className={cn("mt-3 text-sm md:text-base max-w-2xl leading-relaxed", textColor)}>
          {excerpt}
        </p>
        {(date || authorName) && (
          <div className="mt-6 flex items-center gap-4">
            {authorAvatar && (
              <img src={authorAvatar} alt={authorName ?? ""} className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
            )}
            <div>
              {authorName && <p className="text-sm font-medium text-white">{authorName}</p>}
              {authorRole && <p className="text-xs" style={{ color: textColor }}>{authorRole}</p>}
            </div>
            {date && <span className={cn("text-xs ml-auto", textColor)}>{date}</span>}
          </div>
        )}
      </div>
    </a>
  )
}
