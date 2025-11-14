import { validateImageSrc } from './../../utils'
import uploadFile from './uploadFile'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 上传
function uploadItem(
  item,
  { uploadDir, maxWidth, getUploadUrl, getUploadFormData, formatUploadedItem }
) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    let fileData = item.fileData

    // 用临时方案尝试
    let serverItem = await uploadFile({
      item,
      watermark: item.watermark,
      fileData,
      uploadDir,
      maxWidth,
      getUploadUrl,
      getUploadFormData,
      formatUploadedItem
    })

    // 上传失败
    if (typeof serverItem === 'string') {
      resolve(serverItem)
      return
    }

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
