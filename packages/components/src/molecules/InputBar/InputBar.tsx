"use client"

import { useState } from "react"
import { cn } from "@premier-js/core"

export interface InputBarProps {
  onSend: (message: string) => void
  placeholder?: string
  sendLabel?: string
  disabled?: boolean
  bgColor?: string
  borderColor?: string
  inputBgColor?: string
  accentColor?: string
}

export function InputBar({
  onSend,
  placeholder = "Écrivez un message…",
  sendLabel = "Envoyer",
  disabled = false,
  bgColor = "bg-white",
  borderColor = "border-gray-200",
  inputBgColor = "bg-gray-50",
  accentColor = "text-blue-600",
}: InputBarProps) {
  const [value, setValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value.trim() || disabled) return
    onSend(value.trim())
    setValue("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex items-center gap-2 border-t p-4", borderColor, bgColor)}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
          inputBgColor, "text-gray-800 placeholder-gray-400",
        )}
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className={cn(
          "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
          value.trim() && !disabled
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-400 cursor-not-allowed",
        )}
      >
        {sendLabel}
      </button>
    </form>
  )
}
