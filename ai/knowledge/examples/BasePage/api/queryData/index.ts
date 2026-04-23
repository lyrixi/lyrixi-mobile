import { Device, Loading, LocaleUtil, ObjectUtil, Request } from 'lyrixi-mobile'

import type { QueryResult } from '../../types'
import { isLoadApiResponse, toObjectData } from '../../types'

const locale = LocaleUtil.locale

/**
 * 首屏/详情加载。`T` 为 `data` 业务类型，默认 `Record<string, unknown>`。业务有强类型时写 `queryData<MyRow>()` 并在本文件内对成功数据做合法收窄或 `as T`。
 */
function queryData<T extends Record<string, unknown> = Record<string, unknown>>(): Promise<QueryResult<T>> {
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
      '/api/examples/base-page/load',
      {
        id: id
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
          resolve({
            status: 'error',
            message: locale('获取数据错误！'),
            data: undefined
          })
          return
        }
        const r = raw
        if (r.code === '1') {
          if (ObjectUtil.isEmpty(r.data)) {
            resolve({
              status: 'error',
              message: locale('暂无数据'),
              data: undefined
            })
          } else {
            const detail = toObjectData(r.data)
            if (detail === null) {
              resolve({
                status: 'error',
                message: locale('获取数据错误！'),
                data: undefined
              })
            } else {
              resolve({
                status: 'success',
                message: '',
                data: detail as T
              })
            }
          }
        } else {
          resolve({
            status: 'error',
            message: locale('获取数据错误！'),
            data: undefined
          })
        }
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
