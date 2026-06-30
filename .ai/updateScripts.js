const fs = require('fs')
const path = require('path')

const TRANSLATE_SCRIPT =
  'tsx node_modules/lyrixi-mobile/scripts/LocaleUtil/translateSrc.ts'

function parseArgs(argv) {
  return {
    dryRun: argv.includes('--dry-run')
  }
}

function exists(p) {
  try {
    fs.accessSync(p)
    return true
  } catch {
    return false
  }
}

function createSummary() {
  return {
    scriptsAdded: [],
    scriptsUpdated: [],
    scriptsKept: [],
    warnings: []
  }
}

function syncPackageScripts(targetRoot, dryRun, summary) {
  const pkgPath = path.join(targetRoot, 'package.json')
  if (!exists(pkgPath)) {
    summary.warnings.push('package.json not found, skipped translate script')
    return
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
  if (!pkg.scripts) pkg.scripts = {}

  if (pkg.scripts.translate === TRANSLATE_SCRIPT) {
    summary.scriptsKept.push('translate')
    return
  }

  const had = Object.prototype.hasOwnProperty.call(pkg.scripts, 'translate')
  pkg.scripts.translate = TRANSLATE_SCRIPT

  if (!dryRun) {
    fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)
  }

  if (had) summary.scriptsUpdated.push('translate')
  else summary.scriptsAdded.push('translate')
}

function printSummary(summary, targetRoot, dryRun, label) {
  const prefix = dryRun ? '[dry-run] ' : ''
  console.log(`\n${prefix}${label} sync complete\n`)

  if (summary.scriptsAdded.length) {
    console.log(`Scripts added: ${summary.scriptsAdded.join(', ')}`)
  }
  if (summary.scriptsUpdated.length) {
    console.log(`Scripts updated: ${summary.scriptsUpdated.join(', ')}`)
  }
  if (summary.scriptsKept.length) {
    console.log(`Scripts kept: ${summary.scriptsKept.join(', ')}`)
  }

  if (summary.warnings.length) {
    console.log('\nWarnings:')
    for (const w of summary.warnings) console.log(`  - ${w}`)
  }

  console.log(`\nTarget: ${targetRoot}`)
}

/**
 * @param {object} options
 * @param {string} options.targetRoot - business project root
 * @param {string} options.templateDir - source .ai directory (skip when same as target .ai)
 * @param {string[]} [options.argv]
 * @param {string} [options.label]
 */
function updateScripts(options) {
  const { targetRoot, templateDir, argv = [], label = 'lyrixi-mobile-scripts' } = options
  const parsed = parseArgs(argv)
  const targetAi = path.join(targetRoot, '.ai')

  if (path.resolve(templateDir) === path.resolve(targetAi)) return

  const summary = createSummary()
  syncPackageScripts(targetRoot, parsed.dryRun, summary)
  printSummary(summary, targetRoot, parsed.dryRun, label)
}

module.exports = { updateScripts, parseArgs }
