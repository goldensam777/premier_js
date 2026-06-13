"use client"

import { motion } from "framer-motion"
import { cn } from "@premier-js/core"

interface HoverScaleProps {
  children: React.ReactNode
  className?: string
  scale?: number
  duration?: number
}

export function HoverScale({
  children,
  className,
  scale = 1.05,
  duration = 0.2
}: HoverScaleProps) {
  return (
    <motion.div
      className={cn("inline-block cursor-pointer", className)}
      whileHover={{ scale }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
