// 内库使用-start
import Request from './../../../utils/Request'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function uploadFile({ url, header, payload }) {
  return new Promise((resolve) => {
    const newPayload = new FormData()
    for (const key in payload) {
      newPayload.append(key, payload[key])
    }

    console.log('调用浏览器uploadFile:', { url, header, newPayload })

    Request.post(url, newPayload, {
      headers: header || {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(async (result) => {
        resolve({
          status: 'success',
          result: result
        })
      })
      .catch((error) => {
        resolve({
          status: 'error',
          message: error?.response?.data?.message || LocaleUtil.locale('浏览器上传异常')
        })
      })
  })
}

export default uploadFile
