"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { Mesh } from "three"

gsap.registerPlugin(ScrollTrigger)

interface ScrollSceneOptions {
  trigger:   string          // sélecteur CSS ex: ".hero-section"
  from:      gsap.TweenVars
  to:        gsap.TweenVars
  start?:    string          // défaut "top 80%"
  end?:      string          // défaut "bottom 20%"
  scrub?:    boolean | number // true = lié au scroll, number = smoothing
}

export function useScrollScene(options: ScrollSceneOptions) {
  const meshRef = useRef<Mesh>(null)

  useEffect(() => {
    if (!meshRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger:      options.trigger,
        start:        options.start  ?? "top 80%",
        end:          options.end    ?? "bottom 20%",
        scrub:        options.scrub  ?? 1,
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(meshRef.current.rotation, options.from, options.to)
    tl.fromTo(meshRef.current.position, options.from, options.to, "<")

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return meshRef
}

// Usage :
//
// function RotatingCube() {
//   const ref = useScrollScene({
//     trigger: ".hero-section",
//     from: { y: 0 },
//     to:   { y: Math.PI * 2 },
//     scrub: true
//   })
//   return <mesh ref={ref}><boxGeometry /></mesh>
// }
