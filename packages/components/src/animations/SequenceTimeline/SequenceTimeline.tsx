"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@premier-js/core"

gsap.registerPlugin(ScrollTrigger)

interface SequenceStep {
  target: string       // sélecteur CSS ex: ".hero-title"
  from:   gsap.TweenVars
  to:     gsap.TweenVars
  at?:    string       // position dans la timeline ex: "<", "+=0.2"
}

interface SequenceTimelineProps {
  steps:      SequenceStep[]
  className?: string
  scrollTrigger?: boolean   // déclenche au scroll ou immédiatement
}

export function SequenceTimeline({
  steps,
  className,
  scrollTrigger = true
}: SequenceTimelineProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const tl = gsap.timeline(
      scrollTrigger
        ? {
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        : {}
    )

    steps?.forEach(({ target, from, to, at }) => {
      tl.fromTo(target, from, to, at)
    })

    return () => { tl.kill() }
  }, [steps, scrollTrigger])

  return (
    <div ref={ref} className={cn(className)}>
    </div>
  )
}
