const fs = require('fs')
const path = require('path')

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

function parseArgs(argv) {
  return {
    dryRun: argv.includes('--dry-run'),
    forceLink: argv.includes('--force-link')
  }
}

function createSummary() {
  return {
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

function samePath(a, b) {
  return path.resolve(a) === path.resolve(b)
}

function copyRecursive(src, dest, dryRun) {
  if (samePath(src, dest)) return
  if (dryRun) return
  fs.cpSync(src, dest, { recursive: true, force: true })
}

function removeIfExists(p, dryRun) {
  if (!exists(p)) return
  if (dryRun) return
  fs.rmSync(p, { recursive: true, force: true })
}

function mergeSkills(srcSkills, destSkills, dryRun, summary) {
  if (samePath(srcSkills, destSkills)) return
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

function mergeRules(srcRules, destRules, dryRun, summary) {
  if (samePath(srcRules, destRules)) return
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

function syncOverwriteDirs(templateRoot, destRoot, dryRun, summary) {
  if (samePath(templateRoot, destRoot)) return
  for (const dir of OVERWRITE_DIRS) {
    const src = path.join(templateRoot, dir)
    const dest = path.join(destRoot, dir)
    if (!exists(src)) continue
    removeIfExists(dest, dryRun)
    copyRecursive(src, dest, dryRun)
    summary.dirsOverwritten.push(dir)
  }
}

function syncOverwriteFiles(templateRoot, destRoot, dryRun, summary) {
  if (samePath(templateRoot, destRoot)) return
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

function ensureSymlink(linkPath, targetRelative, dryRun, forceLink, summary) {
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

function syncSymlinks(targetRoot, dryRun, forceLink, summary) {
  for (const [name, target] of Object.entries(CURSOR_LINKS)) {
    ensureSymlink(path.join(targetRoot, '.cursor', name), target, dryRun, forceLink, summary)
  }

  for (const [name, target] of Object.entries(CLAUDE_LINKS)) {
    ensureSymlink(path.join(targetRoot, '.claude', name), target, dryRun, forceLink, summary)
  }
}

function printSummary(summary, targetAi, dryRun, label) {
  const prefix = dryRun ? '[dry-run] ' : ''
  console.log(`\n${prefix}${label} sync complete\n`)

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

/**
 * @param {object} options
 * @param {string} options.templateDir - source .ai directory
 * @param {string} options.targetRoot - project root (writes .ai + symlinks here)
 * @param {string[]} [options.argv]
 * @param {string} [options.label]
 */
function updateAI(options) {
  const { templateDir, targetRoot, argv = [], label = 'lyrixi-mobile-ai' } = options
  const parsed = parseArgs(argv)
  const targetAi = path.join(targetRoot, '.ai')
  const summary = createSummary()

  if (!exists(templateDir)) {
    console.error(`Template not found: ${templateDir}`)
    process.exit(1)
  }

  if (parsed.dryRun) {
    console.log('Dry run — no files will be changed\n')
  }

  ensureDir(targetAi, parsed.dryRun)

  const isLocal = samePath(templateDir, targetAi)
  if (isLocal && !parsed.dryRun) {
    console.log('Local mode: template and target are the same .ai directory, skipping file sync\n')
  }

  mergeSkills(path.join(templateDir, 'skills'), path.join(targetAi, 'skills'), parsed.dryRun, summary)
  mergeRules(path.join(templateDir, 'rules'), path.join(targetAi, 'rules'), parsed.dryRun, summary)
  syncOverwriteDirs(templateDir, targetAi, parsed.dryRun, summary)
  syncOverwriteFiles(templateDir, targetAi, parsed.dryRun, summary)
  syncSymlinks(targetRoot, parsed.dryRun, parsed.forceLink, summary)

  printSummary(summary, targetAi, parsed.dryRun, label)
}

module.exports = { updateAI, parseArgs }
