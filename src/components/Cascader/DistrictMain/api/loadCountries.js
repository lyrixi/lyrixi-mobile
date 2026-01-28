import _ from 'lodash'

// 内库使用-start
import LocaleUtil from '../../../../utils/LocaleUtil'
import Request from './../../../../utils/Request'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Request } from 'lyrixi-mobile'
测试使用-end */

function loadCountries() {
  return new Promise((resolve) => {
    const language = LocaleUtil.getLanguage()

    // 优先读取缓存
    window.countries =
      window.countries || JSON.parse(window.sessionStorage.getItem('countries') || '[]')
    if (!_.isEmpty(window.countries)) {
      resolve({
        status: 'success',
        list: window.countries
      })
      return
    }

    // 加载语言对应的文件
    Request.get(`https://lyrixi.github.io/lyrixi-mobile/assets/district/${language}/country.json`)
      .then(function (json) {
        window.countries = json || []
        window.sessionStorage.setItem('countries', JSON.stringify(window.countries))
        resolve({
          status: 'success',
          list: window.countries
        })
      })
      .catch(() => {
        resolve({
          status: 'error',
          message: LocaleUtil.locale('获取国家数据失败', 'lyrixi_12c1c752c3d8f3ce8f3c687cabd4a626')
        })
      })
  })
}

export default loadCountries
