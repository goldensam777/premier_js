"use client"

import { useEffect } from "react"
import Lenis from "lenis"

interface SmoothScrollProps {
  children: React.ReactNode
  duration?: number   // inertie du scroll, défaut 1.2
  easing?: (t: number) => number
}

export function SmoothScroll({
  children,
  duration = 1.2,
  easing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
}: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({ duration, easing })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [duration, easing])

  return <>{children}</>
}
