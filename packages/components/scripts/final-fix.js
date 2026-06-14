const fs = require("fs")
const path = require("path")

const base = "/home/samuel-yevi/Dev/frameworks/premier_js/packages/components/src/effects"

// Files still with errors
const targets = [
  "animations/MetallicPaint/MetallicPaint.tsx",
  "animations/Strands/Strands.tsx",
  "animations/GradualBlur/GradualBlur.tsx",
  "glass/FluidGlass/FluidGlass.tsx",
  "cards/CardSwap/CardSwap.tsx",
  "animations/Ribbons/Ribbons.tsx",
  "backgrounds/Ferrofluid/Ferrofluid.tsx",
  "animations/ScrollStack/ScrollStack.tsx",
  "backgrounds/Lightfall/Lightfall.tsx",
  "cards/ReflectiveCard/ReflectiveCard.tsx",
  "animations/ShapeBlur/ShapeBlur.tsx",
  "borders/BorderGlow/BorderGlow.tsx",
]

for (const rel of targets) {
  const full = path.join(base, rel)
  let code = fs.readFileSync(full, "utf-8")
  const original = code

  // Fix all Parameter 'x' implicitly has an 'any' type
  // Fix arrow function single param: (x) => -> (x: any) =>
  // But only simple variable names, not destructured
  code = code.replace(/\((\w+)\)\s*=>\s*\{/g, '($1: any) => {')
  code = code.replace(/\((\w+)\)\s*=>\s*\(/g, '($1: any) => (')
  code = code.replace(/\((\w+)\)\s*=>\s*[a-z]/g, (m) => m.replace(/^\((\w+)\)/, '($1: any)'))

  // Fix function(params) -> function(params: any)
  code = code.replace(/function\s+(\w+)\((\w+)\)\s*\{/g, 'function $1($2: any) {')
  code = code.replace(/function\s+(\w+)\((\w+),\s*(\w+)\)\s*\{/g, 'function $1($2: any, $3: any) {')

  // Fix var/let x; -> var/let x: any;
  code = code.replace(/^(\s+)(let|var)\s+(\w+);\s*$/gm, '$1$2 $3: any;')

  // Fix : any) => pattern misformed 
  code = code.replace(/\):\s*any\)\s*=>/g, '}: any) =>')

  // Fix (canvas|ctx) possibly null assignments
  code = code.replace(/const ctx = ([^;]*)\.getContext/g, 'const ctx = $1!.getContext')
  code = code.replace(/canvas\.parentElement/g, 'canvas.parentElement!')
  code = code.replace(/canvas\.width\b/g, 'canvas!.width')
  code = code.replace(/canvas\.height\b/g, 'canvas!.height')
  code = code.replace(/canvas\.style\./g, 'canvas!.style.')

  // Fix canvas possibly null in function closures
  code = code.replace(/function doResize/g, 'function doResize')
  code = code.replace(/function resize/g, 'function resize')
  code = code.replace(/function onPointer/g, 'function onPointer')

  // Fix forEach/map params
  // But only simple variable names, skip complex destructuring
  code = code.replace(/\.forEach\(\((\w+)\)\s*=>/g, '.forEach(($1: any) =>')
  code = code.replace(/\.forEach\(\((\w+),\s*(\w+)\)\s*=>/g, '.forEach(($1: any, $2: any) =>')
  code = code.replace(/\.map\(\((\w+)\)\s*=>/g, '.map(($1: any) =>')
  code = code.replace(/\.map\(\((\w+),\s*(\w+)\)\s*=>/g, '.map(($1: any, $2: any) =>')

  // Fix canvasRef.current.getContext
  code = code.replace(/canvasRef\.current\.getContext/g, 'canvasRef.current!.getContext')

  // Fix : any) => { pattern (multiline prop destructuring)
  code = code.replace(/\)\s*:\s*any\s*\)\s*=>\s*\{/g, '}: any) => {')

  if (code !== original) {
    fs.writeFileSync(full, code, "utf-8")
    console.log(`  ✓ ${rel}`)
  }
}
console.log("Done")
