// 内库使用-start
import ObjectUtil from '../../../../utils/ObjectUtil'
import LocaleUtil from '../../../../utils/LocaleUtil'
import Request from './../../../../utils/Request'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, LocaleUtil, Request } from 'lyrixi-mobile'
测试使用-end */

interface ApiResult {
  status: 'success' | 'error'
  list?: unknown[]
  message?: string
}

function loadCountries(): Promise<ApiResult> {
  return new Promise((resolve) => {
    const language = LocaleUtil.getLanguage()

    window.countries =
      window.countries || JSON.parse(window.sessionStorage.getItem('countries') || '[]') as unknown[]
    if (!ObjectUtil.isEmpty(window.countries)) {
      resolve({
        status: 'success',
        list: window.countries
      })
      return
    }

    Request.get(`https://lyrixi.github.io/lyrixi-mobile/assets/district/${language}/country.json`, undefined, undefined)
      .then(function (json: unknown) {
        window.countries = (json as unknown[]) || []
        window.sessionStorage.setItem('countries', JSON.stringify(window.countries))
        resolve({
          status: 'success',
          list: window.countries
        })
      })
      .catch(() => {
        resolve({
          status: 'error',
          message: LocaleUtil.locale('获取国家数据失败', 'lyrixi_12c1c752c3d8f3ce8f3c687cabd4a626') as string
        })
      })
  })
}

export default loadCountries
