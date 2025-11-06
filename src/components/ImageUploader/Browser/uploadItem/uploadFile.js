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
  getUploadParams,
  formatUploadResult
}) {
  const formData = new FormData()

  formData.append('uploadDir', uploadDir)
  formData.append('file', fileData)
  formData.append('maxWidth', maxWidth)

  if (watermark) {
    formData.append('watermark', JSON.stringify(watermark))
  }

  let uploadUrl = getUploadUrl?.({ platform: 'browser' }) || {}
  let uploadExtraParams = getUploadParams?.({ platform: 'browser' }) || {}

  if (uploadExtraParams && typeof uploadExtraParams === 'object') {
    for (const paramKey in uploadExtraParams) {
      if (uploadExtraParams.hasOwnProperty(paramKey)) {
        let value = uploadExtraParams[paramKey]
        formData.append(paramKey, typeof value === 'object' ? JSON.stringify(value) : String(value))
      }
    }
  }

  return new Promise((resolve) => {
    Request.post(uploadUrl, {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(async (result) => {
        let data = result

        if (typeof formatUploadResult === 'function') {
          data = await formatUploadResult({ platform: 'browser', uploadItem: item, result: result })
        }

        resolve(data)
      })
      .catch((error) => {
        resolve(LocaleUtil.locale('上传照片异常'))
      })
  })
}
