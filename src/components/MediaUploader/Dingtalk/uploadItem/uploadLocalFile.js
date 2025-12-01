// 内库使用-start
import AssetUtil from './../../../../utils/AssetUtil'
import Bridge from './../../../../utils/Bridge'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { AssetUtil, Bridge, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 上传localFile
function uploadLocalFile({
  localFile,
  getUploadUrl,
  formatPayload,
  formatResult,
  // 用于构建新Item的入参
  item,
  formatUploadedItem
}) {
  return new Promise((resolve) => {
    Bridge.uploadFile({
      getUploadUrl,
      localFile, // 需要上传的图片的本地ID，由chooseImage接口获得
      formatPayload,
      formatResult,
      onSuccess: async function (result) {
        let newItem = result

        if (typeof formatUploadedItem === 'function') {
          newItem = await formatUploadedItem(item, {
            platform: 'dingtalk',
            result: result
          })
        }

        // 校验其是否真的是否法图片
        let isValid = await AssetUtil.accessImage(newItem.fileUrl)
        if (!isValid) {
          resolve({
            ...item,
            status: 'error',
            message: LocaleUtil.locale('图片加载失败，请重试')
          })
          return
        }

        resolve({
          ...newItem,
          status: 'success'
        })
      },
      onError: function (error) {
        resolve({
          ...item,
          status: 'error',
          message: error.message
        })
      }
    })
  })
}

export default uploadLocalFile
