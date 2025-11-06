// 内库使用-start
import Bridge from './../../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */

// 上传localFile
function uploadLocalFile({
  item,
  watermark,
  localFile,
  uploadDir,
  maxWidth,
  getUploadUrl,
  getUploadParams,
  formatUploadResult,
  appId
}) {
  return new Promise((resolve) => {
    let formData = {
      watermark: JSON.stringify(watermark),
      fileType: localFile.fileType,
      file1: localFile.filePath,
      uploadPath: uploadDir,
      maxWidth: maxWidth,
      appId: appId
    }

    if (watermark) {
      formData.watermark = watermark
    }

    let uploadUrl = getUploadUrl?.({ platform: 'dingtalk' }) || {}
    let uploadExtraParams = getUploadParams?.({ platform: 'dingtalk' }) || {}

    if (uploadExtraParams && typeof uploadExtraParams === 'object') {
      for (const paramKey in uploadExtraParams) {
        if (uploadExtraParams.hasOwnProperty(paramKey)) {
          let value = uploadExtraParams[paramKey]
          formData[paramKey] = value
        }
      }
    }

    if (maxWidth) {
      formData.maxWidth = maxWidth
    }

    Bridge.uploadImage({
      url: window.origin + uploadUrl,
      localFile: localFile, // 需要上传的图片的本地ID，由chooseImage接口获得
      // 鸿蒙钉钉有bug，上传方法带不上header，导致无法上传
      header: {
        'Content-Type': 'multipart/form-data',
        Cookie: document.cookie
      },
      formData: formData,
      onSuccess: async function (result) {
        let data = result

        if (typeof formatUploadResult === 'function') {
          data = await formatUploadResult({
            platform: 'dingtalk',
            uploadItem: item,
            result: result
          })
        }

        resolve(data)
      },
      onError: function (err) {
        resolve(err.errMsg)
        console.error(`钉钉上传照片失败:`, localFile, err)
      }
    })
  })
}

export default uploadLocalFile
