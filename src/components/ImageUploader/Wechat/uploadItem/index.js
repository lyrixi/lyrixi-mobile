import { validateImageSrc } from './../../utils'
import uploadLocalId from './uploadLocalId'
import uploadServerId from './uploadServerId'

// 内库使用-start
import Storage from './../../../../utils/Storage'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Storage, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 单张照片上传
function uploadItem(
  item,
  { uploadDir, maxWidth, getUploadUrl, getUploadPayload, formatUploadedItem }
) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    let localFile = item?.localFile
    let errMsg = ''
    if (!localFile || !localFile?.path) {
      errMsg = LocaleUtil.locale('没有localId，无法上传！')
      resolve(errMsg)
      return
    }

    const appId = Storage.getLocalStorage('appId') || ''
    if (!appId) {
      resolve(LocaleUtil.locale('没有appId，无法上传！'))
      return
    }

    // 上传到微信
    let res = await uploadLocalId(localId)
    if (typeof res === 'string') {
      resolve(res)
      return
    }

    // 上传到oss
    let success = await uploadServerId({
      item,
      watermark: item?.watermark || [],
      serverIds: res.serverId,
      uploadDir,
      maxWidth,
      getUploadUrl,
      getUploadPayload,
      formatUploadedItem,
      appId
    })

    if (typeof success === 'string') {
      // resolve(success)
      // 产品要求统一错误提示语
      resolve(LocaleUtil.locale('照片上传失败，请重新上传'))
      return
    }

    // 上传成功图片
    let serverItem = success[0]

    // 校验其是否真的是否法图片
    let isValid = await validateImageSrc(serverItem.fileUrl)
    if (!isValid) {
      resolve(LocaleUtil.locale('图片加载失败，请重试'))
      return
    }

    resolve({
      ...item,
      ...serverItem,
      // 状态
      status: 'success'
    })
  })
}

export default uploadItem
