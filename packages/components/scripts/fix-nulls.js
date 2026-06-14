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

for (const file of files) {
  let code = fs.readFileSync(file, "utf-8")
  const original = code

  // Fix 'ctx' is possibly 'null' -> add non-null assertion
  code = code.replace(
    /(\w+)\.getContext\('2d'([^)]*)\)/g,
    '($1 as HTMLCanvasElement).getContext(\'2d\'$2)!'
  )
  
  // Fix 'canvas' is possibly 'null' after guard
  code = code.replace(
    /const ctx = (.+)\.getContext/,
    'const ctx = $1!.getContext'
  )

  // Fix .current.style on refs that might be null
  code = code.replace(
    /(\w+)Ref\.current\.style/g,
    '$1Ref.current!.style'
  )

  // Fix ref.current that leads to 'never' properties
  code = code.replace(
    /(\w+)Ref\.current((?:\.\w+)*)?\.(offsetWidth|offsetHeight|clientWidth|clientHeight|scrollTop|scrollLeft|getBoundingClientRect|focus|blur|scrollIntoView)/g,
    '$1Ref.current!$2.$3'
  )

  // 'card' is of type 'unknown' -> cast to any
  code = code.replace(
    /\bcard\.(current|style|classList|querySelector|children|parentElement)/g,
    '(card as any).$1'
  )

  // Fix group.current unknown type
  code = code.replace(
    /\bgroup\.current\./g,
    'group.current!'
    )

  if (code !== original) {
    fs.writeFileSync(file, code, "utf-8")
    console.log(`  ✓ ${path.relative(effectsDir, file)}`)
  }
}
console.log("Done")
