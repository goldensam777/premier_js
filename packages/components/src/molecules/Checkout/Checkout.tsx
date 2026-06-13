"use client"

import { useState } from "react"
import { cn } from "@premier-js/core"

export interface CheckoutField {
  name: string
  label: string
  type: string
  required?: boolean
  placeholder?: string
}

export interface CheckoutProps {
  fields?: CheckoutField[]
  onSubmit?: (data: Record<string, string>) => void
  title?: string
  submitLabel?: string
  bgColor?: string
  textColor?: string
  inputBgColor?: string
  borderColor?: string
  accentColor?: string
}

const defaultFields: CheckoutField[] = [
  { name: "name", label: "Nom complet", type: "text", required: true, placeholder: "Jean Dupont" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "jean@exemple.com" },
  { name: "address", label: "Adresse", type: "text", required: true, placeholder: "123 rue de la Paix" },
  { name: "city", label: "Ville", type: "text", required: true, placeholder: "Paris" },
  { name: "zip", label: "Code postal", type: "text", required: true, placeholder: "75001" },
  { name: "card", label: "Numéro de carte", type: "text", required: true, placeholder: "4242 4242 4242 4242" },
]

export function Checkout({
  fields = defaultFields,
  onSubmit,
  title = "Paiement",
  submitLabel = "Payer",
  bgColor = "bg-white",
  textColor = "text-gray-700",
  inputBgColor = "bg-white",
  borderColor = "border-gray-200",
  accentColor = "text-blue-600",
}: CheckoutProps) {
  const [form, setForm] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(form)
  }

  return (
    <div className={cn("rounded-xl border p-6", borderColor, bgColor)}>
      <h3 className={cn("text-lg font-semibold mb-6", textColor)}>{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label className={cn("block text-sm font-medium mb-1", textColor)}>
              {field.label}
              {field.required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
            <input
              type={field.type}
              value={form[field.name] ?? ""}
              onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
              placeholder={field.placeholder}
              required={field.required}
              className={cn(
                "w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                inputBgColor, borderColor, textColor,
              )}
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-2.5 rounded-lg text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          {submitLabel}
        </button>
      </form>
    </div>
  )
}
