// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Request from './../../../../utils/Request'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Request } from 'lyrixi-mobile'
测试使用-end */

function loadCountryRegions(countryId = '86') {
  return new Promise((resolve) => {
    const language = LocaleUtil.getLanguage()

    // 优先读取缓存
    window.countryRegions =
      window.countryRegions || JSON.parse(window.sessionStorage.getItem('countryRegions') || '{}')
    if (window.countryRegions?.[countryId]) {
      resolve({
        status: 'success',
        list: window.countryRegions[countryId]
      })
      return
    }

    // 加载语言对应的文件
    Request.get(
      `https://lyrixi.github.io/lyrixi-mobile/assets/district/${language}/${countryId}.json`
    )
      .then(function (list) {
        // 存到缓存中
        window.countryRegions = JSON.parse(window.sessionStorage.getItem('countryRegions') || '{}')
        window.countryRegions[countryId] = list || []
        window.sessionStorage.setItem('countryRegions', JSON.stringify(window.countryRegions))
        resolve({
          status: 'success',
          list: window.countryRegions[countryId]
        })
      })
      .catch(() => {
        resolve({
          status: 'error',
          message: LocaleUtil.locale('获取省市区数据失败', 'lyrixi_6779a06b0961e051e7b3ea0296305d18')
        })
      })
  })
}

export default loadCountryRegions
