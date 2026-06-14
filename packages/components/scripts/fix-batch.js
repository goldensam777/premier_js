const fs = require("fs")
const path = require("path")

const base = "/home/samuel-yevi/Dev/frameworks/premier_js/packages/components"

const files = [
  "src/effects/animations/LogoLoop/LogoLoop.tsx",
  "src/effects/animations/GradualBlur/GradualBlur.tsx",
  "src/effects/animations/Strands/Strands.tsx",
  "src/effects/animations/ElasticSlider/ElasticSlider.tsx",
  "src/effects/animations/ScrollStack/ScrollStack.tsx",
  "src/effects/animations/Ribbons/Ribbons.tsx",
  "src/effects/animations/ShapeBlur/ShapeBlur.tsx",
  "src/effects/animations/MetallicPaint/MetallicPaint.tsx",
  "src/effects/backgrounds/DotField/DotField.tsx",
  "src/effects/backgrounds/Ferrofluid/Ferrofluid.tsx",
  "src/effects/backgrounds/Lightfall/Lightfall.tsx",
  "src/effects/cards/CardSwap/CardSwap.tsx",
  "src/effects/cards/ReflectiveCard/ReflectiveCard.tsx",
  "src/effects/glass/FluidGlass/FluidGlass.tsx",
  "src/effects/borders/BorderGlow/BorderGlow.tsx",
]

for (const filepath of files) {
  const full = path.join(base, filepath)
  let code = fs.readFileSync(full, "utf-8")
  const original = code

  // Add cn import if not present
  if (!code.includes('import { cn }') && filepath.includes('.tsx')) {
    code = code.replace(/import ['"]\.\/(\w+)\.css['"]/, "import { cn } from \"@premier-js/core\"\nimport './$1.css'")
  }

  // Replace default export with named export for components
  // Pattern: const ComponentName = ... --> export const ComponentName = ...
  code = code.replace(/^const (\w+) = \(/m, 'export const $1 = (')

  // Fix useRef(null) -> useRef<any>(null)
  code = code.replace(/useRef\(null\)/g, 'useRef<any>(null)')
  
  // Fix useRef() no args -> useRef<any>(null)  
  code = code.replace(/useRef\(\)/g, 'useRef<any>(null)')

  // Fix let x; -> let x: any;
  code = code.replace(/^(\s+)(let|var)\s+(\w+);\s*$/gm, '$1$2 $3: any;')

  // Fix (e) => patterns in addEventListener
  code = code.replace(/\.addEventListener\(['"]\w+['"],\s*\((\w)\)\s*=>/g, '.addEventListener(\'$1\', ($2: any) =>')

  // Fix forEach/map params
  code = code.replace(/\.forEach\(\((\w+)\)\s*=>/g, '.forEach(($1: any) =>')
  code = code.replace(/\.forEach\(\((\w+),\s*(\w+)\)\s*=>/g, '.forEach(($1: any, $2: any) =>')
  code = code.replace(/\.map\(\((\w+)\)\s*=>/g, '.map(($1: any) =>')
  code = code.replace(/\.map\(\((\w+),\s*(\w+)\)\s*=>/g, '.map(($1: any, $2: any) =>')

  // Fix function param: function foo(bar) { -> function foo(bar: any) {
  code = code.replace(/function\s+(\w+)\((\w+)\)\s*\{/g, 'function $1($2: any) {')
  code = code.replace(/function\s+(\w+)\((\w+),\s*(\w+)\)\s*\{/g, 'function $1($2: any, $3: any) {')

  // Fix arrow function param: (bar) => -> (bar: any) =>
  code = code.replace(/^(\s*)\((\w+)\)\s*=>\s*\{/gm, '$1($2: any) => {')

  // Fix destructured arrow params: ({a,b}) => -> ({a,b}: any) =>
  code = code.replace(/\(\{([^}]+)\}\)\s*=>/g, '({$1}: any) =>')

  // Fix : any) => { pattern (props type annotation)
  code = code.replace(/\)\s*:\s*any\)\s*=>\s*\{/g, '}: any) => {')

  // Remove duplicate exports (export default X when export const X exists)
  code = code.replace(/\nexport default (\w+);/g, (match, name) => {
    if (code.includes(`export const ${name}`) || code.includes(`export function ${name}`)) {
      return '' // remove default export
    }
    return match // keep if no named export
  })

  if (code !== original) {
    // Check if the file is still valid
    try {
      fs.writeFileSync(full, code, "utf-8")
      console.log(`  ✓ ${filepath}`)
    } catch (e) {
      console.log(`  ✗ ${filepath}: ${e.message}`)
    }
  }
}
console.log("Done")
