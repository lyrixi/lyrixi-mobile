import type { AttachUploaderItem } from './AttachUploader.main.types'

export type UploadDeps = {
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

export type UploadOpts = {
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

export type UploadResponse = {
  status: string
  message?: string
  data?: Record<string, unknown>
}
