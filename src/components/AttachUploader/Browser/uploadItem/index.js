import uploadLocalFile from './uploadLocalFile'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 单张照片上传
function uploadItem(item, { getUploadUrl, formatHeaders, formatPayload, formatResponse }) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    let errMsg = ''
    if (ObjectUtil.isEmpty(item?.localFile)) {
      errMsg = LocaleUtil.locale(
        '没有localFile，无法上传！',
        'lyrixi_8ac73a3ce4e53db295057aaab0e6b1cf'
      )
      resolve(errMsg)
      return
    }

    // 上传到阿里云
    let newItem = await uploadLocalFile({
      localFile: item?.localFile, // 需要上传的图片的本地ID，由chooseImage接口获得
      getUploadUrl,
      formatHeaders,
      formatPayload,
      formatResponse,
      // 用于构建新Item的入参
      item
    })

    resolve(newItem)
  })
}

export default uploadItem
