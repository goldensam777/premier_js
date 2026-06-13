"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

interface FloatingObjectProps {
  children:   React.ReactNode
  speed?:     number   // vitesse de rotation
  amplitude?: number   // amplitude du flottement
}

export function FloatingObject({
  children,
  speed     = 0.5,
  amplitude = 0.3
}: FloatingObjectProps) {
  const ref = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.position.y  = Math.sin(t * speed) * amplitude
    ref.current.rotation.y += 0.005
    ref.current.rotation.x  = Math.sin(t * speed * 0.5) * 0.1
  })

  return <mesh ref={ref}>{children}</mesh>
}
