"use client"

import { Canvas } from "@react-three/fiber"
import { cn } from "@premier-js/core"

interface Canvas3DProps {
  children:  React.ReactNode
  className?: string
  camera?:   { position?: [number, number, number]; fov?: number }
  shadows?:  boolean
}

export function Canvas3D({
  children,
  className,
  camera = { position: [0, 0, 5], fov: 75 },
  shadows = false
}: Canvas3DProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <Canvas
        camera={camera}
        shadows={shadows}
        gl={{ antialias: true, alpha: true }}
      >
        {children}
      </Canvas>
    </div>
  )
}
