
import type { DistrictMainApiResult } from './types'

// 内库使用-start
import Request from './../../../../utils/Request'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function loadStreets(districtId: string | number): Promise<DistrictMainApiResult> {
  const districtKey = String(districtId)
  return new Promise((resolve) => {
    window.streets = window.streets || JSON.parse(window.sessionStorage.getItem('streets') || '{}') as Record<string, unknown>
    if (window.streets?.[districtKey]) {
      resolve({
        status: 'success',
        list: window.streets[districtKey] as unknown[]
      })
      return
    }

    Request.get(`https://lyrixi.github.io/lyrixi-mobile/assets/district/streets.json`, {
      districtId: districtKey
    }, undefined)
      .then(function (list: unknown) {
        window.streets = JSON.parse(window.sessionStorage.getItem('streets') || '{}') as Record<string, unknown>
        if (window.streets) {
          window.streets[districtKey] = (list as unknown[]) || []
          window.sessionStorage.setItem('streets', JSON.stringify(window.streets))
          const storedList = window.streets[districtKey] as unknown[]
          if (storedList?.length) {
            resolve({
              status: 'success',
              list: storedList
            })
          } else {
            resolve({
              status: 'empty',
              list: []
            })
          }
        }
      })
      .catch(() => {
        resolve({
          status: 'error',
          message: LocaleUtil.locale('获取街道异常', 'lyrixi_04a95d24fd2fec048b9caa91f496ceca') as string
        })
      })
  })
}

export default loadStreets
