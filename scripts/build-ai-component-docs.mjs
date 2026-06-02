// 从 src/components 各目录的 index.zh-CN.md 与 demos 生成 .ai/docs/components/
// 运行：npm run build:ai-docs
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const srcComponentsDir = path.join(rootDir, 'src', 'components')
const outDir = path.join(rootDir, '.ai', 'docs', 'components')
const mappingPath = path.join(rootDir, '.ai', 'docs', 'mapping.json')

const DEMO_MAX_LINES = 150

function readFileSafe(p) {
  try {
    return fs.readFileSync(p, 'utf8')
  } catch {
    return null
  }
}

function stripFrontmatter(content) {
  const m = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/)
  if (!m) return content
  return content.slice(m[0].length)
}

function parseFrontmatterTitle(content) {
  const m = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/)
  if (!m) return null
  const fm = m[0]
  const title = fm.match(/^title:\s*(.+)$/m)
  return title ? title[1].trim() : null
}

function parseWhenToUse(sectionText) {
  const m = sectionText.match(/## 何时使用\r?\n([\s\S]*?)(?=\r?\n## |\r?\n# |\r?\n$)/)
  if (!m) return []
  return m[1]
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('-'))
    .map((line) => line.replace(/^-\s*/, '').trim())
    .filter(Boolean)
}

/** @param {boolean} [hasDefault=true] */
function parseTableRow(line, hasDefault = true) {
  const parts = line.split('|').map((c) => c.trim())
  if (parts.length < 4) return null
  const inner = parts.slice(1, -1)
  if (inner.length < 3) return null
  const name = inner[0]
  const desc = inner[1]
  if (hasDefault && inner.length >= 4) {
    const def = inner[inner.length - 1]
    const type = inner.slice(2, -1).join(' | ')
    return { name, desc, type, def }
  }
  const type = inner.slice(2).join(' | ')
  return { name, desc, type, def: undefined }
}

function findSectionBlocks(body) {
  const blocks = []
  const re = /^## (.+)$/gm
  let match
  const starts = []
  while ((match = re.exec(body)) !== null) {
    starts.push({ title: match[1].trim(), index: match.index, headerLen: match[0].length })
  }
  for (let i = 0; i < starts.length; i++) {
    const start = starts[i].index + starts[i].headerLen
    const end = i + 1 < starts.length ? starts[i + 1].index : body.length
    blocks.push({ title: starts[i].title, text: body.slice(start, end) })
  }
  const introEnd = starts.length ? starts[0].index : body.length
  blocks.unshift({ title: '_intro', text: body.slice(0, introEnd) })
  return blocks
}

function parsePropTables(text, defaultKey) {
  const result = {}
  const tableRe = /^(#{3,4}) 属性\r?\n\r?\n(\|[\s\S]*?)(?=\r?\n#{2,4} |\r?\n### Ref|\r?\n#### Ref|\r?\n## |\r?\n$)/gm
  let match
  while ((match = tableRe.exec(text)) !== null) {
    const table = match[2]
    const lines = table.split('\n').filter((l) => l.startsWith('|') && !l.includes('---'))
    if (lines.length < 2) continue

    const before = text.slice(0, match.index)
    const sectionHeaders = [...before.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim())
    let key = defaultKey
    const lastSection = sectionHeaders[sectionHeaders.length - 1]
    if (lastSection && lastSection !== 'API' && lastSection.includes('.')) {
      key = lastSection
    } else if (lastSection && lastSection !== 'API' && lastSection !== '何时使用' && lastSection !== '代码演示') {
      if (lastSection.includes('.')) key = lastSection
    }

    const props = {}
    for (const line of lines.slice(1)) {
      const row = parseTableRow(line)
      if (!row || row.name === '属性') continue
      const defPart = row.def && row.def !== '-' ? `，默认 ${row.def}` : ''
      props[row.name] = `${row.type} — ${row.desc}${defPart}`
    }
    if (Object.keys(props).length) {
      result[key] = { ...(result[key] || {}), ...props }
    }
  }

  const refRe = /^(#{3,4}) Ref\r?\n\r?\n(\|[\s\S]*?)(?=\r?\n#{2,4} |\r?\n## |\r?\n$)/gm
  while ((match = refRe.exec(text)) !== null) {
    const table = match[2]
    const lines = table.split('\n').filter((l) => l.startsWith('|') && !l.includes('---'))
    const before = text.slice(0, match.index)
    const sectionHeaders = [...before.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim())
    let key = defaultKey
    const lastSection = sectionHeaders[sectionHeaders.length - 1]
    if (lastSection && lastSection !== 'API' && lastSection.includes('.')) {
      key = lastSection
    }
    const refKey = `${key}.ref`
    const props = {}
    for (const line of lines.slice(1)) {
      const row = parseTableRow(line, false)
      if (!row || row.name === '属性') continue
      props[row.name] = `${row.type} — ${row.desc}`
    }
    if (Object.keys(props).length) result[refKey] = props
  }

  return result
}

function collectDemos(text) {
  const demos = []
  const re = /<code src="\.\/demos\/([^"]+)"\s*\/?>/g
  let m
  while ((m = re.exec(text)) !== null) {
    if (!demos.includes(m[1])) demos.push(m[1])
  }
  return demos
}

function copyDemos(componentName, demoFiles) {
  const srcDemos = path.join(srcComponentsDir, componentName, 'demos')
  const destDemos = path.join(outDir, componentName, 'demos')
  if (!fs.existsSync(srcDemos)) return []
  fs.mkdirSync(destDemos, { recursive: true })
  const copied = []
  if (demoFiles.length) {
    for (const file of demoFiles) {
      const src = path.join(srcDemos, file)
      const dest = path.join(destDemos, file)
      if (!fs.existsSync(src)) continue
      fs.mkdirSync(path.dirname(dest), { recursive: true })
      fs.copyFileSync(src, dest)
      copied.push(file)
    }
  } else {
    const walk = (dir, rel = '') => {
      for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
        const r = rel ? `${rel}/${ent.name}` : ent.name
        if (ent.isDirectory()) walk(path.join(dir, ent.name), r)
        else if (/\.(tsx|jsx|ts|js)$/.test(ent.name)) {
          const src = path.join(dir, ent.name)
          const dest = path.join(destDemos, r)
          fs.mkdirSync(path.dirname(dest), { recursive: true })
          fs.copyFileSync(src, dest)
          copied.push(r)
        }
      }
    }
    walk(srcDemos)
  }
  return copied
}

function buildExampleMd(componentName, copiedDemos) {
  const lines = [
    `# ${componentName} Example`,
    '',
    '以下示例位于本目录 `demos/`（由 `src/components/' +
      componentName +
      '/demos` 同步，运行 `npm run build:ai-docs` 更新）。',
    '',
    '业务代码引入：`import { ' +
      componentName +
      ' } from \'lyrixi-mobile\'`',
    ''
  ]
  if (!copiedDemos.length) {
    lines.push('_暂无 demo 文件，请查阅 `-rules.md` 与 `-props.json`。_')
    return lines.join('\n')
  }
  for (const file of copiedDemos) {
    const full = path.join(outDir, componentName, 'demos', file)
    let code = readFileSafe(full) || ''
    const codeLines = code.split('\n')
    if (codeLines.length > DEMO_MAX_LINES) {
      code =
        codeLines.slice(0, DEMO_MAX_LINES).join('\n') +
        '\n// ... 其余见 demos/' +
        file +
        ' 全文'
    }
    lines.push(`## demos/${file}`, '', '```tsx', code.trim(), '```', '')
  }
  return lines.join('\n')
}

function buildRulesMd(componentName, title, whenToUse, subKeys, demos) {
  const lines = [
    `# ${componentName} Rules`,
    '',
    `> 源文档：\`src/components/${componentName}/index.zh-CN.md\`。更新后请执行 \`npm run build:ai-docs\`。`,
    '',
    '## 必须使用',
    `- 从 \`lyrixi-mobile\` 引入 \`${componentName}\`，**禁止**自造同类 UI。`,
    `- 子组件写法：\`${componentName}.Sub\`（与库导出一致）。`,
    '',
    '## 何时使用'
  ]
  if (whenToUse.length) {
    whenToUse.forEach((w) => lines.push(`- ${w}`))
  } else {
    lines.push(`- 见 \`src/components/${componentName}/index.zh-CN.md\` 中「何时使用」。`)
  }
  const subs = subKeys.filter((k) => k.includes('.') && !k.endsWith('.ref'))
  if (subs.length) {
    lines.push('', '## 子组件')
    subs.forEach((s) => lines.push(`- \`${s}\``))
  }
  if (demos.length) {
    lines.push('', '## Demo 索引（本目录 `demos/`）')
    demos.forEach((d) => lines.push(`- \`demos/${d}\``))
  }
  lines.push('', '## 查阅顺序', `- Props：\`${componentName}-props.json\``, `- 示例：\`${componentName}-example.md\``)
  return lines.join('\n')
}

function buildKeywords(componentName, title) {
  const parts = [componentName]
  if (title && title !== componentName) parts.push(title)
  return parts.join('|')
}

function processComponent(componentName) {
  const docPath = path.join(srcComponentsDir, componentName, 'index.zh-CN.md')
  const raw = readFileSafe(docPath)
  if (!raw) return null

  const title = parseFrontmatterTitle(raw) || componentName
  const body = stripFrontmatter(raw)
  const blocks = findSectionBlocks(body)
  const intro = blocks.find((b) => b.title === '_intro')?.text || ''
  const whenBlock = blocks.find((b) => b.title === '何时使用')
  const whenToUse = whenBlock
    ? parseWhenToUse('## 何时使用\n' + whenBlock.text)
    : parseWhenToUse(intro)

  const props = parsePropTables(body, componentName)
  const demos = collectDemos(body)
  const subKeys = Object.keys(props)

  const compOut = path.join(outDir, componentName)
  fs.mkdirSync(compOut, { recursive: true })

  const copiedDemos = copyDemos(componentName, demos)

  fs.writeFileSync(
    path.join(compOut, `${componentName}-props.json`),
    JSON.stringify(props, null, 2) + '\n',
    'utf8'
  )
  fs.writeFileSync(
    path.join(compOut, `${componentName}-rules.md`),
    buildRulesMd(componentName, title, whenToUse, subKeys, copiedDemos),
    'utf8'
  )
  fs.writeFileSync(
    path.join(compOut, `${componentName}-example.md`),
    buildExampleMd(componentName, copiedDemos),
    'utf8'
  )

  return {
    keywords: buildKeywords(componentName, title),
    name: componentName,
    props: `.ai/docs/components/${componentName}/${componentName}-props.json`,
    rule: `.ai/docs/components/${componentName}/${componentName}-rules.md`,
    example: `.ai/docs/components/${componentName}/${componentName}-example.md`
  }
}

function main() {
  const names = fs
    .readdirSync(srcComponentsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => fs.existsSync(path.join(srcComponentsDir, name, 'index.zh-CN.md')))
    .sort()

  fs.mkdirSync(outDir, { recursive: true })

  const components = []
  for (const name of names) {
    const entry = processComponent(name)
    if (entry) components.push(entry)
    console.log(`ok ${name}`)
  }

  const mapping = JSON.parse(readFileSafe(mappingPath) || '{"components":[],"utils":[]}')
  mapping.components = components
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2) + '\n', 'utf8')

  const readme = `# 组件 AI 文档

与 \`src/components/\` 一一对应，供 AI **仅查阅本目录** 生成业务代码，避免幻觉。

| 文件 | 说明 |
|------|------|
| \`{Name}-props.json\` | Props / Ref（由 \`index.zh-CN.md\` API 表生成） |
| \`{Name}-rules.md\` | 何时使用、子组件、必须使用库组件 |
| \`{Name}-example.md\` | 示例索引与代码摘录 |
| \`demos/\` | 与 \`src/components/{Name}/demos\` 同步的示例源码 |

**更新：** 修改组件文档或 demo 后执行：

\`\`\`bash
npm run build:ai-docs
\`\`\`

索引：[\`../mapping.json\`](../mapping.json)
`
  fs.writeFileSync(path.join(outDir, 'README.md'), readme, 'utf8')

  console.log(`\nDone: ${components.length} components → ${outDir}`)
}

main()
