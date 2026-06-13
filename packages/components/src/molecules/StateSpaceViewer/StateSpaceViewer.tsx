import { cn } from "@premier-js/core"

export interface StateSpacePoint {
  x: number
  y: number
  label?: string
  state: "initial" | "transition" | "final" | "error"
}

export interface StateSpaceViewerProps {
  points: StateSpacePoint[]
  width?: number
  height?: number
  bgColor?: string
  gridColor?: string
  pointColors?: Partial<Record<StateSpacePoint["state"], string>>
  labelColor?: string
  className?: string
}

const defaultColors: Record<StateSpacePoint["state"], string> = {
  initial: "#10b981",
  transition: "#3b82f6",
  final: "#8b5cf6",
  error: "#ef4444",
}

export function StateSpaceViewer({
  points,
  width = 500,
  height = 400,
  bgColor = "bg-gray-50",
  gridColor = "#e5e7eb",
  pointColors = {},
  labelColor = "#6b7280",
  className,
}: StateSpaceViewerProps) {
  const colors = { ...defaultColors, ...pointColors }
  const padding = 40
  const chartW = width - padding * 2
  const chartH = height - padding * 2

  const minX = Math.min(...points.map((p) => p.x))
  const maxX = Math.max(...points.map((p) => p.x))
  const minY = Math.min(...points.map((p) => p.y))
  const maxY = Math.max(...points.map((p) => p.y))
  const rangeX = maxX - minX || 1
  const rangeY = maxY - minY || 1

  const xScale = (v: number) => padding + ((v - minX) / rangeX) * chartW
  const yScale = (v: number) => padding + ((v - minY) / rangeY) * chartH

  return (
    <div className={cn("rounded-xl overflow-hidden", bgColor, className)}>
      <svg width={width} height={height}>
        {Array.from({ length: 5 }).map((_, i) => {
          const x = padding + (chartW / 4) * i
          const y = padding + (chartH / 4) * i
          return (
            <g key={i}>
              <line x1={padding} y1={y} x2={width - padding} y2={y} stroke={gridColor} strokeWidth={0.5} />
              <line x1={x} y1={padding} x2={x} y2={height - padding} stroke={gridColor} strokeWidth={0.5} />
            </g>
          )
        })}

        {points.map((point, i) => {
          const cx = xScale(point.x)
          const cy = yScale(point.y)
          const color = colors[point.state]
          return (
            <g key={i}>
              <circle cx={cx} cy={cy} r={8} fill={color} opacity={0.8} stroke="white" strokeWidth={2} />
              {point.label && (
                <text
                  x={cx}
                  y={cy - 14}
                  textAnchor="middle"
                  fill={labelColor}
                  fontSize={11}
                >
                  {point.label}
                </text>
              )}
            </g>
          )
        })}

        {points.slice(0, -1).map((_, i) => {
          const fromX = xScale(points[i].x)
          const fromY = yScale(points[i].y)
          const toX = xScale(points[i + 1].x)
          const toY = yScale(points[i + 1].y)
          return (
            <line
              key={`arrow-${i}`}
              x1={fromX}
              y1={fromY}
              x2={toX}
              y2={toY}
              stroke={gridColor}
              strokeWidth={1}
              strokeDasharray="4 2"
            />
          )
        })}
      </svg>
    </div>
  )
}
