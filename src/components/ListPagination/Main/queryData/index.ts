// @ts-nocheck
// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Request from './../../../../utils/Request'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Request } from 'lyrixi-mobile'
测试使用-end */

// 兼容新 ListAsync 要求：外部仍返回数组，调用处已包装为新对象
function queryData(
  url,
  headers = {},
  payload,
  {
    // 每页行数, 为空则不分页
    rows,
    // 每个实例维护自己的页码，避免多 ListPagination 时 page 串用
    pageRef,
    previousResult,
    action,
    formatPayload,
    formatResult
  } = {}
) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    if (action === 'bottomRefresh') {
      pageRef.current++
    } else {
      pageRef.current = 1
    }

    let queryParams = (await formatPayload?.({ rows: rows, ...(payload || {}), page: rows ? pageRef.current : undefined })) || { rows: rows, ...(payload || {}), page: rows ? pageRef.current : undefined }

    Request.post(url, queryParams, {
      headers: {
        'Content-Type': 'application/json',
        ...(headers || {})
      }
    })
      .then(async (result) => {
        let newResult = await formatResult(result, { payload: queryParams })
        // 当前列表
        let currentList = pageRef.current === 1 ? [] : previousResult?.list

        // 加载成功
        if (newResult.status !== 'error') {
          // 判断是否暂无数据
          if (!currentList?.length && !newResult?.list?.length) {
            newResult.status = 'empty'
          }
          // 不分页
          else if (!rows) {
            newResult.status = 'noMore'
          }
          // 有总页数, 优先使用总页数判断
          else if (newResult?.totalPage) {
            if (pageRef.current >= newResult?.totalPage) {
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
          else if (newResult?.list?.length < rows) {
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
          message:
            err?.data?.message ||
            LocaleUtil.locale('获取数据异常！', 'lyrixi_a085fb7c5cb81143dcec0f299fff709a'),
          list: null
        })
      })
  })
}

export default queryData
