// 内库使用-start
import type { FileItem } from '../../../utils/Bridge/types'
// 内库使用-end

export type UploadListConfig = {
  platform?: string
  getUploadUrl?: (ctx: {
    platform: string
    uploadItem: FileItem
    result?: unknown
  }) => string | Promise<string>
  formatHeaders?: (
    headers: Record<string, string>,
    ctx: { platform: string }
  ) => Record<string, string> | Promise<Record<string, string>>
  formatPayload?: (payload: unknown, ctx: { platform: string }) => unknown
  formatResponse?: (response: unknown, ctx: { platform: string }) => unknown
}
