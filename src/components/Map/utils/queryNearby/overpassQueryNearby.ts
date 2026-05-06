import type { QueryNearbyParams, OverpassNode } from './types'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function isOverpassData(d: unknown): d is { elements: OverpassNode[] } {
  if (!d || typeof d !== 'object') {
    return false
  }
  const o = d as { elements?: unknown }
  return Array.isArray(o.elements)
}

// 搜索附近
function overpassQueryNearby({ keyword, longitude, latitude, radius }: QueryNearbyParams) {
  const nearQuery = radius ? `(around:${radius},${latitude},${longitude})` : ''

  const overpassQuery = `
        [out:json];
        node${nearQuery}["${keyword}"];
        out center;
    `

  return new Promise((resolve) => {
    fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`)
      .then((response) => response.json())
      .then((data: unknown) => {
        if (isOverpassData(data) && data.elements.length > 0) {
          const list: { name: string; latitude: number; longitude: number; address: string; type: 'wgs84' }[] = []
          for (const item of data.elements) {
            const name = item.tags?.name
            const tags = item.tags
            const address =
              (tags?.['addr:city'] || '') +
              (tags?.['addr:housename'] || '') +
              (tags?.['addr:postcode'] || '') +
              (tags?.['addr:street'] || '')

            if (!name && !address) {
              continue
            }
            const lat = item.lat
            const lon = item.lon
            if (typeof lat !== 'number' || typeof lon !== 'number') {
              continue
            }
            list.push({
              name: name || address,
              latitude: lat,
              longitude: lon,
              address: address,
              type: 'wgs84'
            })
          }
          if (list.length) {
            resolve({
              status: 'success' as const,
              list: list
            })
            return
          }
        }
        resolve({
          status: 'empty' as const,
          message: LocaleUtil.locale('暂无数据', 'lyrixi_21efd88b67a39834582ad99aabb9dc60')
        })
      })
      .catch(() => {
        resolve({
          status: 'error' as const,
          message: LocaleUtil.locale('查询失败', 'lyrixi_0d66ed02d74d0bd89431d6d59533ffb3')
        })
      })
  })
}

export default overpassQueryNearby
