// 第三方库导入
import { Request, LocaleUtil } from 'lyrixi-mobile'

// 公共组件导入

// 内部组件导入

// 样式图片等资源文件导入

const locale = LocaleUtil.locale

// 获取报表数据
function queryData(params) {
  return new Promise((resolve) => {
    Request.post('xxx', params, {
      // headers: {
      //   'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
      //   'content-type': 'application/json'
      // }
    })
      .then((result) => {
        if (result.code === '1') {
          let list = result.data
          // Empty
          if (!Array.isArray(list) || !list.length) {
            resolve({
              status: 'empty',
              message: locale('暂无报表数据')
            })
          }
          // Success
          else {
            resolve({ data: list })
          }
        } else {
          resolve({
            status: '500',
            message: result.message || locale('服务器繁忙，请稍后重试')
          })
        }
      })
      .catch((err) => {
        resolve({
          status: '500',
          message: err?.data?.message || locale('服务器繁忙，请稍后重试')
        })
      })
  })
}

export default queryData
