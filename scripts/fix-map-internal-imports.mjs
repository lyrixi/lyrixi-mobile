#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const MAP = path.join(__dirname, '../src/components/Map')

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    if (name.name.startsWith('.')) continue
    const p = path.join(dir, name.name)
    if (name.isDirectory()) walk(p, acc)
    else if (/\.(ts|tsx)$/.test(name.name)) acc.push(p)
  }
  return acc
}

for (const abs of walk(MAP)) {
  const rel = path.relative(MAP, abs).replace(/\\/g, '/')
  if (rel === 'types.ts' || /^Map\..*\.types\.ts$/.test(path.basename(abs))) continue

  const dirDepth = path.dirname(rel) === '.' ? 0 : path.dirname(rel).split('/').length
  const typesRef = dirDepth === 0 ? './types' : `${'../'.repeat(dirDepth)}types`

  let s = fs.readFileSync(abs, 'utf8')
  const orig = s

  const patterns = [
    /from ['"]\.\/types['"]/g,
    /from ['"]\.\.\/types['"]/g,
    /from ['"]\.\.\/\.\.\/types['"]/g,
    /from ['"]\.\/\.\.\/\.\.\/leaflet\/types['"]/g,
    /from ['"]\.\/\.\.\/\.\.\/\.\.\/leaflet\/types['"]/g,
    /from ['"]\.\.\/\.\.\/\.\.\/leaflet\/types['"]/g,
    /from ['"]\.\.\/leaflet\/types['"]/g,
    /from ['"]\.\.\/\.\.\/leaflet\/types['"]/g,
    /from ['"]\.\/MapContainer\/types['"]/g,
    /from ['"]\.\.\/MapContainer\/types['"]/g,
    /from ['"]\.\.\/components\/MapContainer\/types['"]/g,
    /from ['"]\.\.\/components\/Markers\/types['"]/g,
    /from ['"]\.\.\/utils\/coordsToWgs84\/types['"]/g,
    /from ['"]\.\.\/pages\/MapChoose\/types['"]/g,
    /from ['"]\.\.\/pages\/MapMarkers\/types['"]/g,
    /from ['"]\.\/filterCoords\/types['"]/g,
    /from ['"]\.\/isSamePoint\/types['"]/g,
    /from ['"]\.\/\.\.\/leaflet\/types['"]/g,
    /from ['"]\.\.\/\.\.\/leaflet\/types['"]/g
  ]
  for (const re of patterns) {
    s = s.replace(re, `from '${typesRef}'`)
  }

  if (s !== orig) {
    fs.writeFileSync(abs, s)
    console.log('fixed', rel)
  }
}
