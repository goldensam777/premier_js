const fs = require("fs")
const path = require("path")

const file = path.join(__dirname, "..", "src", "effects/backgrounds/LiquidEther/LiquidEther.tsx")
let code = fs.readFileSync(file, "utf-8")

// Add [key: string]: any to EVERY class definition
code = code.replace(
  /(class \w+(?: extends \w+)?\s*\{)\s*constructor/g,
  '$1\n[key: string]: any\nconstructor'
)

// Fix method params: methodName(param) { -> methodName(param: any) {
// But limit to method-like indentation
code = code.replace(
  /^(\s+)(\w+)\((\w+)\)\s*\{$/gm,
  (match, indent, name, param) => {
    if (['if','for','while','switch','catch','return','throw','var','let','const'].includes(name)) return match
    if (name === 'constructor') return match // already has any types
    return `${indent}${name}(${param}: any) {`
  }
)

// Two param methods
code = code.replace(
  /^(\s+)(\w+)\((\w+),\s*(\w+)\)\s*\{$/gm,
  (match, indent, name, p1, p2) => {
    if (['if','for','while','switch','catch','return','throw','var','let','const'].includes(name)) return match
    if (name === 'constructor') {
      // constructor(a, b) -> constructor(a: any, b: any)
      return `${indent}constructor(${p1}: any, ${p2}: any) {`
    }
    return `${indent}${name}(${p1}: any, ${p2}: any) {`
  }
)

// Three param methods
code = code.replace(
  /^(\s+)(\w+)\((\w+),\s*(\w+),\s*(\w+)\)\s*\{$/gm,
  (match, indent, name, p1, p2, p3) => {
    if (['if','for','while','switch','catch','return','throw','var','let','const'].includes(name)) return match
    return `${indent}${name}(${p1}: any, ${p2}: any, ${p3}: any) {`
  }
)

// Fix constructor with single param: constructor(param) {
code = code.replace(
  /constructor\((\w+)\)\s*\{/g,
  'constructor($1: any) {'
)

// Fix constructor with two params
code = code.replace(
  /constructor\((\w+),\s*(\w+)\)\s*\{/g,
  'constructor($1: any, $2: any) {'
)

// Fix constructor with three params
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

fs.writeFileSync(file, code, "utf-8")
console.log("LiquidEther fully fixed")
