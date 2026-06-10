import uploadLocalFile from './uploadLocalFile'

// 内库使用-start
import type { BridgeUploadFileParams, FileItem } from '../../../../utils/Bridge/types'
import ObjectUtil from './../../../../utils/ObjectUtil'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

function toMessage(m: string | import('react').ReactNode): string {
  return typeof m === 'string' ? m : String(m)
}

// 单张照片上传
async function uploadItem(
  item: FileItem,
  { getUploadUrl, formatHeaders, formatPayload, formatResponse }: BridgeUploadFileParams
): Promise<FileItem | string> {
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
    localFile: item?.localFile ?? ({} as Record<string, unknown>),
    getUploadUrl,
    formatHeaders,
    formatPayload,
    formatResponse,
    item
  } as Parameters<typeof uploadLocalFile>[0])
}

export default uploadItem
