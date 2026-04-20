// 内库使用-start
import Bridge from './../../../../utils/Bridge'
import normalizeLocationResult from './../normalizeLocationResult'
// 内库使用-end

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */

function getBrowserLocation(params = {}) {
  return new Promise((resolve) => {
    Bridge.getBrowserLocation({
      ...params,
      onSuccess: (r) => resolve(normalizeLocationResult(r as Record<string, unknown>)),
      onError: resolve
    })
  })
}

export default getBrowserLocation
