"use client"

import { useState, useEffect } from "react"
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
  bgColor = "var(--color-background)",
  titleColor = "var(--color-text)",
  accentColor = "text-blue-600",
  subtitleColor = "text-gray-500",
}: TypedHeroProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [display, setDisplay] = useState("")

  useEffect(() => {
    const currentWord = words[wordIndex] ?? ""

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(currentWord.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
          if (charIndex + 1 === currentWord.length) {
            setTimeout(() => setDeleting(true), pauseDuration)
          }
        } else {
          setDisplay(currentWord.slice(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)
          if (charIndex - 1 === 0) {
            setDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      deleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight" style={{ color: titleColor }}>
          {title}{" "}
          <span className={cn("inline-block", accentColor)}>
            {display}
            <span className="animate-pulse">|</span>
          </span>
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
