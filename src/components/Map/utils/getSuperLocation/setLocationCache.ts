import CacheKeyPrefix from './CacheKeyPrefix'

import type { LocCacheData } from './types'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
import GeoUtil from './../../../../utils/GeoUtil'
import Storage from './../../../../utils/Storage'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, GeoUtil, Storage } from 'lyrixi-mobile'
测试使用-end */


// 设置缓存
async function setLocationCache(
  type: string,
  cacheExpires: number,
  data: LocCacheData
): Promise<boolean> {
  if (!cacheExpires) return false
  const wgs84Data = ObjectUtil.cloneDeep(data) as LocCacheData
  const gcj02Data = ObjectUtil.cloneDeep(data) as LocCacheData
  if (type === 'wgs84') {
    const gcj02Point = GeoUtil.coordtransform([data.longitude, data.latitude], 'wgs84', 'gcj02')
    if (!gcj02Point) {
      return false
    }
    gcj02Data.longitude = gcj02Point[0]
    gcj02Data.latitude = gcj02Point[1]
  } else if (type === 'gcj02') {
    const wgs84Point = GeoUtil.coordtransform([data.longitude, data.latitude], 'gcj02', 'wgs84')
    if (!wgs84Point) {
      return false
    }
    wgs84Data.longitude = wgs84Point[0]
    wgs84Data.latitude = wgs84Point[1]
  }

  await Storage.setItem(`${CacheKeyPrefix}wgs84`, {
    data: wgs84Data,
    expires: Date.now() + cacheExpires * 1000
  })
  await Storage.setItem(`${CacheKeyPrefix}gcj02`, {
    data: gcj02Data,
    expires: Date.now() + cacheExpires * 1000
  })
  return true
}

export default setLocationCache
