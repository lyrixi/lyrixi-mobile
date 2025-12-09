import _ from 'lodash'
import uploadLocalFile from './uploadLocalFile'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 单张照片上传
function uploadItem(
  item,
  { getUploadUrl, formatHeader, formatPayload, formatResponse, verifyImage }
) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    let errMsg = ''
    if (_.isEmpty(item?.localFile)) {
      errMsg = LocaleUtil.locale('没有localFile，无法上传！')
      resolve(errMsg)
      return
    }

    // 上传到阿里云
    let newItem = await uploadLocalFile({
      localFile: item?.localFile,
      getUploadUrl,
      formatHeader,
      formatPayload: (payload, payloadExtra) =>
        formatPayload?.({ ...payload, ...item }, payloadExtra),
      formatResponse,
      verifyImage,
      // 用于构建新Item的入参
      item
    })

    resolve(newItem)
  })
}

export default uploadItem
