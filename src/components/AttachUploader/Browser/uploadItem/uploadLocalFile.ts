
import type { AttachUploaderItem, UploadOpts, UploadResponse } from './../../types'

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
  item
}: UploadOpts): Promise<AttachUploaderItem> {
  return new Promise((resolve) => {
    Bridge.uploadFile({
      getUploadUrl,
      localFile,
      formatHeaders,
      formatPayload,
      formatResponse,
      onSuccess: async function (response: UploadResponse) {
        if (response.status === 'error') {
          resolve({
            ...item,
            status: 'error',
            message: response.message
          } as AttachUploaderItem)
          return
        }

        const newItem = response.data

        resolve({
          ...item,
          ...newItem,
          status: 'success'
        } as AttachUploaderItem)
      },
      onError: function (error: { message?: string }) {
        resolve({
          ...item,
          status: 'error',
          message: error.message
        } as AttachUploaderItem)
      }
    })
  })
}

export default uploadLocalFile
