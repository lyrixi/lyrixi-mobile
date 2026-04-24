import uploadLocalFile from './uploadLocalFile'

// 内库使用-start
import ObjectUtil from './../../../../utils/ObjectUtil'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

import type { AttachUploaderItem } from '../../types'

type UploadDeps = {
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
}

function toMessage(m: string | import('react').ReactNode): string {
  return typeof m === 'string' ? m : String(m)
}

// 单张照片上传
async function uploadItem(
  item: AttachUploaderItem,
  { getUploadUrl, formatHeaders, formatPayload, formatResponse }: UploadDeps
): Promise<AttachUploaderItem | string> {
  if (ObjectUtil.isEmpty(item?.localFile)) {
    return toMessage(
      LocaleUtil.locale(
        '没有localFile，无法上传！',
        'lyrixi_8ac73a3ce4e53db295057aaab0e6b1cf',
        undefined
      )
    )
  }

  return uploadLocalFile({
    localFile: (item?.localFile ?? {}) as Record<string, unknown>,
    getUploadUrl,
    formatHeaders,
    formatPayload,
    formatResponse,
    item
  })
}

export default uploadItem
