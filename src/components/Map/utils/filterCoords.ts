import type { MapCoord } from '../types'

// 过滤不合法的坐标数据
function filterCoords(coords: unknown): MapCoord[] {
  if (!coords || !Array.isArray(coords)) {
    return []
  }

  return (coords as MapCoord[]).filter((coord) => {
    return coord?.longitude && coord?.latitude && coord?.type
  })
}

export default filterCoords
