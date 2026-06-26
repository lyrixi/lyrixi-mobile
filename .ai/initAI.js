#!/usr/bin/env node

const path = require('path')
const { updateAI } = require('./updateAI.js')
const { updateScripts } = require('./updateScripts.js')

const pkgRoot = path.resolve(__dirname, '..')
const argv = process.argv.slice(2)
const targetRoot = process.cwd()
const templateDir = path.join(pkgRoot, '.ai')

updateAI({
  templateDir,
  targetRoot,
  argv,
  label: 'lyrixi-mobile-ai'
})

updateScripts({
  templateDir,
  targetRoot,
  argv,
  label: 'lyrixi-mobile-scripts'
})
