"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@premier-js/core"

export interface ScrollAreaProps {
  children: React.ReactNode
  maxHeight?: string
  maxWidth?: string
  className?: string
  thumbColor?: string
  trackColor?: string
}

export function ScrollArea({
  children,
  maxHeight,
  maxWidth,
  className,
  thumbColor = "bg-gray-300",
  trackColor = "bg-transparent",
}: ScrollAreaProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const handle = () => {
      setScrollTop(el.scrollTop)
      setScrollHeight(el.scrollHeight)
      setClientHeight(el.clientHeight)
    }
    handle()
    el.addEventListener("scroll", handle)
    const observer = new ResizeObserver(handle)
    observer.observe(el)
    return () => {
      el.removeEventListener("scroll", handle)
      observer.disconnect()
    }
  }, [])

  const thumbHeight = clientHeight > 0 ? (clientHeight / scrollHeight) * clientHeight : 0
  const thumbTop = scrollHeight > clientHeight ? (scrollTop / (scrollHeight - clientHeight)) * (clientHeight - thumbHeight) : 0
  const showThumb = scrollHeight > clientHeight

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ maxHeight, maxWidth }}
    >
      <div
        ref={viewportRef}
        className="h-full w-full overflow-auto scrollbar-none"
        style={{ scrollbarWidth: "thin" }}
      >
        {children}
      </div>
      {showThumb && (
        <div className={cn("absolute top-0 right-0 w-2 h-full rounded", trackColor)}>
          <div
            className={cn("w-full rounded transition-opacity duration-150", thumbColor)}
            style={{
              height: Math.max(20, thumbHeight),
              transform: `translateY(${thumbTop}px)`,
              opacity: 0.6,
            }}
          />
        </div>
      )}
    </div>
  )
}
