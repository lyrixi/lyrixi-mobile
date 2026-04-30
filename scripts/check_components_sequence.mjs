#!/usr/bin/env node
/**
 * 对 src/components 执行 lyrixi-develop-sequence 全量检查:
 * 1) import 规则 (python)
 * 2) 代码书写顺序 (Node + TS)
 * 任一步失败则 exit 1
 */
import { spawnSync } from "node:child_process"
import { fileURLToPath } from "node:url"
import { join, dirname } from "node:path"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")

const py = spawnSync("python3", [join(root, "scripts/scan_component_imports.py")], { cwd: root, encoding: "utf8" })
const node = spawnSync("node", [join(root, "scripts/check_component_write_order.mjs")], { cwd: root, encoding: "utf8" })
console.log(py.stdout)
if (py.stderr) process.stderr.write(py.stderr)
console.log(node.stdout)
if (node.stderr) process.stderr.write(node.stderr)
if (py.status) console.error("import 检查: FAIL")
else console.error("import 检查: OK")
if (node.status) console.error("书写顺序检查: FAIL")
else console.error("书写顺序检查: OK")
process.exitCode = py.status || node.status || 0
