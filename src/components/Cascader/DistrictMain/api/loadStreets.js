// 内库使用-start
import Request from './../../../../utils/Request'
// 内库使用-end

/* 测试使用-start
import { Request } from 'lyrixi-mobile'
测试使用-end */

function loadStreets(districtId) {
  return new Promise((resolve) => {
    // 优先读取缓存
    window.streets = window.streets || JSON.parse(window.sessionStorage.getItem('streets') || '{}')
    if (window.streets?.[districtId]) {
      resolve({
        status: 'success',
        list: window.streets[districtId]
      })
      return
    }

    // 加载语言对应的文件
    Request.get(
      `https://lyrixi.github.io/lyrixi-mobile/assets/district/streets.json`,
      {
        districtId: districtId
      }
    )
      .then(function (list) {
        // 存到缓存中
        window.streets = JSON.parse(window.sessionStorage.getItem('streets') || '{}')
        window.streets[districtId] = list || []
        window.sessionStorage.setItem('streets', JSON.stringify(window.streets))
        if (list?.length) {
          resolve({
            status: 'success',
            list: window.streets[districtId]
          })
        } else {
          resolve({
            status: 'empty',
            list: []
          })
        }
      })
      .catch(() => {
        resolve({
          status: 'error',
          message: LocaleUtil.locale('获取街道异常')
        })
      })
  })
}

export default loadStreets
