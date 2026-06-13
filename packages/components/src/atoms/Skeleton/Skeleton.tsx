import { cn } from "@premier-js/core"

export interface SkeletonProps {
  width?: string
  height?: string
  borderRadius?: string
  className?: string
}

export function Skeleton({
  width = "100%",
  height = "1rem",
  borderRadius = "0.375rem",
  className,
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse bg-gray-200", className)}
      style={{ width, height, borderRadius }}
    />
  )
}
