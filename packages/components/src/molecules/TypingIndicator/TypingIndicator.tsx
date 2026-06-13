import { cn } from "@premier-js/core"

export interface TypingIndicatorProps {
  avatarSrc?: string
  userName?: string
  dotColor?: string
  bgColor?: string
  textColor?: string
}

export function TypingIndicator({
  avatarSrc,
  userName,
  dotColor = "bg-gray-400",
  bgColor = "bg-gray-100",
  textColor = "text-gray-400",
}: TypingIndicatorProps) {
  return (
    <div className="flex items-start gap-3">
      {avatarSrc ? (
        <img src={avatarSrc} alt={userName ?? ""} className="w-8 h-8 rounded-full object-cover shrink-0" />
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-semibold shrink-0">
          {userName?.charAt(0) ?? "?"}
        </div>
      )}
      <div className={cn("rounded-2xl px-4 py-3", bgColor)}>
        <div className="flex gap-1">
          <span className={cn("w-2 h-2 rounded-full animate-bounce", dotColor)} style={{ animationDelay: "0ms" }} />
          <span className={cn("w-2 h-2 rounded-full animate-bounce", dotColor)} style={{ animationDelay: "200ms" }} />
          <span className={cn("w-2 h-2 rounded-full animate-bounce", dotColor)} style={{ animationDelay: "400ms" }} />
        </div>
        {userName && <span className={cn("text-[11px] mt-1 block", textColor)}>{userName} écrit…</span>}
      </div>
    </div>
  )
}
