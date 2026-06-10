import type { ReactNode } from 'react'

// 内库使用-start
import type { AttachProps } from './../../Attach/types'
import type { FileItem } from './../../../utils/Bridge/types'
import type { ModalProps } from '../../Modal/types'
// 内库使用-end

export interface UploadFormatContext {
  platform: string
  uploadItem: FileItem
  result?: unknown
}

export type GetUploadUrlFn = (ctx: UploadFormatContext) => string | Promise<string>
export type FormatHeadersFn = (
  headers: Record<string, string>,
  ctx: { platform: string }
) => Record<string, string> | Promise<Record<string, string>>
export type FormatPayloadFn = (payload: unknown, ctx: { platform: string }) => unknown
export type FormatResponseFn = (response: unknown, ctx: { platform: string }) => unknown

export interface AttachUploaderProps {
  list?: FileItem[]
  maxCount?: number
  maxChooseCount?: number
  /** 与 sourceType 二选一，简写为文件大类如 image、具体后缀如 jpg */
  extension?: string[]
  sourceType?: string | string[]
  maxSize?: number
  async?: boolean
  reUpload?: boolean
  allowClear?: boolean
  allowChoose?: boolean
  className?: string
  uploadPosition?: 'start' | 'end'
  uploadRender?: (ctx: { uploadingType: string }) => ReactNode
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  itemRender?: (item: FileItem, index: number) => ReactNode
  previewPortal?: ModalProps['portal']
  previewServerUrl?: string
  previewServerSourceType?: string | string[]
  getUploadUrl?: GetUploadUrlFn
  formatHeaders?: FormatHeadersFn
  formatPayload?: FormatPayloadFn
  formatResponse?: FormatResponseFn
  onBeforeChoose?: () => boolean | void | Promise<boolean | void>
  onFileChange?: AttachProps['onFileChange']
  onUpload?: (item: FileItem) => unknown
  onChange?: (list: FileItem[], meta?: { action?: string }) => void
  onPreview?: (item: FileItem, index: number) => unknown
}
