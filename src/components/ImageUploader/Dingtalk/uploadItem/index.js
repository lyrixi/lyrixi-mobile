import _ from 'lodash'
import { validateImageSrc } from './../../utils'
import uploadLocalFile from './uploadLocalFile'

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
  { uploadDir, maxWidth, getUploadUrl, getUploadParams, formatUploadResult }
) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    let localFile = item?.localFile
    let errMsg = ''
    if (_.isEmpty(localFile)) {
      errMsg = LocaleUtil.locale('没有localFile，无法上传！')
      resolve(errMsg)
      return
    }

    const appId = Storage.getLocalStorage('appId') || ''
    if (!appId) {
      resolve(LocaleUtil.locale('没有appId，无法上传！'))
      return
    }

    // 上传到阿里云
    let success = await uploadLocalFile({
      localFile: item.localFile,
      watermark: item?.watermark,
      uploadDir,
      maxWidth,
      getUploadUrl,
      getUploadParams,
      formatUploadResult,
      appId
    })

    if (typeof success === 'string') {
      // resolve(success)
      // 产品要求统一错误提示语
      resolve(LocaleUtil.locale('照片上传失败，请重新上传'))
      return
    }

    // 上传成功图片
    let serverItem = success

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
