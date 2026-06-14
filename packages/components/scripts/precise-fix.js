const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const base = "/home/samuel-yevi/Dev/frameworks/premier_js/packages/components"

// Get current tsc errors, capture all output
console.log("Getting tsc errors...")
let output
try {
  output = execSync("npx tsc --noEmit", { cwd: base, maxBuffer: 10 * 1024 * 1024, stdio: 'pipe' }).toString()
} catch (e) {
  output = e.stdout?.toString() || ''
}
const lines = output.split("\n").filter(l => l.includes("src/effects") && l.includes("error TS"))

// Group errors by file
const fileErrors = {}
for (const line of lines) {
  const match = line.match(/^(src\/effects\/[^(]+)/)
  if (match) {
    const f = match[1]
    if (!fileErrors[f]) fileErrors[f] = []
    fileErrors[f].push(line)
  }
}

console.log(`Found ${Object.keys(fileErrors).length} files with errors\n`)

// Fix specific patterns per file
for (const [filepath, errors] of Object.entries(fileErrors)) {
  const full = path.join(base, filepath)
  let code = fs.readFileSync(full, "utf-8")
  const original = code
  let fixed = 0

  // Fix useRef([]) and useRef({}) -> useRef<any>([])
  const refPat = /useRef\((\[\]|\{\})\)/g
  if (refPat.test(code)) {
    code = code.replace(refPat, (m, init) => `useRef<any>(${init})`)
    fixed++
  }

  // Fix ctx and canvas possibly null
  if (errors.some(e => e.includes("'ctx' is possibly 'null'"))) {
    // Add ! after getContext() call
    code = code.replace(/\.getContext\(([^)]*)\)(?!\s*!)/g, '.getContext($1)!')
    fixed++
  }

  if (errors.some(e => e.includes("'canvas' is possibly 'null'"))) {
    // Fix in function closures (doResize, resize, etc.)
    code = code.replace(/function\s+(\w+)\s*\(\s*\)\s*\{([^}]*?)canvas\./g, (m) => {
      return m.replace(/canvas\./g, 'canvas!.')
    })
    fixed++
  }

  if (errors.some(e => e.includes("'container' is possibly 'null'"))) {
    // Fix container property access
    const propRe = /container\.(getBoundingClientRect|addEventListener|removeEventListener|appendChild|removeChild|querySelector|style|classList)/g
    code = code.replace(propRe, (m) => {
      if (!m.includes('container!')) return m.replace('container.', 'container!.')
      return m
    })
    fixed++
  }

  if (errors.some(e => e.includes("Binding element") && e.includes("implicitly"))) {
    // Add :any to function destructured params
    code = code.replace(/function\s+(\w+)\((\{[^}]+?\})\)(?!\s*:\s*any)/g, 'function $1($2: any)')
    fixed++
  }

  if (errors.some(e => e.includes("'card' is of type 'unknown'"))) {
    code = code.replace(/\bcard\.(current|style|classList|querySelector|children|parentElement|props)/g, '(card as any).$1')
    fixed++
  }

  // write changes
  if (code !== original) {
    fs.writeFileSync(full, code, "utf-8")
    console.log(`  ✓ ${filepath} (fixed ${fixed} patterns, was ${errors.length} errors)`)
  } else {
    console.log(`  - ${filepath} (${errors.length} errors, no auto-fix)`)
  }
}

console.log("\nDone")
