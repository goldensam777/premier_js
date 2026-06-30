import { cn } from "@premier-js/core"
import katex from "katex"
import "katex/dist/katex.min.css"

export interface FormulaBlockProps {
  latex: string
  inline?: boolean
  bgColor?: string
  textColor?: string
  className?: string
}

export function FormulaBlock({
  latex,
  inline = false,
  bgColor = "bg-[var(--gs-bg-subtle)] border border-[var(--gs-border-subtle)]",
  textColor = "text-[var(--gs-text)]",
  className,
}: FormulaBlockProps) {
  const html = katex.renderToString(latex, {
    displayMode: !inline,
    throwOnError: false,
  })

  return inline ? (
    <span
      className={cn("inline-block", textColor, className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : (
    <div
      className={cn(
        "rounded-lg p-6 overflow-x-auto text-center text-base",
        bgColor,
        textColor,
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
