#!/usr/bin/env node

import path from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const { updateAI } = require('../.ai/updateAI.js')

const projectRoot = process.cwd()

updateAI({
  templateDir: path.join(projectRoot, '.ai'),
  targetRoot: projectRoot,
  argv: process.argv.slice(2),
  label: 'create-ai'
})
