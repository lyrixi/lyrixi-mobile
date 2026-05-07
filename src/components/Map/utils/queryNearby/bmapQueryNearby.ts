import coordsToFit from './../coordsToFit'

import type { QueryNearbyParams, FitCoord } from '../../types'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */


// 搜索附近, keyword:搜索关键词
function bmapQueryNearby({
  map,
  keyword,
  longitude,
  latitude,
  type,
  radius
}: QueryNearbyParams): Promise<unknown> | null {
  if (!map?.currentMap || !longitude || !latitude || !type) {
    return null
  }
  const bmap = window.BMap
  if (!bmap) {
    return null
  }
  return new Promise((resolve) => {
    const centerCoord = coordsToFit({
      longitude,
      latitude,
      type,
      inChinaTo: 'bd09',
      outChinaTo: 'wgs84'
    }) as FitCoord | null

    if (!centerCoord?.longitude || !centerCoord?.latitude) {
      resolve({ status: 'error', message: 'invalid center' })
      return
    }

    const centerPoint = new bmap.Point(Number(centerCoord.longitude), Number(centerCoord.latitude))

    ;(map.currentMap as { panTo: (p: unknown) => void }).panTo(centerPoint)

    const local = new bmap.LocalSearch(map.currentMap, {
      pageCapacity: 100,
      onSearchComplete: function (results: {
        getCurrentNumPois: () => number
        getPoi: (i: number) => {
          title?: string
          address?: string
          point: { lng: number; lat: number }
        }
      }) {
        if (local.getStatus() === window.BMAP_STATUS_SUCCESS) {
          const list: Array<Record<string, unknown>> = []
          for (let i = 0; i < results.getCurrentNumPois(); i++) {
            const item = results.getPoi(i)

            if (!item.title && !item.address) continue

            const lng = item.point.lng
            const lat = item.point.lat
            const t = centerCoord.isInChina ? 'bd09' : 'wgs84'

            list.push({
              name: item.title,
              address: item.address,
              longitude: lng,
              latitude: lat,
              type: t
            })
          }
          if (list.length) {
            resolve({
              status: 'success',
              list: list
            })
          } else {
            resolve({
              status: 'empty',
              message: LocaleUtil.locale('暂无数据', 'lyrixi_21efd88b67a39834582ad99aabb9dc60')
            })
          }
        } else {
          resolve({
            status: 'error',
            message: LocaleUtil.locale('查询失败', 'lyrixi_0d66ed02d74d0bd89431d6d59533ffb3')
          })
        }
      }
    } as Record<string, unknown>)

    if (centerPoint && radius) {
      local.searchNearby(keyword, centerPoint, radius)
    } else {
      local.search(keyword)
    }
  })
}

export type { QueryNearbyParams } from '../../types'
export default bmapQueryNearby
