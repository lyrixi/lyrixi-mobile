import coordsToFit from './../coordsToFit'

import type { AddressParams } from './types'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */



// 百度地址逆解析
function bmapGetAddress(params: AddressParams): Promise<unknown> {
  return new Promise((resolve) => {
    const bmap = window.BMap
    if (!bmap) {
      resolve({ status: 'error', message: 'BMap not loaded' })
      return
    }
    const coord = coordsToFit({
      longitude: params.longitude,
      latitude: params.latitude,
      type: params.type,
      inChinaTo: 'bd09'
    }) as { longitude?: number; latitude?: number } | null

    if (!coord?.longitude || !coord?.latitude) {
      resolve({ status: 'error', message: 'invalid coordinates' })
      return
    }

    const bdPoint = new bmap.Point(Number(coord.longitude), Number(coord.latitude))
    const geocoder = new bmap.Geocoder()
    geocoder.getLocation(bdPoint, (res: unknown) => {
      const r = res as { address?: string }
      if (!r?.address) {
        resolve({
          status: 'error',
          message: LocaleUtil.locale(
            '获取地址失败, 请稍后重试',
            'lyrixi_f1f199dd46c73946aa4b3140e98752a4'
          )
        })
        return
      }

      resolve({
        ...params,
        status: 'success',
        address: r.address
      })
    })
  })
}

export type { AddressParams } from './types'
export default bmapGetAddress
