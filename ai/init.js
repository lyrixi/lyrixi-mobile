#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const pkgRoot = path.resolve(__dirname, '..')
const templateDir = path.join(pkgRoot, '.ai')
const targetRoot = process.cwd()
const targetAi = path.join(targetRoot, '.ai')

const OVERWRITE_DIRS = ['docs', 'commands', 'memory', 'decisions', 'archive']
const OVERWRITE_FILES = ['CLAUDE.md', 'README.md']

const CURSOR_LINKS = {
  docs: '../.ai/docs',
  memory: '../.ai/memory',
  rules: '../.ai/rules',
  skills: '../.ai/skills',
  decisions: '../.ai/decisions',
  archive: '../.ai/archive'
}

const CLAUDE_LINKS = {
  commands: '../.ai/commands',
  docs: '../.ai/docs',
  memory: '../.ai/memory',
  decisions: '../.ai/decisions',
  archive: '../.ai/archive',
  rules: '../.ai/rules',
  skills: '../.ai/skills',
  'CLAUDE.md': '../.ai/CLAUDE.md'
}

const summary = {
  skillsUpdated: [],
  skillsAdded: [],
  skillsKept: [],
  rulesUpdated: [],
  rulesAdded: [],
  rulesKept: [],
  dirsOverwritten: [],
  filesOverwritten: [],
  symlinksCreated: [],
  symlinksUpdated: [],
  symlinksSkipped: [],
  warnings: []
}

function parseArgs(argv) {
  return {
    dryRun: argv.includes('--dry-run'),
    forceLink: argv.includes('--force-link')
  }
}

function ensureDir(dir, dryRun) {
  if (dryRun) return
  fs.mkdirSync(dir, { recursive: true })
}

function exists(p) {
  try {
    fs.accessSync(p)
    return true
  } catch {
    return false
  }
}

function listDirNames(dir) {
  if (!exists(dir)) return []
  return fs.readdirSync(dir).filter((name) => {
    const full = path.join(dir, name)
    return fs.statSync(full).isDirectory() && !name.startsWith('.')
  })
}

function listFileNames(dir) {
  if (!exists(dir)) return []
  return fs.readdirSync(dir).filter((name) => {
    const full = path.join(dir, name)
    return fs.statSync(full).isFile() && !name.startsWith('.')
  })
}

function copyRecursive(src, dest, dryRun) {
  if (dryRun) return
  fs.cpSync(src, dest, { recursive: true, force: true })
}

function removeIfExists(p, dryRun) {
  if (!exists(p)) return
  if (dryRun) return
  fs.rmSync(p, { recursive: true, force: true })
}

function mergeSkills(srcSkills, destSkills, dryRun) {
  ensureDir(destSkills, dryRun)
  const srcNames = listDirNames(srcSkills)
  const destNames = listDirNames(destSkills)

  for (const name of srcNames) {
    const srcPath = path.join(srcSkills, name)
    const destPath = path.join(destSkills, name)
    const had = exists(destPath)
    copyRecursive(srcPath, destPath, dryRun)
    if (had) summary.skillsUpdated.push(name)
    else summary.skillsAdded.push(name)
  }

  for (const name of destNames) {
    if (!srcNames.includes(name)) summary.skillsKept.push(name)
  }
}

function mergeRules(srcRules, destRules, dryRun) {
  ensureDir(destRules, dryRun)
  const srcFiles = listFileNames(srcRules)
  const destFiles = listFileNames(destRules)

  for (const file of srcFiles) {
    const srcPath = path.join(srcRules, file)
    const destPath = path.join(destRules, file)
    const had = exists(destPath)
    copyRecursive(srcPath, destPath, dryRun)
    if (had) summary.rulesUpdated.push(file)
    else summary.rulesAdded.push(file)
  }

  for (const file of destFiles) {
    if (!srcFiles.includes(file)) summary.rulesKept.push(file)
  }
}

function syncOverwriteDirs(templateRoot, destRoot, dryRun) {
  for (const dir of OVERWRITE_DIRS) {
    const src = path.join(templateRoot, dir)
    const dest = path.join(destRoot, dir)
    if (!exists(src)) continue
    removeIfExists(dest, dryRun)
    copyRecursive(src, dest, dryRun)
    summary.dirsOverwritten.push(dir)
  }
}

function syncOverwriteFiles(templateRoot, destRoot, dryRun) {
  for (const file of OVERWRITE_FILES) {
    const src = path.join(templateRoot, file)
    const dest = path.join(destRoot, file)
    if (!exists(src)) continue
    copyRecursive(src, dest, dryRun)
    summary.filesOverwritten.push(file)
  }
}

function isSymlink(p) {
  try {
    return fs.lstatSync(p).isSymbolicLink()
  } catch {
    return false
  }
}

function readSymlinkTarget(linkPath) {
  try {
    return fs.readlinkSync(linkPath)
  } catch {
    return null
  }
}

function ensureSymlink(linkPath, targetRelative, dryRun, forceLink) {
  const parentDir = path.dirname(linkPath)
  ensureDir(parentDir, dryRun)

  const existsLink = exists(linkPath)
  if (existsLink) {
    if (isSymlink(linkPath)) {
      const current = readSymlinkTarget(linkPath)
      if (current === targetRelative) return
      if (dryRun) {
        summary.symlinksUpdated.push(linkPath)
        return
      }
      fs.rmSync(linkPath, { force: true })
      fs.symlinkSync(targetRelative, linkPath)
      summary.symlinksUpdated.push(linkPath)
      return
    }

    if (forceLink) {
      if (dryRun) {
        summary.symlinksCreated.push(linkPath)
        return
      }
      fs.rmSync(linkPath, { recursive: true, force: true })
      fs.symlinkSync(targetRelative, linkPath)
      summary.symlinksCreated.push(linkPath)
      return
    }

    summary.symlinksSkipped.push(linkPath)
    summary.warnings.push(`Skipped ${linkPath}: exists and is not a symlink (use --force-link to replace)`)
    return
  }

  if (dryRun) {
    summary.symlinksCreated.push(linkPath)
    return
  }

  try {
    fs.symlinkSync(targetRelative, linkPath)
    summary.symlinksCreated.push(linkPath)
  } catch (err) {
    summary.warnings.push(`Failed to create symlink ${linkPath}: ${err.message}`)
  }
}

function syncSymlinks(dryRun, forceLink) {
  for (const [name, target] of Object.entries(CURSOR_LINKS)) {
    ensureSymlink(path.join(targetRoot, '.cursor', name), target, dryRun, forceLink)
  }

  for (const [name, target] of Object.entries(CLAUDE_LINKS)) {
    ensureSymlink(path.join(targetRoot, '.claude', name), target, dryRun, forceLink)
  }
}

function printSummary(dryRun) {
  const prefix = dryRun ? '[dry-run] ' : ''
  console.log(`\n${prefix}lyrixi-mobile-ai sync complete\n`)

  if (summary.skillsAdded.length) console.log(`Skills added: ${summary.skillsAdded.join(', ')}`)
  if (summary.skillsUpdated.length) console.log(`Skills updated: ${summary.skillsUpdated.join(', ')}`)
  if (summary.skillsKept.length) console.log(`Skills kept (user): ${summary.skillsKept.join(', ')}`)

  if (summary.rulesAdded.length) console.log(`Rules added: ${summary.rulesAdded.join(', ')}`)
  if (summary.rulesUpdated.length) console.log(`Rules updated: ${summary.rulesUpdated.join(', ')}`)
  if (summary.rulesKept.length) console.log(`Rules kept (user): ${summary.rulesKept.join(', ')}`)

  if (summary.dirsOverwritten.length) {
    console.log(`Dirs overwritten: ${summary.dirsOverwritten.join(', ')}`)
  }
  if (summary.filesOverwritten.length) {
    console.log(`Files overwritten: ${summary.filesOverwritten.join(', ')}`)
  }

  if (summary.symlinksCreated.length) {
    console.log(`Symlinks created: ${summary.symlinksCreated.length}`)
  }
  if (summary.symlinksUpdated.length) {
    console.log(`Symlinks updated: ${summary.symlinksUpdated.length}`)
  }
  if (summary.symlinksSkipped.length) {
    console.log(`Symlinks skipped: ${summary.symlinksSkipped.length}`)
  }

  if (summary.warnings.length) {
    console.log('\nWarnings:')
    for (const w of summary.warnings) console.log(`  - ${w}`)
  }

  console.log(`\nTarget: ${targetAi}`)
}

function main() {
  const options = parseArgs(process.argv.slice(2))

  if (!exists(templateDir)) {
    console.error(`Template not found: ${templateDir}`)
    console.error('Ensure lyrixi-mobile is installed and the package includes .ai/')
    process.exit(1)
  }

  if (options.dryRun) {
    console.log('Dry run — no files will be changed\n')
  }

  ensureDir(targetAi, options.dryRun)

  mergeSkills(path.join(templateDir, 'skills'), path.join(targetAi, 'skills'), options.dryRun)
  mergeRules(path.join(templateDir, 'rules'), path.join(targetAi, 'rules'), options.dryRun)
  syncOverwriteDirs(templateDir, targetAi, options.dryRun)
  syncOverwriteFiles(templateDir, targetAi, options.dryRun)
  syncSymlinks(options.dryRun, options.forceLink)

  printSummary(options.dryRun)
}

main()
