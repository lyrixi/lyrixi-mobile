// 内库使用-start
import Request from './../../../../utils/Request'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function uploadServerId({
  item,
  getUploadUrl,
  getUploadParams,
  serverIds,
  uploadDir,
  watermark,
  maxWidth,
  formatUploadedItem,
  appId
}) {
  return new Promise((resolve) => {
    let uploadUrl = getUploadUrl?.({ platform: 'wechat' }) || {}
    let uploadExtraParams = getUploadParams?.({ platform: 'wechat' }) || {}

    // 构建参数
    let uploadParams = {
      ...uploadExtraParams,
      serverIds,
      uploadDir,
      watermark,
      maxWidth,
      appId
    }

    Request.post(uploadUrl, uploadParams, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Cookie: document.cookie
      }
    })
      .then(async (result) => {
        let data = result

        if (typeof formatUploadedItem === 'function') {
          data = await formatUploadedItem(item, { platform: 'wechat', result: result })
        }

        resolve(data)
      })
      .catch((err) => {
        resolve(LocaleUtil.locale('上传异常'))
        console.error('微信传照片上传异常:' + JSON.stringify(err) + JSON.stringify(serverIds))
      })
  })
}

export default uploadServerId
