// 内库使用-start
import Bridge from './../../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */

function getBrowserLocation(params = {}) {
  return new Promise((resolve) => {
    Bridge.getBrowserLocation({
      ...params,
      onSuccess: resolve,
      onError: resolve
    })
  })
}

export default getBrowserLocation
