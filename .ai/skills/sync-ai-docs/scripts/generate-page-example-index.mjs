#!/usr/bin/env node
/**
 * 为 .ai/docs/pages 各模板生成 *-example.md（薄索引，代码在 demos/）
 * 用法：node .ai/skills/sync-ai-docs/scripts/generate-page-example-index.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../../../../')
const pagesDir = path.join(rootDir, '.ai', 'docs', 'pages')
const catalogPath = path.join(pagesDir, 'catalog.json')

const IMPORT_HINTS = {
  List: 'import { Page, ListPagination } from \'lyrixi-mobile\'',
  Edit: 'import { Page, Form, Toast } from \'lyrixi-mobile\'',
  Detail: 'import { Page, Form, Card } from \'lyrixi-mobile\'',
  Report: 'import { Result, LocaleUtil } from \'lyrixi-mobile\''
}

function variantFromPath(templatePath) {
  const parts = templatePath.split('/')
  return parts[parts.length - 1]
}

function listDemoEntries(categoryDir, variant) {
  const demoRoot = path.join(categoryDir, 'demos', variant)
  if (!fs.existsSync(demoRoot)) return []
  const entries = [{ file: `demos/${variant}/index.tsx`, desc: '页面入口' }]

  function walk(rel) {
    const abs = path.join(demoRoot, rel)
    for (const name of fs.readdirSync(abs)) {
      if (name.startsWith('.')) continue
      const full = path.join(abs, name)
      const relPath = rel ? `${rel}/${name}` : name
      if (fs.statSync(full).isDirectory()) {
        if (['api', 'Header', 'Main', 'Footer', 'Content'].includes(name)) {
          entries.push({ file: `demos/${variant}/${relPath}`, desc: `${name} 模块` })
        }
        walk(relPath)
      }
    }
  }
  walk('')
  return entries
}

function generateExample(entry, categoryDir, category) {
  const variant = variantFromPath(entry.templatePath)
  const title = entry.title
  const importLine = IMPORT_HINTS[entry.category] || `import { Page } from 'lyrixi-mobile'`
  const demoEntries = listDemoEntries(categoryDir, variant)

  const lines = [
    `# ${variant} Example — ${title}`,
    '',
    `模板 ID：\`${entry.id}\` · 源码目录 [\`demos/${variant}/\`](./demos/${variant}/)`,
    '',
    '需要具体写法时 **Read `demos/` 下对应文件**；可替换项见 `' + `${variant}-props.ts\`。`,
    '',
    `业务代码引入（示例）：\`${importLine}\``,
    '',
    '## Demo 索引',
    '',
    '| 路径 | 说明 |',
    '|------|------|',
    ...demoEntries.map(({ file, desc }) => `| [${file}](./${file}) | ${desc} |`),
    '',
    '## 查阅顺序',
    '',
    `1. \`${variant}-props.ts\` — create-page 问答映射的可替换项`,
    `2. \`${variant}-rules.md\` — 何时用、目录约定`,
    `3. \`demos/${variant}/\` — 完整模板源码`,
    ''
  ]

  return lines.join('\n')
}

function main() {
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'))
  for (const entry of catalog.pages) {
    const categoryDir = path.join(pagesDir, entry.category)
    const variant = variantFromPath(entry.templatePath)
    const outPath = path.join(categoryDir, `${variant}-example.md`)
    fs.writeFileSync(outPath, generateExample(entry, categoryDir, entry.category), 'utf8')
    console.log(`  ${path.relative(rootDir, outPath)}`)
  }
  console.log(`\nGenerated ${catalog.pages.length} page example indexes.`)
}

main()
