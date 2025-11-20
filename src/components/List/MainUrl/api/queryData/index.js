import { Request } from 'seedsui-react'
import locale from 'library/utils/locale'

// 获取列表
let page = 1
// 兼容新 List.Main 要求：外部仍返回数组，调用处已包装为新对象
function queryData(url, params, { previousResult, action, onLoad } = {}) {
  return new Promise((resolve) => {
    if (action === 'bottomRefresh') {
      page++
    } else {
      page = 1
    }
    params.page = page
    params.rows = params.rows || 20
    Request.post(
      url,
      {
        page: page,
        ...params
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // application/json;charset=UTF-8
        }
      }
    )
      .then(async (result) => {
        let newResult = await onLoad(result)
        // 当前列表
        let currentList = page === 1 ? [] : previousResult?.list

        // 加载成功
        if (newResult.status !== 'error') {
          // 判断是否暂无数据
          if (!currentList?.length && !newResult?.list?.length) {
            newResult.status = 'empty'
          }
          // 判断是否有下一页
          else if (newResult?.totalPage >= page || newResult?.list?.length > params.rows) {
            newResult.status = 'noMore'
          }
          // 有更多数据
          else {
            newResult.status = 'loading'
          }

          // 合并列表
          newResult.list = currentList.concat(newResult?.list || [])
        }

        resolve(newResult)
      })
      .catch((err) => {
        resolve({
          status: 'error',
          message: err?.data?.message || locale('获取数据异常！'),
          list: null
        })
      })
  })
}

export default queryData
