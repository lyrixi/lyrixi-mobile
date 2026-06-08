import type { ReactNode, SyntheticEvent } from 'react'

import type { FileItem, AttachRef } from '../../Attach/types'
import type { ModalProps } from '../../Modal/types'

export type { AttachRef }

export interface AttachUploaderItem extends FileItem {
  localFile?: Record<string, unknown> & { fileSize?: number; fileUrl?: string; [k: string]: unknown }
}

export interface UploadFormatContext {
  platform: string
  uploadItem: AttachUploaderItem
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
  list?: AttachUploaderItem[]
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
  itemRender?: (item: AttachUploaderItem, index: number) => ReactNode
  previewPortal?: ModalProps['portal']
  previewServerUrl?: string
  previewServerSourceType?: string | string[]
  getUploadUrl?: GetUploadUrlFn
  formatHeaders?: FormatHeadersFn
  formatPayload?: FormatPayloadFn
  formatResponse?: FormatResponseFn
  onBeforeChoose?: () => boolean | void | Promise<boolean | void>
  onFileChange?: (
    arg: SyntheticEvent<HTMLInputElement> | FileItem
  ) => unknown
  onUpload?: (item: AttachUploaderItem) => unknown
  onChange?: (list: AttachUploaderItem[], meta?: { action?: string }) => void
  onPreview?: (item: AttachUploaderItem, index: number) => unknown
}
