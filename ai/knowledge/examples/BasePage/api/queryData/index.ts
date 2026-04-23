import { Device, Loading, LocaleUtil, ObjectUtil, Request } from 'lyrixi-mobile'

import type { BasePageQueryDataResult } from '../../types'
import { isLoadApiResponse, toBasePageDetail } from '../../types'

const locale = LocaleUtil.locale

/**
 * 首屏/详情加载（与 init-page DSL：api.modules.queryData 同构）
 * 仅返回结构化结果，不返回裸 string，便于页面做类型收窄。
 */
function queryData(): Promise<BasePageQueryDataResult> {
  return new Promise((resolve) => {
    // Delete it: Test mock data
    resolve({
      data: {}
    })
    return
    // Delete it: end

    const id = Device.getUrlParameter('id')

    if (!id) {
      resolve({
        status: 'info',
        message: locale('请传入id')
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
            status: '500',
            message: locale('获取数据错误！')
          })
          return
        }
        const r = raw
        if (r.code === '1') {
          if (ObjectUtil.isEmpty(r.data)) {
            resolve({
              status: 'empty',
              message: locale('暂无数据')
            })
          } else {
            const detail = toBasePageDetail(r.data)
            if (detail === null) {
              resolve({
                status: '500',
                message: locale('获取数据错误！')
              })
            } else {
              resolve({ data: detail })
            }
          }
        } else {
          resolve({
            status: '500',
            message: locale('获取数据错误！')
          })
        }
      })
      .catch(() => {
        Loading.hide()
        resolve({
          status: 'error',
          message: locale('获取数据异常！')
        })
      })
  })
}

export default queryData
