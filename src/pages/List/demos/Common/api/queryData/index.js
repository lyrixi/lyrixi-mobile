import { Request } from 'lyrixi-mobile'
import locale from 'library/utils/locale'
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
          resolve({
            status: data?.list.length === 0 ? 'empty' : undefined,
            message: '',
            data: data
          })
        } else {
          resolve({
            status: '500',
            message: result.message || locale('获取数据错误！'),
            data: null
          })
        }
      })
      .catch((err) => {
        resolve({
          status: '500',
          message: err?.data?.message || locale('获取数据异常！'),
          data: null
        })
      })
  })
}

export default queryData
