"use client"

import { OrbitControls } from "@react-three/drei"

interface OrbitCameraProps {
  autoRotate?:      boolean
  autoRotateSpeed?: number
  enableZoom?:      boolean
  enablePan?:       boolean
  minDistance?:     number
  maxDistance?:     number
}

export function OrbitCamera({
  autoRotate      = false,
  autoRotateSpeed = 1,
  enableZoom      = true,
  enablePan       = false,
  minDistance     = 2,
  maxDistance     = 20
}: OrbitCameraProps) {
  return (
    <OrbitControls
      autoRotate={autoRotate}
      autoRotateSpeed={autoRotateSpeed}
      enableZoom={enableZoom}
      enablePan={enablePan}
      minDistance={minDistance}
      maxDistance={maxDistance}
    />
  )
}
