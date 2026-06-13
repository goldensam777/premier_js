import { cn } from "@premier-js/core"

export interface SectionProps {
  children: React.ReactNode
  className?: string
  bgColor?: string
  padding?: string
  id?: string
}

export function Section({
  children,
  className,
  bgColor = "bg-white",
  padding = "py-20 px-6",
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn(padding, bgColor, className)}>
      {children}
    </section>
  )
}
