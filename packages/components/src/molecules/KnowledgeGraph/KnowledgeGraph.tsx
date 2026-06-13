"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@premier-js/core"

export interface KnowledgeGraphNode {
  id: string
  label: string
  color?: string
  size?: number
}

export interface KnowledgeGraphEdge {
  source: string
  target: string
  label?: string
}

export interface KnowledgeGraphProps {
  nodes: KnowledgeGraphNode[]
  edges: KnowledgeGraphEdge[]
  width?: number
  height?: number
  bgColor?: string
  nodeColor?: string
  edgeColor?: string
  labelColor?: string
  className?: string
}

interface NodePos {
  x: number
  y: number
}

export function KnowledgeGraph({
  nodes,
  edges,
  width = 600,
  height = 400,
  bgColor = "bg-gray-50",
  nodeColor = "#3b82f6",
  edgeColor = "#d1d5db",
  labelColor = "#374151",
  className,
}: KnowledgeGraphProps) {
  const [positions, setPositions] = useState<NodePos[]>([])
  const svgRef = useRef<SVGSVGElement>(null)
  const animRef = useRef(0)

  useEffect(() => {
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 3

    const initial: NodePos[] = nodes.map((_, i) => ({
      x: centerX + radius * Math.cos((2 * Math.PI * i) / nodes.length),
      y: centerY + radius * Math.sin((2 * Math.PI * i) / nodes.length),
    }))

    setPositions(initial)

    const vel = initial.map(() => ({ x: 0, y: 0 }))

    const simulate = () => {
      const newPos = positions.length > 0 ? [...positions] : [...initial]
      if (newPos.length === 0) return

      for (let i = 0; i < newPos.length; i++) {
        let fx = 0
        let fy = 0

        for (let j = 0; j < newPos.length; j++) {
          if (i === j) continue
          const dx = newPos[j].x - newPos[i].x
          const dy = newPos[j].y - newPos[i].y
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          const force = 3000 / (dist * dist)
          fx -= (dx / dist) * force
          fy -= (dy / dist) * force
        }

        const isConnected = edges.some(
          (e) => (e.source === nodes[i].id || e.target === nodes[i].id),
        )
        const connectedNodes = edges
          .filter((e) => e.source === nodes[i].id || e.target === nodes[i].id)
          .map((e) => {
            const targetId = e.source === nodes[i].id ? e.target : e.source
            return nodes.findIndex((n) => n.id === targetId)
          })

        for (const j of connectedNodes) {
          if (j < 0) continue
          const dx = newPos[j].x - newPos[i].x
          const dy = newPos[j].y - newPos[i].y
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          const force = isConnected ? (dist - 100) * 0.01 : 0
          fx += (dx / dist) * force
          fy += (dy / dist) * force
        }

        const centerDx = centerX - newPos[i].x
        const centerDy = centerY - newPos[i].y
        fx += centerDx * 0.001
        fy += centerDy * 0.001

        vel[i].x = (vel[i].x + fx) * 0.85
        vel[i].y = (vel[i].y + fy) * 0.85
        newPos[i].x += vel[i].x
        newPos[i].y += vel[i].y

        newPos[i].x = Math.max(20, Math.min(width - 20, newPos[i].x))
        newPos[i].y = Math.max(20, Math.min(height - 20, newPos[i].y))
      }

      setPositions(newPos)

      const energy = vel.reduce((sum, v) => sum + Math.abs(v.x) + Math.abs(v.y), 0)
      if (energy > 0.1) {
        animRef.current = requestAnimationFrame(simulate)
      }
    }

    animRef.current = requestAnimationFrame(simulate)
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [nodes, edges, width, height])

  const nodeMap = new Map(nodes.map((n, i) => [n.id, i]))

  return (
    <div className={cn("rounded-xl overflow-hidden", bgColor, className)}>
      <svg ref={svgRef} width={width} height={height}>
        {edges.map((edge, i) => {
          const srcIdx = nodeMap.get(edge.source)
          const tgtIdx = nodeMap.get(edge.target)
          if (srcIdx === undefined || tgtIdx === undefined || positions.length === 0) return null
          const src = positions[srcIdx]
          const tgt = positions[tgtIdx]
          if (!src || !tgt) return null
          return (
            <g key={i}>
              <line x1={src.x} y1={src.y} x2={tgt.x} y2={tgt.y} stroke={edgeColor} strokeWidth={1.5} />
              {edge.label && (
                <text
                  x={(src.x + tgt.x) / 2}
                  y={(src.y + tgt.y) / 2 - 6}
                  textAnchor="middle"
                  fill={labelColor}
                  fontSize={10}
                >
                  {edge.label}
                </text>
              )}
            </g>
          )
        })}

        {nodes.map((node, i) => {
          const pos = positions[i]
          if (!pos) return null
          return (
            <g key={node.id}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={node.size ?? 20}
                fill={node.color ?? nodeColor}
                opacity={0.9}
                stroke="white"
                strokeWidth={2}
              />
              <text
                x={pos.x}
                y={pos.y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize={10}
                fontWeight={600}
              >
                {node.label.slice(0, 3)}
              </text>
              <text
                x={pos.x}
                y={pos.y + (node.size ?? 20) + 14}
                textAnchor="middle"
                fill={labelColor}
                fontSize={11}
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
