#!/usr/bin/env node

const path = require('path')
const { updateAI } = require('./updateAI.js')

const pkgRoot = path.resolve(__dirname, '..')

updateAI({
  templateDir: path.join(pkgRoot, '.ai'),
  targetRoot: process.cwd(),
  argv: process.argv.slice(2),
  label: 'lyrixi-mobile-ai'
})
