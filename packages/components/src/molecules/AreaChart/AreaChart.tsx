import { cn } from "@premier-js/core"

export interface AreaChartPoint {
  label: string
  value: number
}

export interface AreaChartProps {
  data: AreaChartPoint[]
  width?: number
  height?: number
  lineColor?: string
  fillColor?: string
  gridColor?: string
  labelColor?: string
  className?: string
}

export function AreaChart({
  data,
  width = 600,
  height = 300,
  lineColor = "#3b82f6",
  fillColor = "rgba(59,130,246,0.15)",
  gridColor = "#e5e7eb",
  labelColor = "#9ca3af",
  className,
}: AreaChartProps) {
  if (data.length === 0) return null

  const maxVal = Math.max(...data.map((d) => d.value))
  const minVal = Math.min(...data.map((d) => d.value))
  const range = maxVal - minVal || 1

  const padding = { top: 20, right: 20, bottom: 30, left: 40 }
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom

  const xScale = (i: number) => padding.left + (i / (data.length - 1)) * chartW
  const yScale = (v: number) => padding.top + chartH - ((v - minVal) / range) * chartH

  const points = data.map((d, i) => `${xScale(i)},${yScale(d.value)}`).join(" ")
  const areaPoints = `${padding.left},${padding.top + chartH} ${points} ${xScale(data.length - 1)},${padding.top + chartH}`

  return (
    <svg
      width={width}
      height={height}
      className={cn("overflow-visible", className)}
      role="img"
      aria-label="Area chart"
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const y = padding.top + (chartH / 4) * i
        const val = maxVal - (range / 4) * i
        return (
          <g key={i}>
            <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke={gridColor} strokeWidth={1} />
            <text x={padding.left - 8} y={y + 4} textAnchor="end" fill={labelColor} fontSize={11}>
              {Math.round(val)}
            </text>
          </g>
        )
      })}

      <polygon points={areaPoints} fill={fillColor} />

      <polyline points={points} fill="none" stroke={lineColor} strokeWidth={2} strokeLinejoin="round" />

      {data.map((d, i) => (
        <text
          key={i}
          x={xScale(i)}
          y={height - 5}
          textAnchor="end"
          fill={labelColor}
          fontSize={11}
          transform={`rotate(-45, ${xScale(i)}, ${height - 5})`}
        >
          {d.label}
        </text>
      ))}
    </svg>
  )
}
