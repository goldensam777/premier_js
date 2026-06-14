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

const files = walk(effectsDir)
console.log(`Found ${files.length} TSX files`)

const gsColorMap = {
  "#000": "var(--gs-bg)",
  "#fff": "var(--gs-text)",
  "#ffffff": "var(--gs-text)",
  "#0a0a0a": "var(--gs-bg)",
  "#111": "var(--gs-surface)",
  "#111111": "var(--gs-surface)",
  "#171717": "var(--gs-text)",
  "#333": "var(--gs-text-subtle)",
  "#333333": "var(--gs-text-subtle)",
}

for (const file of files) {
  let code = fs.readFileSync(file, "utf-8")
  const original = code
  const rel = path.relative(effectsDir, file)

  // 1. Replace hex colors with gs-* vars (only in prop defaults and CSS string values)
  for (const [hex, gsVar] of Object.entries(gsColorMap)) {
    // Replace in string literals (prop defaults, CSS values) — not in hex parsing logic
    code = code.replace(new RegExp(`'${hex}'`, "g"), `'${gsVar}'`)
    code = code.replace(new RegExp(`"${hex}"`, "g"), `"${gsVar}"`)
    code = code.replace(new RegExp(`\`${hex}\``, "g"), `\`${gsVar}\``)
  }

  // 2. Add cn import if not present
  if (!code.includes('from "@premier-js/core"') && !code.includes("cn(")) {
    const firstImport = code.match(/^import .+$/m)
    if (firstImport) {
      const idx = code.indexOf(firstImport[0])
      // Check if it already has cn defined
      if (!code.includes("import { cn }")) {
        code = code.slice(0, idx) + `import { cn } from "@premier-js/core"\n` + code.slice(idx)
      }
    }
  }

  // 3. Replace default export with named export
  code = code.replace(/^export default (function|const) (\w+)/m, (match, kind, name) => {
    if (kind === "function") return `export ${kind} ${name}`
    // For "const X = ..." pattern, keep as function conversion below
    return match
  })

  code = code.replace(/^export default (\w+)/m, (match, name) => {
    // Check if it's a function expression or just a variable
    if (code.includes(`const ${name} = (`) || code.includes(`const ${name} = function`)) {
      return match
    }
    // Simple component name
    return `export { ${name} }`
  })

  // 4. Replace `any` in function params with more specific types where obvious
  // (this is a best-effort pass for common patterns)
  code = code.replace(/\.map\(\((\w+), (\w+)\) =>/g, (m, item, idx) => {
    return `.map((${item}: any, ${idx}: number) =>`
  })
  code = code.replace(/\.map\((\w+) =>/g, (m, item) => {
    if (code.includes(`: ${item}`)) return m // already typed
    return `.map((${item}: any) =>`
  })

  // 5. Wrap className template literals with cn()
  code = code.replace(/className=\{`([^`]*)`\}/g, (match, content) => {
    const parts = content.split(/\$\{[^}]+\}/)
    const hasDynamic = content.includes("${")
    if (hasDynamic) {
      // Convert template literal to cn()
      const vars = content.match(/\$\{([^}]+)\}/g)
      if (vars) {
        const staticParts = content.split(/\$\{[^}]+\}/)
        let cnArgs = staticParts.map(s => s.trim() ? `"${s.trim()}"` : "").filter(Boolean)
        // Add variable className references
        for (const v of vars) {
          const varName = v.slice(2, -1)
          cnArgs.push(varName)
        }
        if (cnArgs.length > 0) {
          return `className={cn(${cnArgs.join(", ")})}`
        }
      }
      return match
    }
    return `className="${content}"`
  })

  // 6. Replace simple `className={variable}` with `cn(variable)`
  code = code.replace(/className=\{(\w+)\}/g, (match, varName) => {
    if (varName === "className" || varName === "cn") return match
    return `className={cn(${varName})}`
  })

  if (code !== original) {
    fs.writeFileSync(file, code, "utf-8")
    console.log(`  ✓ ${rel}`)
  } else {
    console.log(`  - ${rel} (no changes)`)
  }
}

console.log("\nDone.")
