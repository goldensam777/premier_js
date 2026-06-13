"use client"

import { useState } from "react"
import { cn } from "@premier-js/core"

export interface NotebookCell {
  id: string
  type: "markdown" | "code" | "output"
  content: string
}

export interface NotebookCanvasProps {
  cells: NotebookCell[]
  title?: string
  bgColor?: string
  cellBgColor?: string
  codeBgColor?: string
  outputBgColor?: string
  textColor?: string
  borderColor?: string
}

export function NotebookCanvas({
  cells,
  title,
  bgColor = "bg-white",
  cellBgColor = "bg-white",
  codeBgColor = "bg-gray-900",
  outputBgColor = "bg-gray-50",
  textColor = "text-gray-800",
  borderColor = "border-gray-200",
}: NotebookCanvasProps) {
  return (
    <div className={cn("rounded-xl border overflow-hidden", borderColor, bgColor)}>
      {title && (
        <div className={cn("px-4 py-3 border-b font-semibold text-sm", borderColor, textColor)}>
          {title}
        </div>
      )}
      <div className="divide-y" style={{ borderColor }}>
        {cells.map((cell) => (
          <div key={cell.id} className={cn("p-4", cellBgColor)}>
            <div className="flex items-center gap-2 mb-2">
              <span className={cn(
                "text-xs font-mono font-semibold uppercase px-1.5 py-0.5 rounded",
                cell.type === "markdown" && "text-blue-600 bg-blue-50",
                cell.type === "code" && "text-green-600 bg-green-50",
                cell.type === "output" && "text-gray-500 bg-gray-100",
              )}>
                {cell.type}
              </span>
            </div>
            {cell.type === "code" ? (
              <pre className={cn("rounded-lg p-4 overflow-x-auto text-sm font-mono", codeBgColor, "text-green-400")}>
                <code>{cell.content}</code>
              </pre>
            ) : cell.type === "output" ? (
              <div className={cn("rounded-lg p-4 text-sm font-mono", outputBgColor, textColor)}>
                {cell.content}
              </div>
            ) : (
              <div className={cn("prose prose-sm max-w-none", textColor)}>
                {cell.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
