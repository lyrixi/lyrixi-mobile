// 内库使用-start
import Request from './../../../../utils/Request'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

export default function uploadFile({
  item,
  watermark,
  fileData,
  uploadDir,
  maxWidth,
  getUploadUrl,
  getUploadFormData,
  formatUploadedItem
}) {
  const payload = new FormData()

  payload.append('uploadDir', uploadDir)
  payload.append('file', fileData)
  payload.append('maxWidth', maxWidth)

  if (watermark) {
    payload.append('watermark', JSON.stringify(watermark))
  }

  let uploadUrl = getUploadUrl?.({ platform: 'browser' }) || {}
  let uploadExtraFormData = getUploadFormData?.({ platform: 'browser' }) || {}

  if (uploadExtraFormData && typeof uploadExtraFormData === 'object') {
    for (const paramKey in uploadExtraFormData) {
      if (uploadExtraFormData.hasOwnProperty(paramKey)) {
        let value = uploadExtraFormData[paramKey]
        payload.append(paramKey, typeof value === 'object' ? JSON.stringify(value) : String(value))
      }
    }
  }

  return new Promise((resolve) => {
    Request.post(uploadUrl, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(async (result) => {
        let data = result

        if (typeof formatUploadedItem === 'function') {
          data = await formatUploadedItem(item, { platform: 'browser', result: result })
        }

        resolve(data)
      })
      .catch((error) => {
        resolve(LocaleUtil.locale('上传照片异常'))
      })
  })
}
