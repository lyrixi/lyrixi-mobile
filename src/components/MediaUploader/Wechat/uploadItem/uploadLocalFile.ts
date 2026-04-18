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
  formatHeaders,
  formatPayload,
  formatResponse,
  verifyImage,
  // 用于构建新Item的入参
  item
}) {
  return new Promise((resolve) => {
    Bridge.uploadFile({
      getUploadUrl,
      localFile, // 需要上传的图片的本地ID，由chooseImage接口获得
      formatHeaders,
      formatPayload,
      formatResponse,
      onSuccess: async function (response) {
        if (response.status === 'error') {
          resolve({
            ...item,
            status: 'error',
            message: response.message
          })
          return
        }

        // response.result为新格式化后的新item: {fileThumbnail: '全路径', fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'success' | 'error'}
        let newItem = response.result

        // 校验其是否真的是否法图片
        if (item?.fileType === 'image' && verifyImage) {
          console.log('校验图片是否可访问:', newItem.fileThumbnail)
          let isValid = await AssetUtil.accessImage(newItem.fileThumbnail)
          if (!isValid) {
            resolve({
              ...item,
              status: 'error',
              message: LocaleUtil.locale(
                '图片加载失败，请重试',
                'lyrixi_419ade42d1243fe183355b7930c4f830'
              )
            })
            return
          }
        }

        delete item.message
        resolve({
          ...item,
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
