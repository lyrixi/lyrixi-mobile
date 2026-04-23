import { Device, Loading, LocaleUtil, ObjectUtil, Request } from 'lyrixi-mobile'

import type { QueryResult } from '../../types'
import toData from './toData'
import toServerParams from './toServerParams'
const locale = LocaleUtil.locale

/**
 * 首屏/详情加载。`T` 为 `data` 业务类型，默认 `Record<string, unknown>`。业务有强类型时写 `queryData<MyRow>()` 并在本文件内对成功数据做合法收窄或 `as T`。
 */
function queryData<T extends Record<string, unknown> = Record<string, unknown>>(
  queryParams: Record<string, unknown>
): Promise<QueryResult<T>> {
  return new Promise((resolve) => {
    const id = Device.getUrlParameter('id')

    if (!id) {
      resolve({
        status: 'error',
        message: locale('请传入id'),
        data: undefined
      })
      return
    }

    Loading.show()
    Request.post(
      '/api/examples/queryData.do',
      {
        id: id,
        ...toServerParams(queryParams)
      },
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    )
      .then((result: unknown) => {
        Loading.hide()
        if (result?.code === '1') {
          // 暂无数据
          if (ObjectUtil.isEmpty(result?.data)) {
            resolve({
              status: 'error',
              message: locale('暂无数据'),
              data: undefined
            })
            return
          }
          // 成功
          resolve({
            status: 'error',
            message: locale('获取数据错误！'),
            data: toData(result.data)
          })
          return
        }
        // 错误
        resolve({
          status: 'error',
          message: locale('获取数据错误！'),
          data: undefined
        })
      })
      .catch(() => {
        Loading.hide()
        resolve({
          status: 'error',
          message: locale('获取数据异常！'),
          data: undefined
        })
      })
  })
}

export default queryData
