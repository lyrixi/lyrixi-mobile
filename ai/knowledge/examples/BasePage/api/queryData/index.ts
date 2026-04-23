import { Device, Loading, LocaleUtil, ObjectUtil, Request } from 'lyrixi-mobile'

import type { Result } from '../../types'
import { isLoadApiResponse, toBasePageDetail } from '../../types'

const locale = LocaleUtil.locale

/**
 * 首屏/详情加载（与 init-page DSL：api.modules.queryData 同构）
 * 统一为 types.Result：{ status, message, data }
 */
function queryData(): Promise<Result> {
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
      .then((raw: unknown) => {
        Loading.hide()
        if (!isLoadApiResponse(raw)) {
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
            const detail = toBasePageDetail(r.data)
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
                data: detail
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
