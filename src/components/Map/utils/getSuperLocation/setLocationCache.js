import CacheKeyPrefix from './CacheKeyPrefix'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
import GeoUtil from './../../../../utils/GeoUtil'
import Storage from './../../../../utils/Storage'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, GeoUtil, Storage } from 'lyrixi-mobile'
测试使用-end */

// 设置缓存
async function setLocationCache(type, cacheExpires, data) {
  if (!cacheExpires) return
  // 记录两种缓存: 'wgs84'|'gcj02'
  let wgs84Data = ObjectUtil.cloneDeep(data)
  let gcj02Data = ObjectUtil.cloneDeep(data)
  // wgs84的坐标转换为gcj02的坐标
  if (type === 'wgs84') {
    let gcj02Point = GeoUtil.coordtransform([data.longitude, data.latitude], 'wgs84', 'gcj02')
    gcj02Data.longitude = gcj02Point[0]
    gcj02Data.latitude = gcj02Point[1]
  }
  // gcj02的坐标转换为wgs84的坐标
  else if (type === 'gcj02') {
    let wgs84Point = GeoUtil.coordtransform([data.longitude, data.latitude], 'gcj02', 'wgs84')
    wgs84Data.longitude = wgs84Point[0]
    wgs84Data.latitude = wgs84Point[1]
  }

  // 存储两种缓存
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
