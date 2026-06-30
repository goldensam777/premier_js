"use client"

import { useActionState, useRef } from "react"
import { useFormStatus } from "react-dom"
import { cn } from "@premier-js/core"

export interface ContactFormProps {
  title?: string
  subtitle?: string
  namePlaceholder?: string
  emailPlaceholder?: string
  messagePlaceholder?: string
  ctaLabel?: string
  onSubmit?: (data: { name: string; email: string; message: string }) => void | Promise<void>
  bgColor?: string
  titleColor?: string
  subtitleColor?: string
}

interface FormState {
  success: boolean | null
  error: string | null
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "px-6 py-2 rounded-lg transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium text-sm",
      )}
    >
      {pending ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Envoi en cours...
        </>
      ) : (
        label
      )}
    </button>
  )
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
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction] = useActionState(
    async (prevState: FormState, formData: FormData): Promise<FormState> => {
      const name = formData.get("name") as string
      const email = formData.get("email") as string
      const message = formData.get("message") as string

      try {
        if (onSubmit) {
          await onSubmit({ name, email, message })
        }
        formRef.current?.reset()
        return { success: true, error: null }
      } catch (err: any) {
        return { success: false, error: err?.message || "Une erreur est survenue lors de l'envoi." }
      }
    },
    { success: null, error: null }
  )

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

        <form ref={formRef} action={formAction} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Nom</label>
            <input
              name="name"
              required
              placeholder={namePlaceholder}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder={emailPlaceholder}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              required
              placeholder={messagePlaceholder}
              rows={5}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-y transition-all duration-200"
            />
          </div>

          {state.success && (
            <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
              Votre message a été envoyé avec succès !
            </div>
          )}

          {state.error && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {state.error}
            </div>
          )}

          <SubmitButton label={ctaLabel} />
        </form>
      </div>
    </section>
  )
}
