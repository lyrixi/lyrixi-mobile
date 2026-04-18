import bmapQueryNearby from './bmapQueryNearby'
import googleQueryNearby from './googleQueryNearby'
import overpassQueryNearby from './overpassQueryNearby'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 搜索附近
function queryNearby({ map, keyword, longitude, latitude, type, radius }) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    let queryNearbyTimeout = false
    // Search error protect: google and bmap error no callback
    let queryNearbyTimer = window.setTimeout(() => {
      queryNearbyTimeout = true
      let error = {
        status: 'error',
        message: LocaleUtil.locale('查询超时', 'lyrixi_82105ffb651ae5b2c2a08fa1b1b506ef')
      }
      resolve(error)
    }, 5000)

    let result = null

    // 默认优先使用系统级定位
    let defaultQueryNearby = window?.defaultQueryNearby
    if (typeof defaultQueryNearby === 'function') {
      result = await defaultQueryNearby({ map, keyword, longitude, latitude, type, radius })
    } else if (window.google) {
      result = await googleQueryNearby({ map, keyword, longitude, latitude, type, radius })
    } else if (window.BMap) {
      result = await bmapQueryNearby({ map, keyword, longitude, latitude, type, radius })
    } else {
      result = await overpassQueryNearby({ map, keyword, longitude, latitude, type, radius })
    }
    if (queryNearbyTimeout) return
    window.clearTimeout(queryNearbyTimer)
    resolve(result)
  })
}

export default queryNearby
