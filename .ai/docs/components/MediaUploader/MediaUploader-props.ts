/**
 * MediaUploader Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface MediaUploaderProps {
  /** 媒体类型，默认 `['image']` */
  mediaType?: string | string[]
  /** 媒体列表，默认 `[]` */
  list?: MediaItem[]
  /** 最大上传数量 */
  maxUploadCount?: number
  /** 最大选择数量 */
  maxChooseCount?: number
  /** 强制上传平台 */
  platform?: string
  /** 省略配置 */
  ellipsis?: boolean
  /** 来源类型，默认 `['album', 'camera']` */
  sourceType?: string[]
  /** 尺寸类型，默认 `['compressed']` */
  sizeType?: string[]
  /** 是否保存到本地，默认 `0` */
  isSaveToAlbum?: number
  /** 图片压缩配置 */
  fileImageCompress?: unknown
  /** 是否异步上传，默认 `false` */
  async?: boolean
  /** 校验图片 */
  verifyImage?: boolean
  /** 支持重新上传 */
  reUpload?: boolean
  /** 允许清除，默认 `false` */
  allowClear?: boolean
  /** 允许选择，默认 `false` */
  allowChoose?: boolean
  /** 预览允许选择 */
  previewAllowChoose?: boolean
  /** 预览允许清除 */
  previewAllowClear?: boolean
  /** 兼容模式 */
  compatible?: boolean | string
  /** 超时时间 */
  timeout?: number
  /** 选择额外参数 */
  chooseExtraParams?: Record<string, unknown>
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 导航栏样式 */
  navBarStyle?: CSSProperties
  /** 导航栏类名 */
  navBarClassName?: string
  /** 上传位置 */
  uploadPosition?: string
  /** 预览安全区 */
  previewSafeArea?: boolean
  /** 预览导航栏样式 */
  previewNavBarStyle?: CSSProperties
  /** 预览导航栏类名 */
  previewNavBarClassName?: string
  /** 预览模态框样式 */
  previewModalStyle?: CSSProperties
  /** 预览模态框类名 */
  previewModalClassName?: string
  /** 预览遮罩样式 */
  previewMaskStyle?: CSSProperties
  /** 预览遮罩类名 */
  previewMaskClassName?: string
  /** 上传按钮渲染 */
  uploadRender?: ReactNode
  /** 上传中渲染 */
  uploadingRender?: ReactNode
  /** 项渲染 */
  itemRender?: ReactNode
  /** 预览挂载节点 */
  previewPortal?: HTMLElement
  /** 预览取消位置 */
  previewCancelPosition?: string
  /** 获取项额外数据 */
  getItemExtra?: (params: {
    platform: string
  }) => Promise<Record<string, unknown> | false | null> | Record<string, unknown> | false | null
  /** 获取上传地址 */
  getUploadUrl?: (ctx: { platform: string }) => Record<string, unknown> | undefined
  /** 格式化选择 */
  formatChoose?: (
    params: Record<string, unknown>,
    extra: { platform: string }
  ) => Promise<Record<string, unknown>> | Record<string, unknown>
  /** 格式化请求头 */
  formatHeaders?: (
    h: Record<string, unknown>,
    ctx: { platform: string }
  ) => Record<string, unknown> | Promise<Record<string, unknown>>
  /** 格式化请求体 */
  formatPayload?: (
    p: Record<string, unknown>,
    ctx: { platform: string }
  ) => Record<string, unknown> | Promise<Record<string, unknown>>
  /** 格式化响应 */
  formatResponse?: (
    r: unknown,
    ctx: { platform: string }
  ) => MediaUploaderUploadResponse | Promise<MediaUploaderUploadResponse>
  /** 选择前事件 */
  onBeforeChoose?: () => Promise<boolean | null | undefined> | boolean | null | undefined
  /** 上传事件 */
  onUpload?: (item: MediaItem) => Promise<MediaItem>
  /** 变化事件 */
  onChange?: (list: MediaItem[]) => void
  /** 预览事件 */
  onPreview?: (item: MediaItem, index: number) => Promise<unknown>
  /** 导航跳转事件 */
  onNavigateTo?: (params: Record<string, unknown>) => Promise<boolean | void>
}

export interface MediaUploaderUploadResponse {
  status: string
  message?: string
  data?: FileItem
  code?: string
  [key: string]: unknown
}

export interface MediaUploaderRef {
  element?: HTMLElement | null
  choose?: (...args: unknown[]) => Promise<unknown>
  chooseFile?: (...args: unknown[]) => Promise<unknown>
  chooseMedia?: (...args: unknown[]) => Promise<unknown> | boolean | undefined
  showLoading?: (options?: unknown) => void
  hideLoading?: (options?: unknown) => void
  uploadList?: () => unknown
  [key: string]: unknown
}