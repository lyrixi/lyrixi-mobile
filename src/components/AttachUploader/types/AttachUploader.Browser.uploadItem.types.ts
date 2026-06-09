// 内库使用-start
import type { FileItem } from './../../Attach/types'
// 内库使用-end

export type UploadDeps = {
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

export type UploadOpts = {
  localFile: Record<string, unknown>
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
  item: FileItem
}

export type UploadResponse = {
  status: string
  message?: string
  data?: Record<string, unknown>
}
