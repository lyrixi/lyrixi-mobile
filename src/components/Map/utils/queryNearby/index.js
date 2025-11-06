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
async function queryNearby({ map, keyword, longitude, latitude, type, radius }) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    let isTimeout = false
    // Search error protect: google and bmap error no callback
    let errorTimeout = window.setTimeout(() => {
      isTimeout = true
      resolve(LocaleUtil.locale('查询超时', 'lyrixi_query_time_out'))
    }, 5000)

    let result = null

    // 默认优先使用系统级定位
    let defaultQueryNearby = window?.queryNearbyDefault || window?.APILoaderConfig?.queryNearby
    if (typeof defaultQueryNearby === 'function') {
      result = await defaultQueryNearby({ map, keyword, longitude, latitude, type, radius })
      if (isTimeout) return
      window.clearTimeout(errorTimeout)
      resolve(result)
      return
    }

    if (window.google) {
      result = await googleQueryNearby({ map, keyword, longitude, latitude, type, radius })
    } else if (window.BMap) {
      result = await bmapQueryNearby({ map, keyword, longitude, latitude, type, radius })
    } else {
      result = await overpassQueryNearby({ map, keyword, longitude, latitude, type, radius })
    }
    if (isTimeout) return
    window.clearTimeout(errorTimeout)
    resolve(result)
  })
}

export default queryNearby
