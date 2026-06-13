"use client"

import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { cn } from "@premier-js/core"

interface TypedHeroProps {
  strings: string[]     // ["Chercheur", "Développeur", "Builder"]
  className?: string
  typeSpeed?: number
  backSpeed?: number
  loop?: boolean
}

export function TypedHero({
  strings,
  className,
  typeSpeed = 60,
  backSpeed = 30,
  loop = true
}: TypedHeroProps) {
  const el = useRef<HTMLSpanElement>(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (!el.current) return

    typed.current = new Typed(el.current, {
      strings,
      typeSpeed,
      backSpeed,
      loop,
      backDelay: 1200,
      startDelay: 300,
    })

    return () => typed.current?.destroy()
  }, [])

  return (
    <span
      ref={el}
      className={cn("inline-block", className)}
    />
  )
}
