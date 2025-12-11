import { LocaleUtil, Request } from 'lyrixi-mobile'
import serverData from './serverData'
import localData from './localData'

// 获取列表
let page = 1
// 兼容新 List.Main 要求：外部仍返回数组，调用处已包装为新对象
function queryData(params, { action } = {}) {
  return new Promise((resolve) => {
    if (typeof action === 'bottomRefresh') {
      page++
    } else {
      page = 1
    }
    params.page = page
    Request.post(
      'url',
      { ...serverData(params) },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // application/json;charset=UTF-8
        }
      }
    )
      .then((result) => {
        if (result.code === '1') {
          let data = localData(result)
          let status = 'loading'
          // 无数据
          if (data?.list?.length === 0) {
            status = 'empty'
          }
          // 最后一页
          else if (data.totalPage >= page || data?.list?.length > 50) {
            status = 'noMore'
          }

          resolve({
            status: status,
            message: '',
            data: data
          })
        } else {
          resolve({
            status: 'error',
            message: result.message || LocaleUtil.locale('获取数据错误！'),
            data: null
          })
        }
      })
      .catch((err) => {
        resolve({
          status: 'error',
          message: err?.data?.message || LocaleUtil.locale('获取数据异常！'),
          data: null
        })
      })
  })
}

export default queryData
