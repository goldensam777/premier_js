const fs = require("fs")
const path = require("path")

// List of remaining problem files and their specific fixes
const fixes = {
  "src/effects/animations/LogoLoop/LogoLoop.tsx": (code) => {
    // Add cn import
    if (!code.includes('import { cn }')) {
      code = code.replace("import './LogoLoop.css'", "import { cn } from \"@premier-js/core\"\nimport './LogoLoop.css'")
    }
    // Add :any to params
    code = code.replace("const toCssLength = value =>", "const toCssLength = (value: any) =>")
    code = code.replace("const useResizeObserver = (callback, elements, dependencies) => {", "const useResizeObserver = (callback: any, elements: any, dependencies: any) => {")
    code = code.replace("const useImageLoader = (seqRef, onLoad, dependencies) => {", "const useImageLoader = (seqRef: any, onLoad: any, dependencies: any) => {")
    code = code.replace("const useAnimationLoop = (trackRef, targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical) => {", "const useAnimationLoop = (trackRef: any, targetVelocity: any, seqWidth: any, seqHeight: any, isHovered: any, hoverSpeed: any, isVertical: any) => {")
    code = code.replace("const rafRef = useRef(null);", "const rafRef = useRef<any>(null);")
    code = code.replace("const lastTimestampRef = useRef(null);", "const lastTimestampRef = useRef<any>(null);")
    code = code.replace("    const animate = timestamp => {", "    const animate = (timestamp: any) => {")
    code = code.replace("const containerRef = useRef(null);", "const containerRef = useRef<HTMLDivElement>(null);")
    code = code.replace("const trackRef = useRef(null);", "const trackRef = useRef<any>(null);")
    code = code.replace("const seqRef = useRef(null);", "const seqRef = useRef<any>(null);")
    code = code.replace(/^\s+\)\s*=>\s*\{/m, "  }: any) => {")
    code = code.replace("      (item, key) => {", "      (item: any, key: any) => {")
    // Remove default export
    code = code.replace("\nexport default LogoLoop;", "")
    return code
  },
  
  "src/effects/animations/MagicRings/MagicRings.tsx": (code) => {
    code = code.replace("    let frameId;", "    let frameId: any;")
    code = code.replace("    const animate = (t) => {", "    const animate = (t: any) => {")
    code = code.replace("    const onMouseMove = (e) => {", "    const onMouseMove = (e: any) => {")
    return code
  },
  
  "src/effects/animations/ElasticSlider/ElasticSlider.tsx": (code) => {
    // Add cn import
    if (!code.includes('import { cn }')) {
      code = code.replace("import './ElasticSlider.css'", "import { cn } from \"@premier-js/core\"\nimport './ElasticSlider.css'")
    }
    return code
  },

  "src/effects/animations/GradualBlur/GradualBlur.tsx": (code) => {
    if (!code.includes('import { cn }')) {
      code = code.replace("import React, {", "import { cn } from \"@premier-js/core\"\nimport React, {")
    }
    code = code.replace("const GradualBlur = ({\n  children,\n  blur = 0,\n  opacity = 0.5,\n  blurStrength = 30,\n  position = 'bottom',\n  alt = false,\n  mode = 'blur',\n  className = ''\n}: any) => {", "export const GradualBlur = ({\n  children,\n  blur = 0,\n  opacity = 0.5,\n  blurStrength = 30,\n  position = 'bottom',\n  alt = false,\n  mode = 'blur',\n  className = ''\n}: any) => {")
    return code
  },
  
  "src/effects/animations/Strands/Strands.tsx": (code) => {
    code = code.replace("const Strands = ({\n  style,\n  className = ''\n}: any) => {", "export const Strands = ({\n  style,\n  className = ''\n}: any) => {")
    return code
  },
}

const dir = "/home/samuel-yevi/Dev/frameworks/premier_js/packages/components"

for (const [filepath, fixFn] of Object.entries(fixes)) {
  const full = path.join(dir, filepath)
  let code = fs.readFileSync(full, "utf-8")
  const original = code
  code = fixFn(code)
  if (code !== original) {
    fs.writeFileSync(full, code, "utf-8")
    console.log(`  ✓ ${filepath}`)
  }
}
console.log("Done")
