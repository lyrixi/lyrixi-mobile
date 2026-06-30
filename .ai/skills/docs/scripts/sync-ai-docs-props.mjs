#!/usr/bin/env node
/**
 * 从 src 同步 API / Props 到 .ai/docs *-props.ts
 * - utils：从 index.ts 提取公开方法，合并 namespace（保留已有 JSDoc）
 * - components：从 types/*.types.ts 合并缺失的公开 interface/type
 *
 * 用法（仓库根目录）：
 *   node .ai/skills/docs/scripts/sync-ai-docs-props.mjs
 *   node .ai/skills/docs/scripts/sync-ai-docs-props.mjs ArrayUtil NavBar
 *   node .ai/skills/docs/scripts/sync-ai-docs-props.mjs --check
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../../../../')
const docsDir = path.join(rootDir, '.ai', 'docs')
const argv = process.argv.slice(2)
const checkOnly = argv.includes('--check')
const filterNames = argv.filter((s) => !s.startsWith('--')).map((s) => s.trim()).filter(Boolean)

const RESERVED = new Set(['if', 'for', 'return', 'else', 'switch', 'case', 'default', 'typeof', 'utils'])

const PUBLIC_TYPE_SUFFIXES = [
  'Props',
  'Ref',
  'Options',
  'Params',
  'Item',
  'Result',
  'Config',
  'Handle',
  'Context',
  'ContextType',
  'LoadResult',
  'LoadAction',
  'VirtualProp',
  'OpenProps',
  'CloseProps'
]

function readText(p) {
  try {
    return fs.readFileSync(p, 'utf8')
  } catch {
    return ''
  }
}

function isValidMethodName(name) {
  return /^[a-zA-Z_]\w*$/.test(name) && !RESERVED.has(name) && !name.startsWith('_')
}

function getMountedNames(indexPath) {
  const text = readText(indexPath)
  const names = new Set()
  for (const m of text.matchAll(/(\w+)\.(\w+)\s*=\s*\w+/g)) {
    names.add(`${m[1]}.${m[2]}`)
  }
  return [...names]
}

function getUtilIndexPath(utilDir) {
  const candidates = [path.join(utilDir, 'index.ts'), path.join(utilDir, utilDir.split(path.sep).pop(), 'index.ts')]
  return candidates.find((p) => fs.existsSync(p)) || null
}

function extractBalancedBlock(text, openIndex) {
  let depth = 0
  for (let i = openIndex; i < text.length; i++) {
    const ch = text[i]
    if (ch === '{') depth++
    else if (ch === '}') {
      depth--
      if (depth === 0) return text.slice(openIndex, i + 1)
    }
  }
  return ''
}

function extractUtilMethods(indexText) {
  const methods = new Map()

  for (const m of indexText.matchAll(/\/\*\*([\s\S]*?)\*\/\s*\n\s{2}(\w+)\s*\(/g)) {
    const name = m[2]
    if (!isValidMethodName(name)) continue
    const desc = m[1]
      .split('\n')
      .map((l) => l.replace(/^\s*\*\s?/, '').trim())
      .filter((l) => l && !l.startsWith('@'))
      .join(' ')
      .trim()
    methods.set(name, desc)
  }

  const objStart = indexText.match(/(?:const|let)\s+\w+\s*=\s*\{/)
  if (objStart) {
    const startIdx = objStart.index + objStart[0].length - 1
    const objBlock = extractBalancedBlock(indexText, startIdx)
    const body = objBlock.slice(1, -1)
    const hasInlineMethods = /^\s{2}\w+\s*\(/m.test(body)

    if (hasInlineMethods) {
      for (const m of body.matchAll(/^\s{2}(\w+)\s*(?:\([^)]*\)\s*\{|,|:)/gm)) {
        const name = m[1]
        if (isValidMethodName(name) && !methods.has(name)) methods.set(name, '')
      }
    } else {
      for (const m of body.matchAll(/^\s{2}(\w+)\s*,?\s*$/gm)) {
        const name = m[1]
        if (isValidMethodName(name) && !methods.has(name)) methods.set(name, '')
      }
    }
  }

  return methods
}

function parseExistingUtilJsdoc(propsText, utilName) {
  const map = new Map()
  const nsRe = new RegExp(`export namespace ${utilName}\\s*\\{([\\s\\S]*)\\}\\s*$`, 'm')
  const nsMatch = propsText.match(nsRe)
  if (!nsMatch) return map
  let pendingDesc = ''
  for (const line of nsMatch[1].split('\n')) {
    const doc = line.match(/^\s*\/\*\*\s*(.+?)\s*\*\/\s*$/)
    if (doc) {
      pendingDesc = doc[1]
      continue
    }
    const fn = line.match(/^\s*export function (\w+)\(/)
    if (fn) {
      if (pendingDesc) map.set(fn[1], pendingDesc)
      pendingDesc = ''
    }
  }
  return map
}

function parseTopLevelExportNames(text) {
  const names = new Set()
  for (const m of text.matchAll(/export\s+(?:interface|type)\s+(\w+)/g)) {
    names.add(m[1])
  }
  return names
}

function extractExportBlock(text, exportName) {
  const re = new RegExp(`export\\s+(interface|type)\\s+${exportName}\\b`)
  const m = re.exec(text)
  if (!m) return null
  const start = m.index
  const afterName = text.slice(start + m[0].length).trimStart()
  if (afterName.startsWith('=')) {
    const semi = afterName.indexOf(';')
    return text.slice(start, start + m[0].length + (semi === -1 ? afterName.length : semi + 1))
  }
  const brace = afterName.indexOf('{')
  if (brace === -1) return null
  const block = extractBalancedBlock(afterName, brace)
  return `${text.slice(start, start + m[0].length)} ${block}`
}

function getPublicPrefixes(componentName, mounted) {
  const prefixes = new Set([componentName])
  for (const mount of mounted) {
    const sub = mount.split('.')[1]
    if (sub) prefixes.add(`${componentName}${sub}`)
  }
  return prefixes
}

function isPublicTypeName(name, prefixes) {
  if (prefixes.has(name)) return true
  for (const prefix of prefixes) {
    if (!name.startsWith(prefix)) continue
    for (const suffix of PUBLIC_TYPE_SUFFIXES) {
      if (name.endsWith(suffix)) return true
    }
    if (/^(Get|Is|Has)[A-Z]/.test(name.slice(prefix.length))) return true
  }
  return false
}

function shouldSkipTypeFile(fileName) {
  return (
    fileName.endsWith('.modules.types.ts') ||
    fileName.includes('.utils.') ||
    fileName.includes('.demos.') ||
    fileName.includes('.api.') ||
    fileName.includes('.format') ||
    fileName.includes('.query') ||
    fileName.includes('.DistrictMain.') ||
    fileName.includes('.SearchPage.') ||
    fileName.includes('.UpdateIsLeaf.') ||
    fileName.includes('.LoadChildren.') ||
    fileName.includes('.Anchor.') ||
    fileName.includes('createCenterMarker') ||
    fileName.includes('markerIcons') ||
    fileName.includes('.filterCoords')
  )
}

function cleanTypeBlock(block) {
  return block
    .split('\n')
    .filter((line) => !/^\s*import\s/.test(line))
    .map((line) => (/^\s*\/\/\s*[^?:]*$/.test(line) && !line.includes('?:') ? '' : line))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function buildUtilProps(utilName, methods, existingJsdoc, extraBlocks = []) {
  const lines = ['/**', ` * ${utilName} API（AI 文档，生成代码时以此为准）`, ' */', '']

  for (const block of extraBlocks) lines.push(block, '')

  lines.push(`export namespace ${utilName} {`)
  for (const name of [...methods.keys()].sort()) {
    const desc = existingJsdoc.get(name) || methods.get(name) || '见源码与 demos'
    lines.push(`  /** ${desc} */`)
    lines.push(`  export function ${name}(...args: unknown[]): unknown`)
    lines.push('')
  }
  lines.push('}', '')
  return lines.join('\n')
}

function syncUtilProps(name) {
  const utilDir = path.join(rootDir, 'src', 'utils', name)
  const docPropsPath = path.join(docsDir, 'utils', name, `${name}-props.ts`)
  if (!fs.existsSync(utilDir) || !fs.existsSync(docPropsPath)) return null

  const indexPath = path.join(utilDir, 'index.ts')
  if (!fs.existsSync(indexPath)) return null

  const methods = extractUtilMethods(readText(indexPath))
  if (methods.size === 0) return null

  const existingText = readText(docPropsPath)
  const existingJsdoc = parseExistingUtilJsdoc(existingText, name)

  const extraBlocks = []
  for (const blockName of ['LocalFile', 'FileItem']) {
    const block = extractExportBlock(existingText, blockName)
    if (block) extraBlocks.push(block)
  }

  const next = buildUtilProps(name, methods, existingJsdoc, extraBlocks)
  const existingMethods = new Set([...existingText.matchAll(/export function (\w+)\(/g)].map((m) => m[1]))
  const nextMethods = new Set(methods.keys())
  const missing = [...nextMethods].filter((m) => !existingMethods.has(m))
  const extra = [...existingMethods].filter((m) => !nextMethods.has(m))

  if (next.trim() !== existingText.trim()) {
    if (!checkOnly) fs.writeFileSync(docPropsPath, next, 'utf8')
    return { kind: 'utils', name, missing, extra, updated: !checkOnly }
  }
  return missing.length || extra.length ? { kind: 'utils', name, missing, extra, updated: false } : null
}

function syncComponentProps(name) {
  const srcDir = path.join(rootDir, 'src', 'components', name)
  const docPropsPath = path.join(docsDir, 'components', name, `${name}-props.ts`)
  const typesDir = path.join(srcDir, 'types')
  if (!fs.existsSync(typesDir) || !fs.existsSync(docPropsPath)) return null

  const prefixes = getPublicPrefixes(name, getMountedNames(path.join(srcDir, 'index.ts')))
  const existingText = readText(docPropsPath)
  const existingNames = parseTopLevelExportNames(existingText)

  const missingBlocks = []
  for (const file of fs.readdirSync(typesDir).sort()) {
    if (!file.endsWith('.types.ts') || shouldSkipTypeFile(file)) continue
    const fileText = readText(path.join(typesDir, file))
    for (const m of fileText.matchAll(/export\s+(interface|type)\s+(\w+)/g)) {
      const blockName = m[2]
      if (!isPublicTypeName(blockName, prefixes) || existingNames.has(blockName)) continue
      const block = extractExportBlock(fileText, blockName)
      if (block) missingBlocks.push(cleanTypeBlock(block))
    }
  }

  if (missingBlocks.length === 0) return null

  const next = `${existingText.trimEnd()}\n\n${missingBlocks.join('\n\n')}\n`
  if (!checkOnly) fs.writeFileSync(docPropsPath, next, 'utf8')
  return { kind: 'components', name, missing: missingBlocks.map((b) => b.match(/export\s+(?:interface|type)\s+(\w+)/)?.[1]).filter(Boolean), updated: !checkOnly }
}

const results = []

for (const name of fs.readdirSync(path.join(rootDir, 'src', 'utils')).sort()) {
  if (filterNames.length && !filterNames.includes(name)) continue
  const r = syncUtilProps(name)
  if (r) results.push(r)
}

for (const name of fs.readdirSync(path.join(rootDir, 'src', 'components')).sort()) {
  if (name === 'common') continue
  if (filterNames.length && !filterNames.includes(name)) continue
  const r = syncComponentProps(name)
  if (r) results.push(r)
}

if (results.length === 0) {
  console.log(checkOnly ? 'No props drift detected.' : 'All props files are up to date.')
} else {
  console.log(`${checkOnly ? '[check] ' : ''}${results.length} module(s) with props changes:\n`)
  for (const r of results) {
    console.log(`  ${r.kind}/${r.name} (${r.updated ? 'updated' : 'drift'})`)
    if (r.missing?.length) console.log(`    missing: ${r.missing.join(', ')}`)
    if (r.extra?.length) console.log(`    extra in docs: ${r.extra.join(', ')}`)
  }
}

if (checkOnly && results.some((r) => r.missing?.length || r.extra?.length)) process.exitCode = 1
