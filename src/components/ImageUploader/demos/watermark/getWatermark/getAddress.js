import { Bridge, LocaleUtil } from 'lyrixi-mobile'
import getLocation from './getLocation'

// 获取地址和偏差
function getAddress() {
  return new Promise((resolve) => {
    // 立即定位
    getLocation({
      timeout: Bridge.platform === 'lyrixi' ? 11000 : 3000,
      cacheExpires: 60,
      onSuccess: async (data) => {
        // 客户端中不需要再getAddress
        if (data.address) {
          resolve({
            address: data.address,
            longitude: data.longitude,
            latitude: data.latitude
          })
          return
        }
        let address = ''
        try {
          const result = await DistrictUtil.getAddress({
            cacheExpires: 60,
            latitude: data.latitude,
            longitude: data.longitude
          })
          address = result && result.address ? result.address : ''
        } catch (error) {
          console.error(`地图组件未加载，导致无法获取地理逆解析:${data.longitude},${data.latitude}`)
        }

        if (address) {
          resolve({
            address: address,
            longitude: data.longitude,
            latitude: data.latitude
          })
        } else {
          console.error('获取地址失败')
          resolve({
            errCode: 'NETWORK_ERROR',
            errMsg: LocaleUtil.locale('网络异常，定位失败')
          })
        }
      },
      onError: (res) => {
        // 没有拿到位置再次重试5秒
        console.error('定位失败:', JSON.stringify(res))

        if (res?.errCode === 'PERMISSION_DENIED') {
          resolve({
            errCode: 'PERMISSION_DENIED',
            errMsg: LocaleUtil.locale('未开启定位服务或权限，定位失败')
          })

          return
        }
        if (res?.errCode === 'NETWORK_ERROR') {
          resolve({
            errCode: 'NETWORK_ERROR',
            errMsg: LocaleUtil.locale('网络异常，定位失败')
          })
          return
        }

        resolve({
          errCode: 'UNKNOWN_ERROR',
          errMsg: ''
        })
      }
    })
  })
}

export default getAddress
