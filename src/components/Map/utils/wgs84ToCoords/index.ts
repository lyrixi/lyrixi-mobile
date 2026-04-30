// 内库使用-start
import GeoUtil from './../../../../utils/GeoUtil'
// 内库使用-end

/* 测试使用-start
import { GeoUtil } from 'lyrixi-mobile'
测试使用-end */

import type { MapPoint } from './types'

export type { MapPoint } from './types'

// 单个点转换
function getPoint(point: MapPoint, type: string | undefined): MapPoint | null {
  if (!point?.longitude || !point?.latitude) {
    console.error('MapContainer wgs84ToCoords invalid parameter:', point)
    return null
  }
  // 无需要转换
  if (!type) return point

  const newPoint = GeoUtil.coordtransform(
    [Number(point.longitude), Number(point.latitude)],
    (point.type || 'wgs84') as string,
    type
  )
  if (!newPoint) {
    return null
  }
  return {
    ...point,
    type: type,
    longitude: newPoint[0],
    latitude: newPoint[1]
  }
}

function wgs84ToCoords(point: MapPoint, type: string | undefined): MapPoint | null
function wgs84ToCoords(points: MapPoint[] | null | undefined, type: string | undefined): (MapPoint | null)[]
function wgs84ToCoords(
  points: MapPoint | MapPoint[] | null | undefined,
  type: string | undefined
): MapPoint | (MapPoint | null)[] | null {
  if (Array.isArray(points) && points.length) {
    return points.map((point) => {
      return getPoint(point, type)
    })
  }
  if (points && typeof points === 'object' && toString.call(points) === '[object Object]') {
    return getPoint(points as MapPoint, type)
  }
  return null
}

export default wgs84ToCoords
