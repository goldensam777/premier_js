import { cn } from "@premier-js/core"

export interface TeamMember {
  name: string
  role: string
  bio?: string
  avatarSrc?: string
}

export interface TeamProps {
  title?: string
  subtitle?: string
  members: TeamMember[]
  columns?: 2 | 3 | 4
  bgColor?: string
  titleColor?: string
  subtitleColor?: string
  cardBgColor?: string
  cardBorderColor?: string
  nameColor?: string
  roleColor?: string
  bioColor?: string
  avatarBgColor?: string
  avatarTextColor?: string
}

export function Team({
  title,
  subtitle,
  members,
  columns = 3,
  bgColor = "bg-gray-50",
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-500",
  cardBgColor = "bg-white",
  cardBorderColor = "border-gray-200",
  nameColor = "text-gray-900",
  roleColor = "text-blue-600",
  bioColor = "text-gray-500",
  avatarBgColor = "bg-blue-100",
  avatarTextColor = "text-blue-700",
}: TeamProps) {
  const colStyles = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section className={cn(bgColor, "py-20 px-6")}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {title && <h2 className={cn("text-3xl md:text-4xl font-bold", titleColor)}>{title}</h2>}
            {subtitle && <p className={cn("mt-4 text-lg max-w-2xl mx-auto", subtitleColor)}>{subtitle}</p>}
          </div>
        )}

        <div className={cn("grid gap-6", colStyles[columns])}>
          {members.map((member, i) => (
            <div
              key={i}
              className={cn(
                "rounded-xl p-6 shadow-sm border flex flex-col items-center text-center",
                cardBgColor, cardBorderColor,
              )}
            >
              <div
                className={cn(
                  "inline-flex items-center justify-center rounded-full overflow-hidden",
                  "w-20 h-20 text-2xl font-semibold",
                  avatarBgColor, avatarTextColor,
                )}
              >
                {member.avatarSrc
                  ? <img src={member.avatarSrc} alt={member.name} className="w-full h-full object-cover" />
                  : member.name.slice(0, 2).toUpperCase()
                }
              </div>
              <h3 className={cn("mt-4 font-semibold text-base", nameColor)}>{member.name}</h3>
              <p className={cn("text-sm font-medium", roleColor)}>{member.role}</p>
              {member.bio && (
                <p className={cn("mt-2 text-sm leading-relaxed", bioColor)}>{member.bio}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
