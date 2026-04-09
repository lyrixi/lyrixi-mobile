#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

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

const projectRoot = process.cwd()
const packageRoot = path.join(__dirname, '..')
const sourceDir = path.join(packageRoot, 'ai')
const destDir = path.join(projectRoot, '.cursor', 'rules', 'lyrixi-mobile')

if (!fs.existsSync(sourceDir)) {
  console.error('❌ Missing ai/ in lyrixi-mobile package:', sourceDir)
  process.exit(1)
}

copyRecursive(sourceDir, destDir)
console.log(`✅ Lyrixi AI rules copied to ${path.relative(projectRoot, destDir)}`)
