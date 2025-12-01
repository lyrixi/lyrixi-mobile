import _ from 'lodash'
import getUploadParams from './getUploadParams'
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
  { maxWidth, getUploadUrl, formatPayload, formatResult, formatUploadedItem }
) {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    let errMsg = ''
    if (_.isEmpty(item?.localFile)) {
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
    let newItem = await uploadLocalFile({
      localFile: item?.localFile,
      getUploadUrl,
      formatPayload: (payload) =>
        formatPayload?.(
          { ...payload, watermark: item?.watermark, maxWidth },
          { platform: 'browser' }
        ),
      formatResult,
      // 用于构建新Item的入参
      item,
      formatUploadedItem
    })

    resolve(newItem)
  })
}

export default uploadItem
