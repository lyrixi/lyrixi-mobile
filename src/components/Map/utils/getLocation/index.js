// 内库使用-start
import Bridge from './../../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */

// 定位
function getLocation(options) {
  const type = options?.type || 'wgs84'

  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    let defaultGetLocation = window?.getLocationDefault || window?.APILoaderConfig?.getLocation
    if (typeof defaultGetLocation === 'function') {
      let result = await defaultGetLocation({
        type: type
      })
      resolve(result)
      return
    }

    // 开始定位
    Bridge.getLocation({
      type: type,
      onSuccess: async (res) => {
        console.log('lyrixi location success:', res)
        resolve(res)
      },
      onError: (error) => {
        console.error('lyrixi location fail:', error)
        // 赋值
        resolve(error)
      }
    })
  })
}

export default getLocation
