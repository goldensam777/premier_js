import { cn } from "@premier-js/core"

export interface Conversation {
  id: string
  name: string
  lastMessage: string
  timestamp: string
  unread?: number
  avatarSrc?: string
}

export interface ConversationListProps {
  conversations: Conversation[]
  activeId?: string
  onSelect: (id: string) => void
  title?: string
  bgColor?: string
  activeBgColor?: string
  hoverBgColor?: string
  textColor?: string
  activeTextColor?: string
  borderColor?: string
}

export function ConversationList({
  conversations,
  activeId,
  onSelect,
  title = "Conversations",
  bgColor = "bg-white",
  activeBgColor = "bg-blue-50",
  hoverBgColor = "hover:bg-gray-50",
  textColor = "text-gray-700",
  activeTextColor = "text-blue-700",
  borderColor = "border-gray-100",
}: ConversationListProps) {
  return (
    <div className={cn("rounded-xl border overflow-hidden", borderColor, bgColor)}>
      {title && (
        <div className={cn("px-4 py-3 border-b text-sm font-semibold", borderColor, textColor)}>
          {title}
        </div>
      )}
      <div className="divide-y" style={{ borderColor }}>
        {conversations.map((conv) => {
          const isActive = conv.id === activeId
          return (
            <button
              key={conv.id}
              onClick={() => onSelect(conv.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                isActive ? cn(activeBgColor, activeTextColor) : cn(textColor, hoverBgColor),
              )}
            >
              {conv.avatarSrc ? (
                <img src={conv.avatarSrc} alt={conv.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm shrink-0">
                  {conv.name.charAt(0)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium truncate">{conv.name}</span>
                  <span className="text-[11px] text-gray-400 shrink-0">{conv.timestamp}</span>
                </div>
                <p className="text-xs truncate mt-0.5 opacity-70">{conv.lastMessage}</p>
              </div>
              {conv.unread !== undefined && conv.unread > 0 && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                  {conv.unread}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
