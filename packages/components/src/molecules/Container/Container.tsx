import { cn } from "@premier-js/core"

export interface ContainerProps {
  children: React.ReactNode
  maxWidth?: string
  className?: string
}

export function Container({
  children,
  maxWidth = "max-w-6xl",
  className,
}: ContainerProps) {
  return (
    <div className={cn("mx-auto", maxWidth, className)}>
      {children}
    </div>
  )
}
