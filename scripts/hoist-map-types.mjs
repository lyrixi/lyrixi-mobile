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
    else acc.push(p)
  }
  return acc
}

/** leaflet/types.ts -> Map.leaflet.types ; components/MapContainer/types.ts -> Map.MapContainer.types */
function hoistModuleId(relTypesFile) {
  let d = path.dirname(relTypesFile).replace(/\\/g, '/')
  d = d.replace(/^components\//, '').replace(/^pages\//, '').replace(/^utils\//, '')
  if (d === '.') return 'Map.types'
  return `Map.${d.split('/').join('.')}.types`
}

/** Resolve ./../x/types from file at fromRel (e.g. pages/MapChoose/types.ts) -> hoist module id */
function resolveTypeImport(spec, fromRelFile) {
  if (!spec.startsWith('.')) return null
  const dir = path.dirname(fromRelFile)
  let resolved = path.normalize(path.join(dir, spec)).replace(/\\/g, '/')
  if (resolved.endsWith('/types')) {
    /* ok */
  } else if (!resolved.endsWith('types')) return null
  let d = path.dirname(resolved)
  d = d.replace(/^components\//, '').replace(/^pages\//, '').replace(/^utils\//, '')
  if (d === '.' || d === '') return null
  return `Map.${d.split('/').join('.')}.types`
}

function rewriteTypeImports(content, fromRelFile) {
  return content.replace(/from\s+['"](\.\/[^'"]+)['"]/g, (m, spec) => {
    if (spec.includes('getTabs')) return m
    const mid = resolveTypeImport(spec, fromRelFile)
    if (!mid) return m
    return `from './${mid}'`
  })
}

const oldTypeFiles = walk(MAP).filter(
  (f) => f.endsWith(`${path.sep}types.ts`) && f !== path.join(MAP, 'types.ts')
)

const relToHoist = {}
for (const abs of oldTypeFiles) {
  const rel = path.relative(MAP, abs).replace(/\\/g, '/')
  relToHoist[rel] = hoistModuleId(rel)
}

for (const abs of oldTypeFiles) {
  const rel = path.relative(MAP, abs).replace(/\\/g, '/')
  let body = fs.readFileSync(abs, 'utf8')
  body = body.replace(
    /from ['"]\.\/utils\/getTabs['"]/,
    `from './components/NearbyControl/utils/getTabs'`
  )
  body = rewriteTypeImports(body, rel)
  const mid = relToHoist[rel]
  const target = path.join(MAP, `${mid}.ts`)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, body)
  console.log('wrote', `${mid}.ts`)
}

for (const abs of oldTypeFiles) {
  fs.unlinkSync(abs)
  console.log('removed', path.relative(MAP, abs))
}

const hoistedIds = [...new Set(Object.values(relToHoist))].sort()

const blocks = hoistedIds.map((id) => {
  if (id === 'Map.MapLoader.types') {
    return `export type { LoadResult as MapLoaderLoadResult, MapLoaderProps, MapLoaderRef } from './${id}'`
  }
  if (id === 'Map.Markers.types') {
    return `export type {\n  MapCoord,\n  CanvasMarkerLayer,\n  AddMarkersIconOptions,\n  AddMarkersLayersOptions,\n  MarkersProps,\n  MarkersHandle\n} from './${id}'`
  }
  if (id === 'Map.CenterMarker.types') {
    return `export type {\n  CenterMarkerProps,\n  CenterMarkerRef,\n  AddCenterMarkerOptions\n} from './${id}'`
  }
  if (id === 'Map.coordsToWgs84.types') {
    return `export type { MapPoint as CoordsToWgs84MapPoint } from './${id}'`
  }
  return `export type * from './${id}'`
})

const header = `/**\n * Map 类型聚合：分片为 Map.*.types.ts（见 ai/rules/lyrixi-develop-type-file.mdc）\n * 与 ListAsync/ActionSheet 一致，子目录不再保留 types.ts。\n */\n`

fs.writeFileSync(path.join(MAP, 'types.ts'), header + blocks.join('\n') + '\n')
console.log('updated Map/types.ts')
