"use client"

import { cn } from "@premier-js/core"
import { Canvas3D } from "../Canvas3D/Canvas3D"

interface BackgroundSceneProps {
  children:   React.ReactNode   // meshes R3F
  className?: string
  overlay?:   boolean           // fond semi-transparent sur le canvas
}

export function BackgroundScene({
  children,
  className,
  overlay = true
}: BackgroundSceneProps) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <div className="absolute inset-0 z-0">
        <Canvas3D camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.3} />
          {children}
        </Canvas3D>
      </div>
      {overlay && (
        <div className="absolute inset-0 z-10 pointer-events-none"
             style={{ background: "rgba(0,0,0,0.3)" }}
        />
      )}
    </div>
  )
}
