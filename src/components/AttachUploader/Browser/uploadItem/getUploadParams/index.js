// 获取上传入参
function getUploadParams({ localFile, uploadDir, getUploadUrl, getUploadPayload, appId }) {
  let payload = {
    fileType: localFile.type,
    filePath: localFile.path,
    uploadPath: uploadDir,
    appId: appId
  }

  let uploadUrl = getUploadUrl?.({ platform: 'browser' }) || {}
  let uploadExtraFormData = getUploadPayload?.({ platform: 'dingtalk' }) || {}
  if (uploadExtraFormData && typeof uploadExtraFormData === 'object') {
    for (const paramKey in uploadExtraFormData) {
      if (uploadExtraFormData.hasOwnProperty(paramKey)) {
        let value = uploadExtraFormData[paramKey]
        payload[paramKey] = value
      }
    }
  }

  return {
    url: window.origin + uploadUrl,
    localFile: localFile, // 需要上传的图片的本地ID，由chooseImage接口获得
    // 鸿蒙钉钉有bug，上传方法带不上header，导致无法上传
    header: {
      'Content-Type': 'multipart/form-data',
      Cookie: document.cookie
    },
    payload: payload
  }
}

export default getUploadParams
