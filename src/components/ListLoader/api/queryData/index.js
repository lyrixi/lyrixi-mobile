// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Request from './../../../../utils/Request'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Request } from 'lyrixi-mobile'
测试使用-end */

// 获取列表
let page = 1
// 兼容新 List.Main 要求：外部仍返回数组，调用处已包装为新对象
function queryData(
  url,
  headers = {},
  payload,
  { previousResult, action, formatPayload, formatResult } = {}
) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    if (action === 'bottomRefresh') {
      page++
    } else {
      page = 1
    }
    let queryParams = (await formatPayload?.({ ...(payload || {}), page })) || {}
    if (!queryParams?.rows) queryParams.rows = 20

    Request.post(url, queryParams, {
      headers: {
        'Content-Type': 'application/json',
        ...(headers || {})
      }
    })
      .then(async (result) => {
        let newResult = await formatResult(result, { payload: queryParams })
        // 当前列表
        let currentList = page === 1 ? [] : previousResult?.list

        // 加载成功
        if (newResult.status !== 'error') {
          // 判断是否暂无数据
          if (!currentList?.length && !newResult?.list?.length) {
            newResult.status = 'empty'
          }
          // 有总页数, 优先使用总页数判断
          else if (newResult?.totalPage) {
            if (page >= newResult?.totalPage) {
              newResult.status = 'noMore'
            } else {
              newResult.status = 'loading'
            }
          }
          // 有总行数, 优先使用总页数判断
          else if (newResult?.totalRows) {
            if (
              (currentList?.length || 0) + (newResult?.list?.length || 0) >=
              newResult?.totalRows
            ) {
              newResult.status = 'noMore'
            } else {
              newResult.status = 'loading'
            }
          }
          // 无总页数无总行数, 根据rows判断是否为最后一页
          else if (newResult?.list?.length < queryParams?.rows) {
            newResult.status = 'noMore'
          }
          // 有更多数据
          else {
            newResult.status = 'loading'
          }
        }

        resolve(newResult)
      })
      .catch((err) => {
        resolve({
          status: 'error',
          message: err?.data?.message || LocaleUtil.locale('获取数据异常！'),
          list: null
        })
      })
  })
}

export default queryData
