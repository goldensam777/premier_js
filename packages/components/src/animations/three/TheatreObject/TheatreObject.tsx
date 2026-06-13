"use client"

import { useRef, useEffect } from "react"
import { getProject, types } from "@theatre/core"
import { SheetProvider, editable as e } from "@theatre/r3f"
import type { ISheet } from "@theatre/core"

interface TheatreObjectProps {
  children:    React.ReactNode
  projectName: string
  sheetName:   string
  state?:      Record<string, unknown>  // état Theatre.js sauvegardé
}

export function TheatreObject({
  children,
  projectName,
  sheetName,
  state
}: TheatreObjectProps) {
  const project = getProject(projectName, { state })
  const sheet   = project.sheet(sheetName)

  useEffect(() => {
    sheet.sequence.play({ iterationCount: 1 })
  }, [sheet])

  return (
    <SheetProvider sheet={sheet}>
      {children}
    </SheetProvider>
  )
}

// Usage dans un Canvas R3F :
//
// <Canvas>
//   <TheatreObject projectName="Premier" sheetName="HeroScene">
//     <e.mesh theatreKey="FloatingCube">
//       <boxGeometry />
//       <meshStandardMaterial color="white" />
//     </e.mesh>
//   </TheatreObject>
// </Canvas>
