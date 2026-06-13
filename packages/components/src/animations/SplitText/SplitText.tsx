"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@premier-js/core"

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number  // délai entre chaque mot
}

export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.08
}: SplitTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(" ")

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * stagger,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
