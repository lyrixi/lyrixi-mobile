import type { MapPoint } from './types'

// 内库使用-start
import GeoUtil from './../../../../utils/GeoUtil'
// 内库使用-end

/* 测试使用-start
import { GeoUtil } from 'lyrixi-mobile'
测试使用-end */



// 单个点转换
function getPoint(point: MapPoint, type: string | undefined): MapPoint | null {
  if (!point?.longitude || !point?.latitude) {
    console.error('MapContainer coordsToWgs84 invalid parameter:', point)
    return null
  }
  // 没有坐标类型无法转换
  if (!point.type && !type) return point

  const newPoint = GeoUtil.coordtransform(
    [Number(point.longitude), Number(point.latitude)],
    (point.type || type) as string,
    'wgs84'
  )
  if (!newPoint) {
    return null
  }
  return {
    ...point,
    type: 'wgs84',
    longitude: newPoint[0],
    latitude: newPoint[1]
  }
}

function coordsToWgs84(points: MapPoint, type?: string): MapPoint | null
function coordsToWgs84(points: MapPoint[] | null | undefined, type?: string): (MapPoint | null)[]
function coordsToWgs84(points: MapPoint | MapPoint[] | null | undefined, type?: string): MapPoint | (MapPoint | null)[] | null {
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

export type { MapPoint } from './types'
export default coordsToWgs84
