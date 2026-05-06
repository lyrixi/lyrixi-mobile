import type { GetLocationOptions } from './types'

// 内库使用-start
import Bridge from './../../../../utils/Bridge'
import normalizeLocationResult from './../normalizeLocationResult'
// 内库使用-end

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */


export type { GetLocationOptions } from './types'

// 定位
function getLocation(options: GetLocationOptions = {}): Promise<unknown> {
  const t = options?.type || 'wgs84'

  return new Promise((resolve) => {
    const w = window
    const defaultGet = w.defaultGetLocation as ((o: { type: string }) => Promise<unknown>) | undefined
    if (typeof defaultGet === 'function') {
      void defaultGet({ type: t }).then((result: unknown) => {
        resolve(result)
      })
      return
    }

    Bridge.getLocation({
      type: t,
      onSuccess: (result: unknown) => {
        console.log('lyrixi location success:', result)
        resolve(normalizeLocationResult(result as Record<string, unknown>))
      },
      onError: (error: unknown) => {
        console.error('lyrixi location fail:', error)
        resolve(error)
      },
      onCancel: (error: unknown) => {
        console.error('lyrixi location cancel:', error)
        resolve(error)
      }
    } as Record<string, unknown>)
  })
}

export default getLocation
