// 内库使用-start
import Request from './../../Request'
import LocaleUtil from './../../LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function uploadServerId({ url, header, payload }) {
  return new Promise((resolve) => {
    Request.post(url, payload, {
      headers: header || {
        'Content-Type': 'application/x-www-form-urlencoded'
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
          message: error?.response?.data?.message || LocaleUtil.locale('上传serverId异常')
        })
      })
  })
}

export default uploadServerId
