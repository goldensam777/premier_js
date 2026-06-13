"use client"

import { useState } from "react"
import { cn } from "@premier-js/core"

export interface ContactFormProps {
  title?: string
  subtitle?: string
  namePlaceholder?: string
  emailPlaceholder?: string
  messagePlaceholder?: string
  ctaLabel?: string
  onSubmit?: (data: { name: string; email: string; message: string }) => void
  bgColor?: string
  titleColor?: string
  subtitleColor?: string
}

export function ContactForm({
  title,
  subtitle,
  namePlaceholder = "Votre nom",
  emailPlaceholder = "Votre email",
  messagePlaceholder = "Votre message...",
  ctaLabel = "Envoyer",
  onSubmit,
  bgColor = "var(--color-background)",
  titleColor = "var(--color-text)",
  subtitleColor = "var(--color-text-muted)",
}: ContactFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ name, email, message })
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: titleColor }}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg" style={{ color: subtitleColor }}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Nom</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={namePlaceholder}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={emailPlaceholder}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={messagePlaceholder}
              rows={5}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-y transition-all duration-200"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 w-full justify-center"
          >
            {ctaLabel}
          </button>
        </form>
      </div>
    </section>
  )
}
