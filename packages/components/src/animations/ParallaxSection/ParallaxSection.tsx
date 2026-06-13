"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@premier-js/core"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number   // 0.1 = lent, 0.5 = rapide
}

export function ParallaxSection({
  children,
  className,
  speed = 0.2
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * -100}px`, `${speed * 100}px`]
  )

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
