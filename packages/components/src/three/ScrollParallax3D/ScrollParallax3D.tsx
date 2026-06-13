"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"
import type { Group } from "three"

interface ScrollParallax3DProps {
  children: React.ReactNode
  factor?:  number   // intensité du parallax
}

export function ScrollParallax3D({
  children,
  factor = 1
}: ScrollParallax3DProps) {
  const ref    = useRef<Group>(null)
  const scroll = useScroll()

  useFrame(() => {
    if (!ref.current) return
    ref.current.position.y = scroll.offset * factor * -5
    ref.current.rotation.x = scroll.offset * factor * 0.3
  })

  return <group ref={ref}>{children}</group>
}
