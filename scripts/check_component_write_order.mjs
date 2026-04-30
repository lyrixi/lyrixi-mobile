#!/usr/bin/env node
/**
 * lyrixi-develop-sequence 代码书写顺序（顶层面语句类别 1→2→3→4）:
 * 1=hooks(含 useCallback) 2=内部工具 3=effect 4=事件(handle* / onXxx)
 * 检查 forwardRef 首参、首字母大写 function/const 箭头 的函数体**首层**语句。
 *
 * 以下成对出现视为与常见 React 写法一致，不报错:
 * - effect(3) 后接 useImperativeHandle(1)（ref 暴露常放在 effect 后）
 * - effect(3) 后接 `async function` / `function` 声明（如 loadData）
 * - 事件(4) 后接 `function` 声明的辅助（如 getX 与 handle 的依赖关系）
 */
import * as ts from "typescript"
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs"
import { join, relative, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(here, "..")
const C_LABEL = { 1: "hooks", 2: "内部工具", 3: "effect", 4: "事件" }
const effectHooks = new Set(["useEffect", "useLayoutEffect", "useInsertionEffect"])
const otherHooks = new Set([
  "useState", "useRef", "useReducer", "useMemo", "useContext", "useCallback", "useId", "useImperativeHandle",
  "useDebugValue", "useSyncExternalStore", "use"
])

function isCustomHookName(name) {
  return name && name.length > 3 && name.startsWith("use") && /[A-Z]/.test(name[3] ?? "")
}

function isForwardRefCall(expr) {
  if (!ts.isCallExpression(expr)) return false
  if (ts.isIdentifier(expr.expression) && expr.expression.text === "forwardRef") return true
  if (ts.isPropertyAccessExpression(expr.expression) && ts.isIdentifier(expr.expression.name) && expr.expression.name.text === "forwardRef")
    return true
  return false
}

function hookKind(calleeName) {
  if (!calleeName) return 0
  if (effectHooks.has(calleeName)) return 3
  if (otherHooks.has(calleeName) || isCustomHookName(calleeName)) return 1
  return 0
}

function isEventName(name) {
  if (!name) return false
  if (name.startsWith("handle")) return true
  if (name.length > 2 && name.startsWith("on")) return /[A-Z]/.test(name[2] ?? "")
  return false
}

function getCallCalleeName(call) {
  if (!ts.isCallExpression(call) || !ts.isIdentifier(call.expression)) return null
  return call.expression.text
}

function categoryForStatement(node) {
  if (ts.isFunctionDeclaration(node) && node.name) return isEventName(node.name.text) ? 4 : 2
  if (ts.isExpressionStatement(node) && ts.isCallExpression(node.expression)) {
    const n = getCallCalleeName(node.expression)
    return n ? hookKind(n) : 0
  }
  if (ts.isVariableStatement(node)) {
    for (const d of node.declarationList.declarations) {
      if (!d.initializer) continue
      if (!ts.isIdentifier(d.name)) continue
      const dname = d.name.text
      if (ts.isCallExpression(d.initializer)) {
        const n = getCallCalleeName(d.initializer)
        const k = n ? hookKind(n) : 0
        if (k) return k
      } else if (ts.isArrowFunction(d.initializer) || ts.isFunctionExpression(d.initializer)) {
        return isEventName(dname) ? 4 : 2
      }
    }
  }
  return 0
}

function collectTop(block, sourceFile) {
  const r = []
  const lines = sourceFile.getText().split("\n")
  for (const s of block.statements) {
    const c = categoryForStatement(s)
    if (!c) continue
    const l = sourceFile.getLineAndCharacterOfPosition(s.getStart(sourceFile)).line + 1
    const text = (lines[l - 1] ?? "").trim()
    r.push({ c, l, text })
  }
  return r
}

/** 与规范字面顺序不完全一致、但属常见/可接受写法，不再报错 */
function allowPair(prev, next) {
  if (next.c < prev.c) {
    if (prev.c === 3 && next.c === 1 && /useImperativeHandle/.test(next.text))
      return true
    if (prev.c === 3 && next.c === 2 && /^(async\s+)?function\s+/.test(next.text))
      return true
    if (prev.c === 4 && next.c === 2 && /^(async\s+)?function\s+/.test(next.text))
      return true
  }
  return false
}

function monotonicityBad(items) {
  for (let i = 1; i < items.length; i++) {
    if (items[i].c < items[i - 1].c) {
      if (allowPair(items[i - 1], items[i])) continue
      return { line: items[i].l, t: `${C_LABEL[items[i - 1].c]}(第${i}段) 之后出现 ${C_LABEL[items[i].c]}` }
    }
  }
  return null
}

function bodyOfForwardRefFirstArg(node) {
  if (!isForwardRefCall(node)) return null
  const a0 = node.arguments[0]
  if (!a0) return null
  let e = a0
  if (ts.isParenthesizedExpression(e)) e = e.expression
  if (ts.isArrowFunction(e) && e.body && ts.isBlock(e.body)) return e.body
  if (ts.isFunctionExpression(e) && e.body && ts.isBlock(e.body)) return e.body
  return null
}

function isComponentName(t) {
  return t && t[0] === t[0].toUpperCase() && /[A-Z]/.test(t[0])
}

function run(sf) {
  const out = []
  const visit = (n) => {
    if (ts.isCallExpression(n)) {
      const b = bodyOfForwardRefFirstArg(n)
      if (b) {
        const e = monotonicityBad(collectTop(b, sf))
        if (e) out.push([sf.fileName, "forwardRef", e])
      }
    }
    if (ts.isFunctionDeclaration(n) && n.name && n.body && ts.isBlock(n.body) && isComponentName(n.name.text)) {
      const e = monotonicityBad(collectTop(n.body, sf))
      if (e) out.push([sf.fileName, n.name.text, e])
    }
    if (ts.isVariableStatement(n) && n.declarationList) {
      for (const d of n.declarationList.declarations) {
        if (!ts.isIdentifier(d.name) || !d.initializer) continue
        if (!isComponentName(d.name.text)) continue
        if (ts.isArrowFunction(d.initializer) || ts.isFunctionExpression(d.initializer)) {
          const body = d.initializer.body
          if (ts.isBlock(body)) {
            const e = monotonicityBad(collectTop(body, sf))
            if (e) out.push([sf.fileName, d.name.text, e])
          }
        }
      }
    }
    ts.forEachChild(n, visit)
  }
  visit(sf)
  return out
}

function listFiles(d, a) {
  for (const name of readdirSync(d, { withFileTypes: true })) {
    if (name.isDirectory() && (name.name === "node_modules" || name.name.startsWith("."))) continue
    if (name.isDirectory()) listFiles(join(d, name.name), a)
    else if (name.isFile() && /\.(ts|tsx)$/.test(name.name) && !name.name.includes(".d.ts")) a.push(join(d, name.name))
  }
  return a
}

const target = process.argv[2] || join(projectRoot, "src", "components")
if (!existsSync(target)) { console.error("not found", target); process.exit(1) }
const st = statSync(target)
const files = st.isDirectory() ? listFiles(target, []) : [target]
let n = 0, tbad = 0, fbad = 0, seenF = new Set()
for (const f of files) {
  if (!/\.(tsx?)$/.test(f)) continue
  let t
  try { t = readFileSync(f, "utf8") } catch { continue }
  n++
  const isTsx = f.endsWith("x")
  const sf = ts.createSourceFile(f, t, ts.ScriptTarget.Latest, true, isTsx ? ts.ScriptKind.TSX : ts.ScriptKind.TS)
  for (const [file, comp, e] of run(sf)) {
    tbad++
    const rel = relative(projectRoot, file)
    if (!seenF.has(rel)) { seenF.add(rel); fbad++ }
    console.log(`${rel}:${e.line}  [${comp}] 书写顺序: ${e.t}`)
  }
}
console.error(`[书写顺序] 扫描: ${n} 文件, 问题 ${tbad} 处 / ${fbad} 个文件.`)
process.exitCode = tbad > 0 ? 1 : 0
