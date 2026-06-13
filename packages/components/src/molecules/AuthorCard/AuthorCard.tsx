import { cn } from "@premier-js/core"

export interface AuthorCardProps {
  name: string
  role?: string
  bio?: string
  avatarSrc?: string
  href?: string
  bgColor?: string
  nameColor?: string
  textColor?: string
  avatarBgColor?: string
  avatarTextColor?: string
}

export function AuthorCard({
  name,
  role,
  bio,
  avatarSrc,
  href,
  bgColor = "bg-gray-50",
  nameColor = "text-gray-900",
  textColor = "text-gray-500",
  avatarBgColor = "bg-blue-100",
  avatarTextColor = "text-blue-700",
}: AuthorCardProps) {
  const content = (
    <div className={cn("flex items-center gap-4 p-4 rounded-xl", bgColor)}>
      {avatarSrc ? (
        <img src={avatarSrc} alt={name} className="w-12 h-12 rounded-full object-cover shrink-0" />
      ) : (
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold shrink-0", avatarBgColor, avatarTextColor)}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      )}
      <div className="min-w-0">
        <p className={cn("text-sm font-semibold", nameColor)}>{name}</p>
        {role && <p className={cn("text-xs", textColor)}>{role}</p>}
        {bio && <p className={cn("mt-1 text-xs leading-relaxed line-clamp-2", textColor)}>{bio}</p>}
      </div>
    </div>
  )

  if (href) {
    return <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a>
  }

  return content
}
