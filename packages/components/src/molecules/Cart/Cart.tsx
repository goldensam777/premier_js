"use client"

import { cn } from "@premier-js/core"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

export interface CartProps {
  items: CartItem[]
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemove: (id: string) => void
  currency?: string
  title?: string
  emptyMessage?: string
  checkoutLabel?: string
  onCheckout?: () => void
  bgColor?: string
  textColor?: string
  accentColor?: string
  borderColor?: string
}

export function Cart({
  items,
  onUpdateQuantity,
  onRemove,
  currency = "€",
  title = "Panier",
  emptyMessage = "Votre panier est vide",
  checkoutLabel = "Commander",
  onCheckout,
  bgColor = "bg-white",
  textColor = "text-gray-700",
  accentColor = "text-blue-600",
  borderColor = "border-gray-200",
}: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className={cn("rounded-xl border p-8 text-center", borderColor, bgColor)}>
        <p className={cn("text-sm", textColor)}>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className={cn("rounded-xl border", borderColor, bgColor)}>
      {title && (
        <div className={cn("px-4 py-3 border-b font-semibold text-sm", borderColor, textColor)}>
          {title} ({items.length})
        </div>
      )}
      <div className="divide-y" style={{ borderColor }}>
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4">
            {item.image && (
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <p className={cn("text-sm font-medium", textColor)}>{item.name}</p>
              <p className={cn("text-sm font-semibold mt-0.5", textColor)}>
                {currency}{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                className={cn("w-7 h-7 rounded border text-sm", borderColor, textColor)}
              >
                −
              </button>
              <span className={cn("w-6 text-center text-sm font-medium", textColor)}>
                {item.quantity}
              </span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className={cn("w-7 h-7 rounded border text-sm", borderColor, textColor)}
              >
                +
              </button>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className={cn("text-xs hover:underline", accentColor)}
            >
              Retirer
            </button>
          </div>
        ))}
      </div>
      <div className={cn("px-4 py-3 border-t flex items-center justify-between", borderColor)}>
        <span className={cn("text-sm font-semibold", textColor)}>Total</span>
        <span className={cn("text-lg font-bold", textColor)}>
          {currency}{total.toFixed(2)}
        </span>
      </div>
      {onCheckout && (
        <div className="px-4 pb-4">
          <button
            onClick={onCheckout}
            className="w-full py-2.5 rounded-lg text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            {checkoutLabel}
          </button>
        </div>
      )}
    </div>
  )
}
