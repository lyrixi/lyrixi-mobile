// 内库使用-start
import GeoUtil from './../../GeoUtil'
// 内库使用-end

/* 测试使用-start
import { GeoUtil } from 'lyrixi-mobile'
测试使用-end */

interface OpenLocationCoord {
  longitude: number
  latitude: number
  type: string
  isInChina?: boolean
  [key: string]: unknown
}

// 格式化openLocation参数, 坐标自动转换: 国内转gcj02, 国外转wgs84
function formatOpenLocationCoord(coord: OpenLocationCoord | null | undefined): OpenLocationCoord | null | undefined {
  // 参数不合法
  if (!coord?.longitude || !coord?.latitude || !coord?.type) {
    return coord
  }

  // 是否在中国
  let isInChina = GeoUtil.isInChina([coord.longitude, coord.latitude]) === true
  coord.isInChina = isInChina

  // 不在中国
  if (!isInChina) {
    const points = GeoUtil.coordtransform(
      [coord.longitude, coord.latitude],
      coord.type,
      'wgs84'
    )
    if (!points) return coord

    return {
      ...coord,
      longitude: points[0],
      latitude: points[1],
      type: 'wgs84'
    }
  }
  // 在中国
  else {
    const points = GeoUtil.coordtransform(
      [coord.longitude, coord.latitude],
      coord.type,
      'gcj02'
    )
    if (!points) return coord

    return {
      ...coord,
      longitude: points[0],
      latitude: points[1],
      type: 'gcj02'
    }
  }
}

export default formatOpenLocationCoord
