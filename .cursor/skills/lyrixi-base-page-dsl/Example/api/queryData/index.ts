import { Device, Loading, LocaleUtil, ObjectUtil, Request } from 'lyrixi-mobile'

import type { QueryResult, RawResult } from '../../types'
import toData from './toData'
import toServerParams from './toServerParams'

const locale = LocaleUtil.locale

/**
 * 加载数据
 */
function queryData<T extends Record<string, unknown> = Record<string, unknown>>(
  queryParams: Record<string, unknown> | null | undefined
): Promise<QueryResult<T>> {
  return new Promise((resolve) => {
    // payload.id插槽值: 开始
    const id = `payload.id插槽值`
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
    Request?.[`method插槽值`](
      'url插槽值',
      {
        // payload.id插槽值: 开始
        id: id,
        // payload.id插槽值: 结束
        // payload.queryParams插槽值: 开始
        ...toServerParams(queryParams as Record<string, unknown>)
        // payload.queryParams插槽值: 结束
      },
      {
        headers: `headers插槽值`
      }
    )
      .then((raw: unknown) => {
        Loading.hide()
        // 不要修改response, data变量名称(生成代码时删除此注释)
        const response: RawResult<Record<string, unknown>> = raw as RawResult<
          Record<string, unknown>
        >
        // 不要重新定义SUCCESS_CODE, 直接使用['status服务器插槽字段']的值作为成功值, 例如:"code:result.status": "1:成功;其它:失败", 就生成: response.code === '1'(生成代码时删除此注释)
        if (
          response?.['status服务器插槽字段'] ===
          '[status服务器插槽字段]:result.status插槽值的成功值'
        ) {
          if (ObjectUtil.isEmpty(response?.['data服务器插槽字段'])) {
            resolve({
              status: 'error',
              message: locale('暂无数据'),
              data: undefined
            })
            return
          }
          const data = toData(response?.['data服务器插槽字段'] as Record<string, unknown>) as T
          resolve({
            status: 'success',
            message: response?.['message服务器插槽字段'],
            data: data
          })
          return
        }
        resolve({
          status: 'error',
          message: response?.['message服务器插槽字段'] || locale('获取数据错误！'),
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
