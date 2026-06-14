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

  // Add [key: string]: any to all classes that don't already have it
  code = code.replace(
    /(class \w+(?: extends \w+)?\s*\{)(?!\s*\[key: string\]: any)/g,
    '$1\n[key: string]: any'
  )

  // Fix constructor params: constructor(param) { -> constructor(param: any) {
  code = code.replace(
    /constructor\((\w+)\)\s*\{/g,
    'constructor($1: any) {'
  )
  code = code.replace(
    /constructor\((\w+),\s*(\w+)\)\s*\{/g,
    'constructor($1: any, $2: any) {'
  )
  code = code.replace(
    /constructor\((\w+),\s*(\w+),\s*(\w+)\)\s*\{/g,
    'constructor($1: any, $2: any, $3: any) {'
  )

  // Fix function keyword functions
  code = code.replace(
    /function\s+(\w+)\((\w+)\)\s*\{/g,
    'function $1($2: any) {'
  )
  code = code.replace(
    /function\s+(\w+)\((\w+),\s*(\w+)\)\s*\{/g,
    'function $1($2: any, $3: any) {'
  )
  code = code.replace(
    /function\s+(\w+)\((\w+),\s*(\w+),\s*(\w+)\)\s*\{/g,
    'function $1($2: any, $3: any, $4: any) {'
  )

  // Fix destructured arrow params: ({a, b}) => -> ({a, b}: any) =>
  code = code.replace(
    /\(\{([^}]+)\}\)\s*=>/g,
    '({$1}: any) =>'
  )

  // Fix method params (indented): methodName(param) { -> methodName(param: any) {
  code = code.replace(
    /^(\s+)(\w+)\((\w+)\)\s*\{$/gm,
    (match, indent, name, param) => {
      if (['if','for','while','switch','catch','return','throw','var','let','const'].includes(name)) return match
      return `${indent}${name}(${param}: any) {`
    }
  )
  code = code.replace(
    /^(\s+)(\w+)\((\w+),\s*(\w+)\)\s*\{$/gm,
    (match, indent, name, p1, p2) => {
      if (['if','for','while','switch','catch','return','throw','var','let','const'].includes(name)) return match
      return `${indent}${name}(${p1}: any, ${p2}: any) {`
    }
  )
  code = code.replace(
    /^(\s+)(\w+)\((\w+),\s*(\w+),\s*(\w+)\)\s*\{$/gm,
    (match, indent, name, p1, p2, p3) => {
      if (['if','for','while','switch','catch','return','throw','var','let','const'].includes(name)) return match
      return `${indent}${name}(${p1}: any, ${p2}: any, ${p3}: any) {`
    }
  )

  // Fix destructured method params: update({a, b}) { -> update({a, b}: any) {
  code = code.replace(
    /^(\s+)(\w+)\(\{([^}]+)\}\)\s*\{$/gm,
    '$1$2({$3}: any) {'
  )

  if (code !== original) {
    fs.writeFileSync(file, code, "utf-8")
    console.log(`  ✓ ${path.relative(effectsDir, file)}`)
  }
}
console.log("Done")
