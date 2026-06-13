import { cn } from "@premier-js/core"

export interface SocialProofBarProps {
  text?: string
  count?: number
  avatars?: string[]
  bgColor?: string
  textColor?: string
  highlightColor?: string
}

export function SocialProofBar({
  text = "Rejoint par",
  count = 10000,
  avatars,
  bgColor = "bg-gray-50",
  textColor = "text-gray-600",
  highlightColor = "text-blue-600",
}: SocialProofBarProps) {
  return (
    <div className={cn("py-4 px-6", bgColor)}>
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-4 flex-wrap">
        {avatars && avatars.length > 0 && (
          <div className="flex -space-x-2">
            {avatars.slice(0, 5).map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
        )}
        <p className={cn("text-sm", textColor)}>
          {text}{" "}
          <span className={cn("font-semibold", highlightColor)}>
            {count.toLocaleString()}+
          </span>{" "}
          développeurs
        </p>
      </div>
    </div>
  )
}
