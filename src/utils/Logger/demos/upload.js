import { Device, Request, DateUtil } from 'lyrixi-mobile'

function upload({ date, content }) {
  // 调用上报接口
  return new Promise((resolve) => {
    // 生成文件名: ${YYYYMMDD}_${Device.platform}_${username}_${userId}_${hhmmss}.txt
    const dateStr = DateUtil.format(date, 'YYYYMMDD')
    const username = window.loginUser?.name || 'unknown'
    const userId = window.loginUser?.id || 'unknown'
    const platform = Device.platform || 'unknown'

    const fileName = `${dateStr}_${platform}_${username}_${userId}.txt`

    // 构建日志内容
    const fileContent = [
      `UserAgent: ${navigator.userAgent || ''}`,
      `TenantId: ${window.loginUser?.tenantId || ''}`,
      `UserId: ${window.loginUser?.id || ''}`,
      `Date: ${dateStr}`,
      content
    ].join('\n')

    // 调用上传接口
    Request.post('/fileupload/v1/uploadTextToLogCenter.do', {
      fileName: fileName,
      fileContent: fileContent
    })
      .then((response) => {
        if (response.code === '1') {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch((error) => {
        console.error('日志上传失败:', error)
        resolve(false)
      })
  })
}

export default upload
