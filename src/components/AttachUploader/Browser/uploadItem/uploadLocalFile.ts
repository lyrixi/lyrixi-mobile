// 内库使用-start
import type { BridgeUploadFileParams, FileItem } from '../../../../utils/Bridge/types'
import Bridge from '../../../../utils/Bridge'
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
}: BridgeUploadFileParams): Promise<FileItem> {
  let fileItem = item as FileItem
  return new Promise((resolve) => {
    Bridge.uploadFile({
      getUploadUrl,
      localFile,
      formatHeaders,
      formatPayload,
      formatResponse,
      onSuccess: async function (response) {
        if ((response.status as string) === 'error') {
          resolve({
            ...fileItem,
            status: 'error',
            message: response.message
          } as FileItem)
          return
        }

        const newItem = response.data

        resolve({
          ...fileItem,
          ...newItem,
          status: 'success'
        } as FileItem)
      },
      onError: function (error) {
        resolve({
          ...fileItem,
          status: 'error',
          message: error.message
        } as FileItem)
      }
    })
  })
}

export default uploadLocalFile
