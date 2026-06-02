import type { AttachUploaderItem } from './AttachUploader.main.types'

export type UploadListConfig = {
  platform?: string
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
