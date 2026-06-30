#!/usr/bin/env node
/**
 * 将 src/components、src/utils 的 demos 同步到 .ai/docs 对应目录
 * 用法（仓库根目录）：
 *   node .ai/skills/sync-ai-docs/scripts/sync-ai-docs-demos.mjs
 *   node .ai/skills/sync-ai-docs/scripts/sync-ai-docs-demos.mjs Button DatePicker
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../../../../')
const docsDir = path.join(rootDir, '.ai', 'docs')
const filterNames = process.argv.slice(2).map((s) => s.trim()).filter(Boolean)

function syncDemos(srcBase, destBase) {
  const srcDemos = path.join(srcBase, 'demos')
  if (!fs.existsSync(srcDemos)) return 0
  let count = 0

  function walk(srcDir, destDir) {
    fs.mkdirSync(destDir, { recursive: true })
    for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
      const srcPath = path.join(srcDir, entry.name)
      const destPath = path.join(destDir, entry.name)
      if (entry.isDirectory()) walk(srcPath, destPath)
      else if (/\.(tsx|jsx|ts)$/.test(entry.name)) {
        fs.copyFileSync(srcPath, destPath)
        count++
      }
    }
  }

  walk(srcDemos, path.join(destBase, 'demos'))
  return count
}

let total = 0
for (const kind of ['components', 'utils']) {
  const srcKind = path.join(rootDir, 'src', kind)
  const docKind = path.join(docsDir, kind)
  if (!fs.existsSync(srcKind) || !fs.existsSync(docKind)) continue

  for (const name of fs.readdirSync(srcKind).sort()) {
    if (filterNames.length && !filterNames.includes(name)) continue
    const srcBase = path.join(srcKind, name)
    const destBase = path.join(docKind, name)
    if (!fs.statSync(srcBase).isDirectory() || !fs.existsSync(destBase)) continue
    const n = syncDemos(srcBase, destBase)
    if (n) console.log(`  ${kind}/${name}: ${n} files`)
    total += n
  }
}

console.log(`\nSynced ${total} demo files.`)
