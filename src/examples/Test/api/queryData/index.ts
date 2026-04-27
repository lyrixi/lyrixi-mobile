import { Device, Loading, LocaleUtil, ObjectUtil, Request } from 'lyrixi-mobile'

import type { QueryResult, RawResult } from '../../types'
import toData from './toData'
import toServerParams from './toServerParams'

const locale = LocaleUtil.locale

function queryData<T extends Record<string, unknown> = Record<string, unknown>>(
  queryParams: Record<string, unknown> | null | undefined
): Promise<QueryResult<T[]>> {
  return new Promise((resolve) => {
    // payload.id插槽值: 开始
    const id = Device.getUrlParameter('id') ?? ''
    if (!id) {
      resolve({
        status: 'error',
        message: locale('请传入id'),
        data: undefined
      })
      return
    }
    // payload.id插槽值: 结束

    Loading.show()
    Request.post(
      '/api/examples/queryData.do',
      {
        // payload.id插槽值: 开始
        id: id,
        // payload.id插槽值: 结束
        // payload.queryParams插槽值: 开始
        ...toServerParams(queryParams as Record<string, unknown>)
        // payload.queryParams插槽值: 结束
      },
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    )
      .then((raw: unknown) => {
        Loading.hide()
        const response: RawResult<Record<string, unknown>> = raw as RawResult<Record<string, unknown>>
        if (String(response?.code) === '1') {
          if (ObjectUtil.isEmpty(response?.rows)) {
            resolve({
              status: 'empty',
              message: response.errMsg ?? response.message ?? locale('暂无数据'),
              data: undefined
            })
            return
          }
          const data = (response.rows as Array<Record<string, unknown>>).map((row) => toData(row)) as T[]
          resolve({
            status: 'success',
            message: response.errMsg ?? response.message ?? locale('动态信息'),
            data: data
          })
          return
        }
        resolve({
          status: 'error',
          message: response?.errMsg ?? response?.message || locale('获取数据错误！'),
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
