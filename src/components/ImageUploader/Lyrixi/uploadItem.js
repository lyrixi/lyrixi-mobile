// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Bridge from './../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Toast, Bridge } from 'lyrixi-mobile'
测试使用-end */

// 单张照片上传
function uploadItem(
  item,
  { timeout, uploadDir, getUploadUrl, getUploadParams, formatUploadedItem }
) {
  return new Promise((resolve) => {
    let localId = item?.localId
    let errMsg = ''
    if (!localId || typeof localId !== 'string') {
      errMsg = LocaleUtil.locale('没有localId，无法上传！')
      resolve(errMsg)
      return
    }

    let uploadUrl = getUploadUrl?.({ platform: 'lyrixi' }) || {}
    let uploadExtraParams = getUploadParams?.({ platform: 'lyrixi' }) || {}

    let uploadParams = {
      url: window.origin + uploadUrl,
      ...uploadExtraParams,
      // 离线超时时长
      timeout: timeout,
      uploadDir: uploadDir,
      localId: localId,
      header: {
        'Content-Type': 'multipart/form-data',
        Cookie: document.cookie
      },
      // 全屏遮罩被Loading.show接管
      isShowProgressTips: 0,
      onSuccess: async function (result) {
        let data = result

        if (typeof formatUploadedItem === 'function') {
          data = await formatUploadedItem(item, { platform: 'lyrixi', result: result })
        }

        resolve(data)
      },
      onError: function (err) {
        // errMsg = err.errMsg
        // resolve(errMsg)
        console.error('勤策客户端上传照片失败:', err)
        // 产品要求统一错误提示语
        resolve(LocaleUtil.locale('照片上传失败，请重新上传'))
      }
    }

    console.log('Lyrixi上传')
    console.log(uploadParams)
    Bridge.uploadImage(uploadParams) // eslint-disable-line(uploadParams)
  })
}

export default uploadItem
