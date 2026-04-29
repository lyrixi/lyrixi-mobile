import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function copyRecursive(src: string, dest: string): void {
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

type CopyTask = { label: string; from: string; to: string }

function main(): void {
  const projectRoot = process.cwd()
  const packageRoot = path.join(__dirname, '..')
  const aiDir = path.join(packageRoot, 'ai')

  if (!fs.existsSync(aiDir)) {
    console.error('❌ Missing ai/ in lyrixi-mobile package:', aiDir)
    process.exit(1)
  }

  const cursorDir = path.join(projectRoot, '.cursor')
  const tasks: CopyTask[] = [
    {
      label: 'lyrixi-knowledge',
      from: path.join(aiDir, 'lyrixi-knowledge'),
      to: path.join(cursorDir, 'lyrixi-knowledge')
    },
    {
      label: 'rules',
      from: path.join(aiDir, 'rules'),
      to: path.join(cursorDir, 'rules')
    },
    {
      label: 'skills',
      from: path.join(aiDir, 'skills'),
      to: path.join(cursorDir, 'skills')
    }
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
