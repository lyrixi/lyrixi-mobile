import bmapQueryNearby from './bmapQueryNearby'
import type { QueryNearbyParams } from './bmapQueryNearby'
import googleQueryNearby from './googleQueryNearby'
import overpassQueryNearby from './overpassQueryNearby'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 搜索附近
function queryNearby(params: QueryNearbyParams): Promise<unknown> {
  return new Promise((resolve) => {
    let queryNearbyTimeout = false
    const queryNearbyTimer = window.setTimeout(() => {
      queryNearbyTimeout = true
      const error = {
        status: 'error',
        message: String(
          LocaleUtil.locale('查询超时', 'lyrixi_82105ffb651ae5b2c2a08fa1b1b506ef')
        )
      }
      resolve(error)
    }, 5000)

    const run = async (): Promise<void> => {
      let result: unknown = null

      const def = window.defaultQueryNearby
      if (typeof def === 'function') {
        const fn = def as (p: QueryNearbyParams) => Promise<unknown> | unknown
        result = await fn(params)
      } else if (window.google) {
        result = await googleQueryNearby(params)
      } else if (window.BMap) {
        const p = bmapQueryNearby(params)
        result =
          p == null
            ? { status: 'error', message: String(LocaleUtil.locale('查询失败', 'lyrixi_0d66ed02d74d0bd89431d6d59533ffb3')) }
            : await p
      } else {
        result = await overpassQueryNearby(params)
      }
      if (queryNearbyTimeout) {
        return
      }
      window.clearTimeout(queryNearbyTimer)
      resolve(
        result ?? {
          status: 'error',
          message: String(LocaleUtil.locale('查询失败', 'lyrixi_0d66ed02d74d0bd89431d6d59533ffb3'))
        }
      )
    }
    void run()
  })
}

export default queryNearby
