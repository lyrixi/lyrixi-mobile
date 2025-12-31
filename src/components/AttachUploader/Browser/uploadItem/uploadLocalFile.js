// 内库使用-start
import Bridge from './../../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */

// 上传localFile
function uploadLocalFile({
  localFile,
  getUploadUrl,
  formatHeaders,
  formatPayload,
  formatResponse,
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

        // response.result为新格式化后的新item: {fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'success' | 'error'}
        let newItem = response.result

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
