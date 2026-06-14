const fs = require("fs")

const dir = "src/effects"

const files = [
  "animations/MetaBalls/MetaBalls.tsx",
  "animations/Ribbons/Ribbons.tsx",
  "animations/ShapeBlur/ShapeBlur.tsx",
  "animations/ScrollStack/ScrollStack.tsx",
  "backgrounds/Ferrofluid/Ferrofluid.tsx",
  "backgrounds/Lightfall/Lightfall.tsx",
  "backgrounds/Threads/Threads.tsx",
  "cards/CardSwap/CardSwap.tsx",
  "cards/ReflectiveCard/ReflectiveCard.tsx",
]

for (const f of files) {
  const filepath = `${dir}/${f}`
  let code = fs.readFileSync(filepath, "utf-8")
  const match = code.match(/export default (\w+)/)
  if (match) {
    const name = match[1]
    // Check if it's already a named export
    const hasNamedExport = code.includes(`export function ${name}`) || code.includes(`export const ${name}`)
    if (hasNamedExport) {
      // Just remove the default export line, the named export is already there
      code = code.replace(`\nexport default ${name};`, '')
    } else {
      // Convert "export default X;" to "export { X }"
      code = code.replace(`export default ${name};`, `\nexport { ${name} }`)
    }
    fs.writeFileSync(filepath, code, "utf-8")
    console.log(`✓ ${f}: ${name} (named=${hasNamedExport})`)
  } else {
    console.log(`✗ ${f}: no default export`)
  }
}
