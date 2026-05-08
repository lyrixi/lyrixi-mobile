import React from 'react'

export interface MediaItem {
  fileThumbnail?: string
  fileUrl?: string
  filePath?: string
  status?: string
  localFile?: LocalFile
  fileType?: string
  message?: string
  [key: string]: unknown
}

/** 本地上传中间态，字段可能未齐（与 Media 侧预览、压缩流程一致） */
export interface LocalFile {
  fileUrl?: string
  fileType?: string
  tempFileThumbnail?: string
  [key: string]: unknown
}

export interface MediaUploaderUploadResponse {
  status: string
  message?: string
  data?: MediaItem
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
  style?: React.CSSProperties
  className?: string
  uploadPosition?: string
  previewSafeArea?: boolean
  navBarStyle?: React.CSSProperties
  navBarClassName?: string
  previewNavBarStyle?: React.CSSProperties
  previewNavBarClassName?: string
  previewModalStyle?: React.CSSProperties
  previewModalClassName?: string
  previewMaskStyle?: React.CSSProperties
  previewMaskClassName?: string
  uploadRender?: React.ReactNode
  uploadingRender?: React.ReactNode
  itemRender?: React.ReactNode
  previewPortal?: HTMLElement
  previewCancelPosition?: string
  getItemExtra?: (
    params: { platform: string }
  ) => Promise<Record<string, unknown> | false | null> | Record<string, unknown> | false | null
  formatChoose?: (
    params: Record<string, unknown>,
    extra: { platform: string }
  ) => Promise<Record<string, unknown>> | Record<string, unknown>
  onBeforeChoose?: () => Promise<boolean | null | undefined> | boolean | null | undefined
  onUpload?: (item: MediaItem) => Promise<MediaItem>
  onChange?: (list: MediaItem[]) => void
  onPreview?: (item: MediaItem, index: number) => Promise<unknown>
}

export interface MediaUploaderProps extends MediaUploaderCommonProps {
  platform?: string
  compatible?: boolean | string
  timeout?: number
  chooseExtraParams?: Record<string, unknown>
  onNavigateTo?: (params: Record<string, unknown>) => Promise<boolean | void>
}

export interface MediaUploaderWechatMiniProgramProps extends MediaUploaderCommonProps {
  chooseExtraParams?: Record<string, unknown>
  onNavigateTo?: (params: Record<string, unknown>) => Promise<boolean | void>
}
