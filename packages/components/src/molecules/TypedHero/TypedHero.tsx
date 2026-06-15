"use client"

import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { cn } from "@premier-js/core"

export interface TypedHeroProps {
  title: string
  words: string[]
  subtitle?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  bgColor?: string
  titleColor?: string
  accentColor?: string
  subtitleColor?: string
}

export function TypedHero({
  title,
  words,
  subtitle,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
  bgColor = "var(--gs-bg-subtle)",
  titleColor = "var(--gs-text)",
  accentColor = "text-blue-600",
  subtitleColor = "text-gray-500",
}: TypedHeroProps) {
  const el = useRef<HTMLSpanElement>(null)
  const typedRef = useRef<Typed | null>(null)

  useEffect(() => {
    if (!el.current) return

    typedRef.current = new Typed(el.current, {
      strings: words,
      typeSpeed: typingSpeed,
      backSpeed: deletingSpeed,
      backDelay: pauseDuration,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true
    })

    return () => {
      typedRef.current?.destroy()
    }
  }, [words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight" style={{ color: titleColor }}>
          {title}{" "}
          <span 
            ref={el} 
            className={cn("inline-block", accentColor)}
          />
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: subtitleColor }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
