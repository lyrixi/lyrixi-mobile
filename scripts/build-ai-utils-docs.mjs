// 从 src/utils 各目录的 index.zh-CN.md 与 demos 生成 .ai/docs/utils/
// 运行：npm run build:ai-docs
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const srcUtilsDir = path.join(rootDir, 'src', 'utils')
const outDir = path.join(rootDir, '.ai', 'docs', 'utils')
const mappingPath = path.join(rootDir, '.ai', 'docs', 'mapping.json')

const DEMO_MAX_LINES = 150

/** @type {Record<string, string>} */
const KEYWORDS = {
  ArrayUtil: 'ArrayUtil|数组|树形|deepTree|flattenTree',
  AssetUtil: 'AssetUtil|资源|图片|脚本|loadRemoteJs',
  Bridge: 'Bridge|桥接|JSSDK|微信|钉钉',
  Clipboard: 'Clipboard|剪贴板|复制',
  DateUtil: 'DateUtil|日期|时间|format|diff|compare',
  Debugger: 'Debugger|调试|vconsole',
  Device: 'Device|设备|平台|UA|platform|os',
  DOMUtil: 'DOMUtil|classNames|DOM|variables',
  EventUtil: 'EventUtil|事件|emit|on',
  FullScreen: 'FullScreen|全屏',
  GeoUtil: 'GeoUtil|地理|坐标|距离|经纬度',
  HistoryUtil: 'HistoryUtil|历史记录|路由返回|navigate|popstate',
  LocaleUtil: 'LocaleUtil|国际化|locale|多语言|languageMap',
  Logger: 'Logger|日志|uploadLogs',
  MathUtil: 'MathUtil|数学|variableSize',
  ObjectUtil: 'ObjectUtil|对象|debounce|cloneDeep|isEmpty|pickBy',
  Request: 'Request|请求|axios|get|post|接口',
  Storage: 'Storage|存储|localStorage|sessionStorage|useCacheState',
  Theme: 'Theme|主题|字体|hexToRgb|setFontSize',
  VariablesUtil:
    'VariablesUtil|变量|主题色|getColorValue|getHeightValue|getColorClass|getHeightClass|lyrixi-color|lyrixi-height'
}

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

function parsePropTables(text, defaultKey) {
  const result = {}
  const tableRe =
    /^(#{3,4}) (?:属性|方法)\r?\n\r?\n(\|[\s\S]*?)(?=\r?\n#{2,4} |\r?\n## |\r?\n$)/gm
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
    }

    const props = {}
    for (const line of lines.slice(1)) {
      const row = parseTableRow(line, false)
      if (!row || row.name === '属性' || row.name === '方法') continue
      props[row.name] = `${row.type} — ${row.desc}`
    }
    if (Object.keys(props).length) {
      result[key] = { ...(result[key] || {}), ...props }
    }
  }
  return result
}

function parseApiMethodSections(text, utilName) {
  const result = {}
  const apiMatch = text.match(/## API\r?\n([\s\S]*?)(?=\r?\n## [^#]|\r?\n$)/)
  if (!apiMatch) return result

  const apiText = apiMatch[1]
  const re = /^### (.+)$/gm
  const headers = []
  let m
  while ((m = re.exec(apiText)) !== null) {
    headers.push({ title: m[1].trim(), index: m.index + m[0].length })
  }

  for (let i = 0; i < headers.length; i++) {
    const start = headers[i].index
    const end = i + 1 < headers.length ? headers[i + 1].index - headers[i + 1].title.length - 4 : apiText.length
    const block = apiText.slice(start, end).trim()
    const title = headers[i].title

    const desc =
      block
        .split('\n')
        .map((l) => l.trim())
        .find((l) => l && !l.startsWith('**') && !l.startsWith('-') && !l.startsWith('```')) || '见 index.zh-CN.md API 节'

    let key = utilName
    if (title.startsWith(`${utilName}.`)) {
      key = title.split('(')[0].trim()
    } else {
      const methodName = title.split('(')[0].trim()
      key = `${utilName}.${methodName}`
    }
    result[key] = desc
  }
  return result
}

function parseNamedSections(text, utilName) {
  const result = {}
  const re = /^## ((?:\w+\.)?\w+)\r?\n([\s\S]*?)(?=\r?\n## |\r?\n$)/gm
  let m
  while ((m = re.exec(text)) !== null) {
    const section = m[1].trim()
    if (['示例', 'API', '何时使用', '代码演示'].includes(section)) continue
    if (!section.startsWith(utilName) && !section.includes('.')) continue
    const body = m[2].trim()
    const desc =
      body
        .split('\n')
        .map((l) => l.trim())
        .find((l) => l && !l.startsWith('```') && !l.startsWith('<code')) || '见 index.zh-CN.md'
    const key = section.includes('.') ? section : `${utilName}.${section}`
    result[key] = desc
  }
  return result
}

function resolveMainSource(utilDir) {
  const indexPath = path.join(utilDir, 'index.ts')
  let content = readFileSafe(indexPath)
  if (!content) return null

  const hasLocalObject = /(?:const|let)\s+\w+\s*=\s*\{/.test(content)
  const reExport = content.match(/^import\s+(\w+)\s+from\s+'\.\/([^']+)'/m)
  if (reExport && !hasLocalObject) {
    const mainPath = path.join(utilDir, `${reExport[2]}.ts`)
    content = readFileSafe(mainPath) || content
  }
  return content
}

function extractObjectMembers(content, utilName) {
  const result = {}
  const objMatch = content.match(/(?:const|let)\s+\w+\s*=\s*\{([\s\S]*)\n\}\s*\n\s*export default/m)
  if (!objMatch) return result

  const body = objMatch[1]
  const lines = body.split('\n')
  let lastComment = ''
  let inBlockComment = false

  for (const line of lines) {
    if (line.includes('/**')) {
      inBlockComment = true
      continue
    }
    if (inBlockComment) {
      if (line.includes('*/')) inBlockComment = false
      continue
    }

    const slashComment = line.match(/^\s*\/\/\s*(.+)/)
    if (slashComment) {
      lastComment = slashComment[1].trim()
      continue
    }

    const getterMatch = line.match(/^\s*get\s+(\w+)\s*\(/)
    if (getterMatch) {
      result[`${utilName}.${getterMatch[1]}`] = lastComment || 'getter，见源码'
      lastComment = ''
      continue
    }

    const methodMatch = line.match(/^\s{2}(\w+)\s*\(/)
    if (methodMatch && !methodMatch[1].startsWith('_')) {
      result[`${utilName}.${methodMatch[1]}`] = lastComment || '见源码与 demos'
      lastComment = ''
      continue
    }

    const keyMatch = line.match(/^\s{2}(\w+)\s*[:,]/)
    if (keyMatch && !['if', 'for', 'return', 'typeof'].includes(keyMatch[1])) {
      result[`${utilName}.${keyMatch[1]}`] = lastComment || '见源码与 demos'
      lastComment = ''
    }
  }

  const utilsMatch = body.match(/utils:\s*\{([^}]+)\}/)
  if (utilsMatch) {
    for (const nm of utilsMatch[1].matchAll(/(\w+)\s*[,:\n]/g)) {
      result[`${utilName}.utils.${nm[1]}`] = '见源码与 demos'
    }
  }

  return result
}

function flattenProps(parsed) {
  const flat = {}
  for (const [key, val] of Object.entries(parsed)) {
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      for (const [subKey, subVal] of Object.entries(val)) {
        flat[`${key}.${subKey}`] = subVal
      }
    } else {
      flat[key] = val
    }
  }
  return flat
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

function copyDemos(utilName, demoFiles) {
  const srcDemos = path.join(srcUtilsDir, utilName, 'demos')
  const destDemos = path.join(outDir, utilName, 'demos')
  if (!fs.existsSync(srcDemos)) return []
  fs.mkdirSync(destDemos, { recursive: true })
  const copied = []

  const walk = (dir, rel = '') => {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const r = rel ? `${rel}/${ent.name}` : ent.name
      if (ent.isDirectory()) walk(path.join(dir, ent.name), r)
      else if (/\.(tsx|jsx|ts|js)$/.test(ent.name)) {
        const src = path.join(dir, ent.name)
        const dest = path.join(destDemos, r)
        fs.mkdirSync(path.dirname(dest), { recursive: true })
        fs.copyFileSync(src, dest)
        if (!copied.includes(r)) copied.push(r)
      }
    }
  }
  walk(srcDemos)

  if (demoFiles.length) {
    const ordered = [
      ...demoFiles.filter((f) => copied.includes(f)),
      ...copied.filter((f) => !demoFiles.includes(f))
    ]
    return ordered
  }
  return copied.sort()
}

function buildExampleMd(utilName, copiedDemos) {
  const lines = [
    `# ${utilName} Example`,
    '',
    '以下示例位于本目录 `demos/`（由 `src/utils/' +
      utilName +
      '/demos` 同步，运行 `npm run build:ai-docs` 更新）。',
    '',
    '业务代码引入：`import { ' + utilName + " } from 'lyrixi-mobile'`",
    ''
  ]
  if (!copiedDemos.length) {
    lines.push('_暂无 demo 文件，请查阅 `-rules.md`、`-props.json` 与 `src/utils/' + utilName + '/`。_')
    return lines.join('\n')
  }
  for (const file of copiedDemos) {
    const full = path.join(outDir, utilName, 'demos', file)
    let code = readFileSafe(full) || ''
    const ext = path.extname(file).slice(1) || 'tsx'
    const codeLines = code.split('\n')
    if (codeLines.length > DEMO_MAX_LINES) {
      code =
        codeLines.slice(0, DEMO_MAX_LINES).join('\n') +
        '\n// ... 其余见 demos/' +
        file +
        ' 全文'
    }
    lines.push(`## demos/${file}`, '', '```' + ext, code.trim(), '```', '')
  }
  return lines.join('\n')
}

function buildRulesMd(utilName, whenToUse, subKeys, demos, hasZhDoc) {
  const srcDoc = hasZhDoc
    ? `\`src/utils/${utilName}/index.zh-CN.md\``
    : `\`src/utils/${utilName}/\` 源码`
  const lines = [
    `# ${utilName} Rules`,
    '',
    `> 源文档：${srcDoc}。更新后请执行 \`npm run build:ai-docs\`。`,
    '',
    '## 必须使用',
    `- 从 \`lyrixi-mobile\` 引入 \`${utilName}\`，**禁止**自造同类工具函数。`,
    `- 类名拼接等 DOM 场景用 \`DOMUtil.classNames\`；日期用 \`DateUtil\`；请求用 \`Request\`；存储用 \`Storage\`。`,
    '',
    '## 何时使用'
  ]
  if (whenToUse.length) {
    whenToUse.forEach((w) => lines.push(`- ${w}`))
  } else {
    lines.push(`- 见 ${srcDoc} 说明与 demos。`)
  }
  const subs = subKeys.filter((k) => k.includes('.') && k.startsWith(`${utilName}.`))
  if (subs.length) {
    lines.push('', '## API 索引（节选）')
    subs.slice(0, 30).forEach((s) => lines.push(`- \`${s}\``))
    if (subs.length > 30) lines.push(`- _共 ${subs.length} 项，见 \`${utilName}-props.json\`_`)
  }
  if (demos.length) {
    lines.push('', '## Demo 索引（本目录 `demos/`）')
    demos.forEach((d) => lines.push(`- \`demos/${d}\``))
  }
  lines.push('', '## 查阅顺序', `- API：\`${utilName}-props.json\``, `- 示例：\`${utilName}-example.md\``)
  return lines.join('\n')
}

function listExportedUtils() {
  const indexTs = readFileSafe(path.join(rootDir, 'src', 'index.ts')) || ''
  const re = /export \{ default as (\w+) \} from '\.\/utils\/(\w+)'/g
  const names = []
  let m
  while ((m = re.exec(indexTs)) !== null) {
    names.push(m[1])
  }
  return [...new Set(names)].sort()
}

function processUtil(utilName) {
  const utilDir = path.join(srcUtilsDir, utilName)
  if (!fs.existsSync(utilDir)) return null

  const docPath = path.join(utilDir, 'index.zh-CN.md')
  const raw = readFileSafe(docPath)
  const hasZhDoc = Boolean(raw)

  const title = raw ? parseFrontmatterTitle(raw) || utilName : utilName
  const body = raw ? stripFrontmatter(raw) : ''
  const whenToUse = body ? parseWhenToUse(body) : []

  let props = {}
  if (body) {
    props = { ...props, ...parsePropTables(body, utilName) }
    props = { ...props, ...parseApiMethodSections(body, utilName) }
    props = { ...props, ...parseNamedSections(body, utilName) }
  }

  const source = resolveMainSource(utilDir)
  if (source) {
    const fromSource = extractObjectMembers(source, utilName)
    for (const [k, v] of Object.entries(fromSource)) {
      if (!props[k]) props[k] = v
    }
  }

  // 去掉误解析的 JSDoc 参数名（纯小写单词且不在源码方法列表中）
  const sourceMethods = source
    ? new Set(
        [...(source.matchAll(/^\s{2}(\w+)\s*\(/gm) || [])].map((m) => `${utilName}.${m[1]}`)
      )
    : new Set()
  for (const key of Object.keys(props)) {
    if (!key.startsWith(`${utilName}.`)) continue
    const short = key.slice(utilName.length + 1)
    if (/^[a-z]+$/.test(short) && !sourceMethods.has(key)) {
      delete props[key]
    }
  }

  if (utilName === 'HistoryUtil') {
    props[`${utilName}`] =
      '构造函数 + 静态方法；实例方法 navigate/back。见 HistoryUtil/index.ts 与 types'
  }

  const flatProps = flattenProps(props)
  const demos = body ? collectDemos(body) : []
  const subKeys = Object.keys(flatProps)

  const utilOut = path.join(outDir, utilName)
  fs.mkdirSync(utilOut, { recursive: true })

  const copiedDemos = copyDemos(utilName, demos)

  fs.writeFileSync(
    path.join(utilOut, `${utilName}-props.json`),
    JSON.stringify(flatProps, null, 2) + '\n',
    'utf8'
  )
  fs.writeFileSync(
    path.join(utilOut, `${utilName}-rules.md`),
    buildRulesMd(utilName, whenToUse, subKeys, copiedDemos, hasZhDoc),
    'utf8'
  )
  fs.writeFileSync(
    path.join(utilOut, `${utilName}-example.md`),
    buildExampleMd(utilName, copiedDemos),
    'utf8'
  )

  return {
    keywords: KEYWORDS[utilName] || utilName,
    name: utilName,
    props: `.ai/docs/utils/${utilName}/${utilName}-props.json`,
    rule: `.ai/docs/utils/${utilName}/${utilName}-rules.md`,
    example: `.ai/docs/utils/${utilName}/${utilName}-example.md`
  }
}

function main() {
  const names = listExportedUtils()
  fs.mkdirSync(outDir, { recursive: true })

  const utils = []
  for (const name of names) {
    const entry = processUtil(name)
    if (entry) utils.push(entry)
    console.log(`ok ${name}`)
  }

  const mapping = JSON.parse(readFileSafe(mappingPath) || '{"components":[],"utils":[]}')
  mapping.utils = utils
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2) + '\n', 'utf8')

  const readme = `# 工具 AI 文档

与 \`src/utils/\` 导出工具一一对应，供 AI **仅查阅本目录** 生成业务代码，避免幻觉。

| 文件 | 说明 |
|------|------|
| \`{Name}-props.json\` | API / 方法（由 \`index.zh-CN.md\`、源码与 demos 生成） |
| \`{Name}-rules.md\` | 何时使用、必须使用库工具、demo 索引 |
| \`{Name}-example.md\` | 示例索引与代码摘录 |
| \`demos/\` | 与 \`src/utils/{Name}/demos\` 同步的示例源码 |

**更新：** 修改工具文档或 demo 后执行：

\`\`\`bash
npm run build:ai-docs
\`\`\`

索引：[\`../mapping.json\`](../mapping.json)
`
  fs.writeFileSync(path.join(outDir, 'README.md'), readme, 'utf8')

  console.log(`\nDone: ${utils.length} utils → ${outDir}`)
}

main()
