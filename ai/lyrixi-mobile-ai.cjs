#!/usr/bin/env node
const path = require('node:path')
const { spawnSync } = require('node:child_process')

const packageRoot = path.join(__dirname, '..')
const tsxLoader = require.resolve('tsx', { paths: [packageRoot] })
const initTs = path.join(__dirname, 'init.ts')
const r = spawnSync(
  process.execPath,
  ['--import', tsxLoader, initTs, ...process.argv.slice(2)],
  { stdio: 'inherit', cwd: process.cwd(), env: process.env }
)
process.exit(r.status === null || r.status === undefined ? 1 : r.status)
