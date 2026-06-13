import { cn } from "@premier-js/core"

export interface PaperViewerProps {
  title: string
  authors: string[]
  abstract: string
  doi?: string
  journal?: string
  year?: number
  pdfUrl?: string
  bgColor?: string
  titleColor?: string
  textColor?: string
  accentColor?: string
}

export function PaperViewer({
  title,
  authors,
  abstract,
  doi,
  journal,
  year,
  pdfUrl,
  bgColor = "bg-white",
  titleColor = "text-gray-900",
  textColor = "text-gray-600",
  accentColor = "text-blue-600",
}: PaperViewerProps) {
  return (
    <div className={cn("rounded-xl border border-gray-200 p-6 space-y-4", bgColor)}>
      <div>
        <h3 className={cn("text-lg font-bold leading-snug", titleColor)}>{title}</h3>
        <p className={cn("mt-1 text-sm", textColor)}>
          {authors.join(", ")}
          {year && <> — {year}</>}
        </p>
      </div>

      {journal && (
        <p className={cn("text-xs font-medium uppercase tracking-wider", textColor)}>
          {journal}
        </p>
      )}

      <p className={cn("text-sm leading-relaxed", textColor)}>{abstract}</p>

      <div className="flex flex-wrap gap-3 pt-2">
        {doi && (
          <a
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("text-xs font-medium hover:underline", accentColor)}
          >
            DOI: {doi}
          </a>
        )}
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("text-xs font-medium hover:underline", accentColor)}
          >
            Télécharger PDF
          </a>
        )}
      </div>
    </div>
  )
}
