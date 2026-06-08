import type { CSSProperties, ReactNode } from 'react'

import type { FileItem, LocalFile } from '../../Attach/types/Attach.common.types'

export type { LocalFile }

export interface MediaUploaderUploadResponse {
  status: string
  message?: string
  data?: FileItem
  code?: string
  [key: string]: unknown
}

export interface MediaHandle {
  element?: HTMLElement | null
  choose?: (...args: unknown[]) => Promise<unknown>
  chooseFile?: (...args: unknown[]) => Promise<unknown>
  /** May return false when the environment does not support programmatic capture (e.g. browser). */
  chooseMedia?: (...args: unknown[]) => Promise<unknown> | boolean | undefined
  showLoading?: (options?: unknown) => void
  hideLoading?: (options?: unknown) => void
  uploadList?: () => unknown
  [key: string]: unknown
}

export interface UploadItemConfig {
  getUploadUrl?: (ctx: { platform: string }) => Record<string, unknown> | undefined
  formatHeaders?: (
    h: Record<string, unknown>,
    ctx: { platform: string }
  ) => Record<string, unknown> | Promise<Record<string, unknown>>
  formatPayload?: (
    p: Record<string, unknown>,
    ctx: { platform: string }
  ) => Record<string, unknown> | Promise<Record<string, unknown>>
  formatResponse?: (
    r: unknown,
    ctx: { platform: string }
  ) => MediaUploaderUploadResponse | Promise<MediaUploaderUploadResponse>
  verifyImage?: boolean
}

export interface UploadLocalFileParams {
  localFile: LocalFile
  getUploadUrl?: UploadItemConfig['getUploadUrl']
  formatHeaders?: UploadItemConfig['formatHeaders']
  formatPayload?: UploadItemConfig['formatPayload']
  formatResponse?: UploadItemConfig['formatResponse']
  verifyImage?: boolean
  item: MediaItem
}

export interface MediaUploaderCommonProps extends UploadItemConfig {
  list?: MediaItem[]
  maxUploadCount?: number
  maxChooseCount?: number
  mediaType?: string | string[]
  ellipsis?: boolean
  sourceType?: string[]
  sizeType?: string[]
  isSaveToAlbum?: number
  fileImageCompress?: unknown
  async?: boolean
  reUpload?: boolean
  allowClear?: boolean
  allowChoose?: boolean
  previewAllowChoose?: boolean
  previewAllowClear?: boolean
  style?: CSSProperties
  className?: string
  uploadPosition?: string
  previewSafeArea?: boolean
  navBarStyle?: CSSProperties
  navBarClassName?: string
  previewNavBarStyle?: CSSProperties
  previewNavBarClassName?: string
  previewModalStyle?: CSSProperties
  previewModalClassName?: string
  previewMaskStyle?: CSSProperties
  previewMaskClassName?: string
  uploadRender?: ReactNode
  uploadingRender?: ReactNode
  itemRender?: ReactNode
  previewPortal?: HTMLElement
  previewCancelPosition?: string
  getItemExtra?: (params: {
    platform: string
  }) => Promise<Record<string, unknown> | false | null> | Record<string, unknown> | false | null
  formatChoose?: (
    params: Record<string, unknown>,
    extra: { platform: string }
  ) => Promise<Record<string, unknown>> | Record<string, unknown>
  onBeforeChoose?: () => Promise<boolean | null | undefined> | boolean | null | undefined
  onUpload?: (item: MediaItem) => Promise<MediaItem>
  onChange?: (list: MediaItem[]) => void
  onPreview?: (item: MediaItem, index: number) => Promise<unknown>
}
