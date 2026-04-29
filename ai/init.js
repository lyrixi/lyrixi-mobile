/**
 * npx终端不支持ts, 所以这里使用js
 */
const fs = require('node:fs')
const path = require('node:path')

function copyRecursive(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true })
    for (const name of fs.readdirSync(src)) {
      copyRecursive(path.join(src, name), path.join(dest, name))
    }
    return
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.copyFileSync(src, dest)
}

function main() {
  const projectRoot = process.cwd()
  const packageRoot = path.join(__dirname, '..')
  const aiDir = path.join(packageRoot, 'ai')

  if (!fs.existsSync(aiDir)) {
    console.error('❌ Missing ai/ in lyrixi-mobile package:', aiDir)
    process.exit(1)
  }

  const cursorDir = path.join(projectRoot, '.cursor')
  const tasks = [
    {
      label: 'lyrixi-knowledge',
      from: path.join(aiDir, 'lyrixi-knowledge'),
      to: path.join(cursorDir, 'lyrixi-knowledge')
    },
    { label: 'rules', from: path.join(aiDir, 'rules'), to: path.join(cursorDir, 'rules') },
    { label: 'skills', from: path.join(aiDir, 'skills'), to: path.join(cursorDir, 'skills') }
  ]

  for (const { label, from, to } of tasks) {
    if (!fs.existsSync(from)) {
      console.error(`❌ Missing source: ${path.relative(packageRoot, from)}`)
      process.exit(1)
    }
    copyRecursive(from, to)
    console.log(`✅ [${label}] → ${path.relative(projectRoot, to)}`)
  }
}

main()
