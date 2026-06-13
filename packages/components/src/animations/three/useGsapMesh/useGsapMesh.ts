"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import type { Mesh } from "three"

interface GsapMeshOptions {
  from:  gsap.TweenVars
  to:    gsap.TweenVars
  delay?: number
}

export function useGsapMesh(options: GsapMeshOptions) {
  const meshRef = useRef<Mesh>(null)

  useEffect(() => {
    if (!meshRef.current) return

    gsap.fromTo(
      meshRef.current.position,
      options.from,
      {
        ...options.to,
        delay: options.delay ?? 0,
        ease: "power2.out",
        duration: 1.2
      }
    )

    return () => { if (meshRef.current) gsap.killTweensOf(meshRef.current.position) }
  }, [])

  return meshRef
}

// Usage dans un composant R3F :
//
// function MyMesh() {
//   const ref = useGsapMesh({
//     from: { y: -2 },
//     to:   { y: 0 }
//   })
//   return <mesh ref={ref}><boxGeometry /></mesh>
// }
