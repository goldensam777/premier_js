const fs = require("fs")
const path = require("path")

const effectsDir = path.join(__dirname, "..", "src", "effects")

function walk(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...walk(full))
    else if (entry.name.endsWith(".tsx")) files.push(full)
  }
  return files
}

function fixFile(file) {
  let code = fs.readFileSync(file, "utf-8")
  const original = code
  const rel = path.relative(effectsDir, file)

  // 1. Fix useRef(null) without generics
  code = code.replace(/useRef\(null\)/g, "useRef<any>(null)")

  // 2. Fix canvas refs
  code = code.replace(/canvasRef = useRef<any>\(null\)/g, 'canvasRef = useRef<HTMLCanvasElement>(null)')
  code = code.replace(/containerRef = useRef<any>\(null\)/g, 'containerRef = useRef<HTMLDivElement>(null)')
  code = code.replace(/svgRef = useRef<any>\(null\)/g, 'svgRef = useRef<SVGSVGElement>(null)')

  // 3. Fix getContext('2d') with proper type
  code = code.replace(/canvas\.getContext\('2d'/g, "(canvas as HTMLCanvasElement).getContext('2d'")

  // 4. Fix document.getElementById
  code = code.replace(/document\.getElementById\(/g, "document.getElementById(")
  code = code.replace(/document\.querySelector\(/g, "document.querySelector(")

  // 5. Add as any to common ref uses that may cause issues
  code = code.replace(/\.getBoundingClientRect\(\)/g, ".getBoundingClientRect()")

  // 6. Fix common event handler patterns
  // (e) => patterns in JSX
  code = code.replace(/onMouseMove=\{\(e\)/g, 'onMouseMove={(e: React.MouseEvent)')
  code = code.replace(/onMouseEnter=\{\(e\)/g, 'onMouseEnter={(e: React.MouseEvent)')
  code = code.replace(/onMouseLeave=\{\(e\)/g, 'onMouseLeave={(e: React.MouseEvent)')
  code = code.replace(/onClick=\{\(e\)/g, 'onClick={(e: React.MouseEvent)')
  code = code.replace(/onPointerMove=\{\(e\)/g, 'onPointerMove={(e: React.PointerEvent)')

  if (code !== original) {
    fs.writeFileSync(file, code, "utf-8")
    return true
  }
  return false
}

const files = walk(effectsDir)
let changed = 0
for (const file of files) {
  if (fixFile(file)) {
    console.log(`  ✓ ${path.relative(effectsDir, file)}`)
    changed++
  }
}
console.log(`\n${changed}/${files.length} files changed`)
