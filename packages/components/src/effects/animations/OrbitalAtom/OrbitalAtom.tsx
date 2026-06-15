"use client"

import { cn } from "@premier-js/core"
import { useEffect, useState } from "react"

export interface OrbitalAtomProps {
  className?: string
  size?: number
  nucleusColor?: string
  electronColor?: string
  orbitColor?: string
  glowColor?: string
  speed?: number // Vitesse de rotation (durée en secondes d'une rotation complète)
  orbitCount?: number // 2, 3 ou 4
  interactive?: boolean // Accélère au survol
}

export function OrbitalAtom({
  className,
  size = 200,
  nucleusColor = "var(--gs-primary, #a855f7)",
  electronColor = "#38bdf8",
  orbitColor = "rgba(148, 163, 184, 0.15)",
  glowColor = "#a855f7",
  speed = 4,
  orbitCount = 3,
  interactive = true,
}: OrbitalAtomProps) {
  const [hovered, setHovered] = useState(false)
  
  // Vitesse ajustée en cas de survol
  const currentSpeed = hovered && interactive ? speed * 0.4 : speed

  const getAngles = () => {
    switch (orbitCount) {
      case 2:
        return [45, 135]
      case 4:
        return [0, 45, 90, 135]
      case 3:
      default:
        return [0, 60, 120]
    }
  }

  const angles = getAngles()
  const delays = ["0s", "-1.3s", "-2.6s", "-0.8s"]

  return (
    <div 
      className={cn("relative flex items-center justify-center select-none", className)}
      style={{ width: size, height: size }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Glow filter */}
          <filter id="atom-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Nucleus radial gradient */}
          <radialGradient id="nucleus-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: "#ffffff" }} />
            <stop offset="70%" style={{ stopColor: nucleusColor }} />
            <stop offset="100%" style={{ stopColor: nucleusColor, stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        {/* Orbits and Electrons */}
        {angles.map((angle, index) => {
          const delay = delays[index % delays.length]
          return (
            <g key={angle} transform={`rotate(${angle} 100 100)`}>
              {/* Elliptical path */}
              <path
                d="M 20,100 A 80,30 0 1,1 180,100 A 80,30 0 1,1 20,100"
                fill="none"
                stroke={orbitColor}
                strokeWidth="1.5"
                strokeDasharray="4, 4"
                className="transition-colors duration-300"
              />
              
              {/* Primary electron */}
              <circle r="6" fill={electronColor} filter="url(#atom-glow)">
                <animateMotion
                  dur={`${currentSpeed}s`}
                  repeatCount="indefinite"
                  path="M 20,100 A 80,30 0 1,1 180,100 A 80,30 0 1,1 20,100"
                  begin={delay}
                />
              </circle>

              {/* Secondary trailing particle */}
              <circle r="3.5" fill={electronColor} opacity="0.5">
                <animateMotion
                  dur={`${currentSpeed}s`}
                  repeatCount="indefinite"
                  path="M 20,100 A 80,30 0 1,1 180,100 A 80,30 0 1,1 20,100"
                  begin={`${parseFloat(delay) - 0.15}s`}
                />
              </circle>
            </g>
          )
        })}

        {/* Pulsing Central Nucleus */}
        <g transform="translate(100, 100)">
          {/* Glowing background halo */}
          <circle
            r="18"
            fill={nucleusColor}
            opacity={hovered && interactive ? 0.45 : 0.25}
            filter="url(#atom-glow)"
            className="transition-opacity duration-300"
          />
          <circle r="14" fill="url(#nucleus-grad)" />
          
          {/* Overlapping Nucleons (protons & neutrons) */}
          <circle cx="-4" cy="-4" r="6" fill={nucleusColor} />
          <circle cx="5" cy="-3" r="5.5" fill={electronColor} />
          <circle cx="0" cy="5" r="6.2" fill={nucleusColor} />
          <circle cx="-1" cy="-1" r="5" fill="#ffffff" opacity="0.9" />
        </g>
      </svg>
    </div>
  )
}
