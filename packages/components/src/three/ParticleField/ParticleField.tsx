"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface ParticleFieldProps {
  count?:  number
  color?:  string
  size?:   number
  spread?: number
}

function Scene({
  count  = 2000,
  color  = "#ffffff",
  size   = 0.015,
  spread = 10
}: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * spread
    }
    return arr
  }, [count, spread])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.getElapsedTime() * 0.02
    ref.current.rotation.x = clock.getElapsedTime() * 0.01
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

export function ParticleField(props: ParticleFieldProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene {...props} />
    </Canvas>
  )
}
