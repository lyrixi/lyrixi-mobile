import type { DistrictMainApiResult } from '../../types'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Request from './../../../../utils/Request'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Request } from 'lyrixi-mobile'
测试使用-end */

function resolveCountryRegionsList(
  list: unknown[] | undefined,
  resolve: (value: DistrictMainApiResult) => void
): void {
  const normalizedList = list || []
  if (normalizedList.length) {
    resolve({
      status: 'success',
      list: normalizedList
    })
    return
  }
  // 无子节点时，视为末级节点
  resolve({
    status: 'empty',
    list: []
  })
}

function loadCountryRegions(countryId: string | number = '86'): Promise<DistrictMainApiResult> {
  return new Promise((resolve) => {
    const language = LocaleUtil.getLanguage()
    const countryKey = String(countryId)

    window.countryRegions =
      window.countryRegions ||
      (JSON.parse(window.sessionStorage.getItem('countryRegions') || '{}') as Record<
        string,
        unknown[]
      >)
    if (window.countryRegions?.[countryKey]) {
      resolveCountryRegionsList(window.countryRegions[countryKey], resolve)
      return
    }

    Request.get(
      `https://lyrixi.github.io/lyrixi-mobile/assets/district/${language}/${countryKey}.json`,
      undefined,
      undefined
    )
      .then(function (list: unknown) {
        window.countryRegions = JSON.parse(
          window.sessionStorage.getItem('countryRegions') || '{}'
        ) as Record<string, unknown[]>
        if (window.countryRegions) {
          window.countryRegions[countryKey] = (list as unknown[]) || []
          window.sessionStorage.setItem('countryRegions', JSON.stringify(window.countryRegions))
          resolveCountryRegionsList(window.countryRegions[countryKey], resolve)
        }
      })
      .catch(() => {
        resolve({
          status: 'error',
          message: LocaleUtil.locale(
            '获取省市区数据失败',
            'lyrixi_6779a06b0961e051e7b3ea0296305d18'
          ) as string
        })
      })
  })
}

export default loadCountryRegions
