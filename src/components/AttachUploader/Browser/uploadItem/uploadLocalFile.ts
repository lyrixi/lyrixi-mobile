import type { UploadOpts, UploadResponse } from './../../types'

// 内库使用-start
import type { FileItem } from './../../../Attach/types'
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
}: UploadOpts): Promise<FileItem> {
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
          } as FileItem)
          return
        }

        const newItem = response.data

        resolve({
          ...item,
          ...newItem,
          status: 'success'
        } as FileItem)
      },
      onError: function (error: { message?: string }) {
        resolve({
          ...item,
          status: 'error',
          message: error.message
        } as FileItem)
      }
    })
  })
}

export default uploadLocalFile
