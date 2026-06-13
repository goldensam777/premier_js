import { cn } from "@premier-js/core"

export interface MessageBubbleProps {
  content: string
  role: "user" | "assistant"
  timestamp?: string
  avatarSrc?: string
  userName?: string
  userBgColor?: string
  assistantBgColor?: string
  userTextColor?: string
  assistantTextColor?: string
}

export function MessageBubble({
  content,
  role,
  timestamp,
  avatarSrc,
  userName,
  userBgColor = "bg-blue-600",
  assistantBgColor = "bg-gray-100",
  userTextColor = "text-white",
  assistantTextColor = "text-gray-800",
}: MessageBubbleProps) {
  const isUser = role === "user"

  return (
    <div className={cn("flex items-start gap-3 max-w-[80%]", isUser ? "ml-auto flex-row-reverse" : "")}>
      {avatarSrc ? (
        <img src={avatarSrc} alt={userName ?? ""} className="w-8 h-8 rounded-full object-cover shrink-0 mt-1" />
      ) : (
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 mt-1",
            isUser ? "bg-blue-100 text-blue-700" : "bg-gray-200 text-gray-600",
          )}
        >
          {isUser ? "U" : "A"}
        </div>
      )}
      <div>
        {userName && !isUser && (
          <p className="text-xs font-medium text-gray-500 mb-1">{userName}</p>
        )}
        <div
          className={cn(
            "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
            isUser ? cn(userBgColor, userTextColor, "rounded-br-md") : cn(assistantBgColor, assistantTextColor, "rounded-bl-md"),
          )}
        >
          {content}
        </div>
        {timestamp && (
          <p className={cn("text-[11px] mt-1", isUser ? "text-right" : "", "text-gray-400")}>
            {timestamp}
          </p>
        )}
      </div>
    </div>
  )
}
