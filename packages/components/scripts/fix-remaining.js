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

  // Fix 'ctx' is possibly 'null'
  code = code.replace(
    /(\w+)\.getContext\('2d'([^)]*)\)/g,
    '($1 as HTMLCanvasElement).getContext(\'2d\'$2)!'
  )

  // Fix variable implicitly has type 'any' 
  // let foo -> let foo: any
  // var foo -> var foo: any
  code = code.replace(
    /(let|var)\s+(\w+)\s*=\s*(?!new\s+|\[|null|undefined|true|false|\d+|['"])(?:getElementById|querySelector|document\.create)/g,
    '$1 $2: any = '
  )

  // Fix any declaration where a variable might need :any
  code = code.replace(
    /(let|var)\s+(\w+)\s*(?!=)\s*$/gm,
    '$1 $2: any'
  )

  // Fix 'propsRef.current' accessed as {} -> cast to any
  code = code.replace(
    /\bpropsRef\.current\.(\w+)/g,
    '(propsRef.current as any).$1'
  )

  // Fix 'resizeTimer' implicitly 'any'
  code = code.replace(
    /let\s+resizeTimer;/g,
    'let resizeTimer: any;'
  )

  // Fix 'stream' implicitly any
  code = code.replace(
    /let\s+stream;/g,
    'let stream: any;'
  )

  // Fix 'e' parameter implicitly any
  code = code.replace(
    /\bonClick=\{\((\w)\)\s*=>/g,
    'onClick={($1: any) =>'
  )
  code = code.replace(
    /\bonPointerMove=\{\((\w)\)\s*=>/g,
    'onPointerMove={($1: any) =>'
  )

  // Fix destructured props in arrow functions
  code = code.replace(
    /\(\{([^}]+)\}\)\s*=>/g,
    '({$1}: any) =>'
  )

  // Fix forEach callback params
  code = code.replace(
    /\.forEach\(\((\w+),\s*(\w+)\)\s*=>/g,
    '.forEach(($1: any, $2: any) =>'
  )
  code = code.replace(
    /\.forEach\(\((\w+)\)\s*=>/g,
    '.forEach(($1: any) =>'
  )

  // Fix .map callback params
  code = code.replace(
    /\.map\(\((\w+),\s*(\w+)\)\s*=>/g,
    '.map(($1: any, $2: any) =>'
  )
  code = code.replace(
    /\.map\(\((\w+)\)\s*=>/g,
    '.map(($1: any) =>'
  )

  if (code !== original) {
    fs.writeFileSync(file, code, "utf-8")
    console.log(`  ✓ ${path.relative(effectsDir, file)}`)
  }
}
console.log("Done")
