// 内库使用-start
import Bridge from './../../../../utils/Bridge'
// 内库使用-end

import type { AttachUploaderItem } from '../../types'

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */

type UploadOpts = {
  localFile: Record<string, unknown>
  getUploadUrl?: (ctx: {
    platform: string
    uploadItem: AttachUploaderItem
    result?: unknown
  }) => string | Promise<string>
  formatHeaders?: (
    headers: Record<string, string>,
    ctx: { platform: string }
  ) => Record<string, string> | Promise<Record<string, string>>
  formatPayload?: (payload: unknown, ctx: { platform: string }) => unknown
  formatResponse?: (response: unknown, ctx: { platform: string }) => unknown
  item: AttachUploaderItem
}

type UploadResponse = {
  status: string
  message?: string
  data?: Record<string, unknown>
}

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
