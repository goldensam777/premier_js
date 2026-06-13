"use client"

import { useState } from "react"
import { cn } from "@premier-js/core"

export interface NewsletterProps {
  title?: string
  description?: string
  placeholder?: string
  buttonLabel?: string
  onSubmit?: (email: string) => void
  bgColor?: string
  titleColor?: string
  inputBgColor?: string
  buttonColor?: string
  successMessage?: string
}

export function Newsletter({
  title = "Restez informé",
  description = "Recevez les dernières actualités directement par email.",
  placeholder = "votre@email.com",
  buttonLabel = "S'abonner",
  onSubmit,
  bgColor = "bg-gray-50",
  titleColor = "text-gray-900",
  inputBgColor = "bg-white",
  buttonColor = "bg-blue-600",
  successMessage = "Merci de votre inscription !",
}: NewsletterProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    onSubmit?.(email)
    setSubmitted(true)
  }

  return (
    <section className={cn("py-20 px-6", bgColor)}>
      <div className="max-w-xl mx-auto text-center">
        <h2 className={cn("text-3xl font-bold", titleColor)}>{title}</h2>
        <p className="mt-4 text-gray-500">{description}</p>

        {submitted ? (
          <p className="mt-8 text-green-600 font-medium">{successMessage}</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              className={cn(
                "flex-1 px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                inputBgColor,
              )}
            />
            <button
              type="submit"
              className={cn(
                "px-6 py-2.5 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity",
                buttonColor,
              )}
            >
              {buttonLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
