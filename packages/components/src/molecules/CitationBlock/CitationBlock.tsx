import { cn } from "@premier-js/core"

export interface CitationBlockProps {
  citation: string
  authors?: string
  year?: number
  source?: string
  url?: string
  style?: "apa" | "mla" | "chicago" | "ieee"
  bgColor?: string
  textColor?: string
  accentColor?: string
}

const styleLabels: Record<string, string> = {
  apa: "APA",
  mla: "MLA",
  chicago: "Chicago",
  ieee: "IEEE",
}

export function CitationBlock({
  citation,
  authors,
  year,
  source,
  url,
  style = "apa",
  bgColor = "bg-gray-50",
  textColor = "text-gray-600",
  accentColor = "text-blue-600",
}: CitationBlockProps) {
  return (
    <div className={cn("rounded-lg border border-gray-200 p-4", bgColor)}>
      <div className="flex items-start gap-3">
        <span className={cn("text-xs font-semibold uppercase tracking-wider shrink-0 mt-0.5", accentColor)}>
          [{styleLabels[style] ?? style}]
        </span>
        <div className="space-y-1">
          <p className={cn("text-sm leading-relaxed", textColor)}>{citation}</p>
          {(authors || year) && (
            <p className={cn("text-xs", textColor)}>
              {authors && <span>{authors}</span>}
              {year && <span> ({year})</span>}
              {source && <span>. {source}</span>}
            </p>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-xs hover:underline", accentColor)}
            >
              {url}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
