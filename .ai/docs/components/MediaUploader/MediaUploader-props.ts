/**
 * MediaUploader Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface MediaUploaderProps {
  /** 媒体类型，默认 `['image']` */
  mediaType?: Array<'image' | 'video'>
  /** 媒体列表，默认 `[]` */
  list?: Array<{fileThumbnail: string, fileUrl: string, filePath: string, status: 'choose' | 'uploading' | 'error' | 'success'}>
  /** 最大上传数量 */
  maxUploadCount?: number
  /** 最大选择数量 */
  maxChooseCount?: number
  /** 强制上传平台 */
  platform?: 'browser' | 'wechatMiniProgram' | 'wechat' | 'wecom' | 'wecomMiniProgram' | 'dingtalk'
  /** 省略配置 */
  ellipsis?: object
  /** 来源类型，默认 `['album', 'camera']` */
  sourceType?: Array<'album' | 'camera'>
  /** 尺寸类型，默认 `['compressed']` */
  sizeType?: Array<'original' | 'compressed'>
  /** 是否保存到本地，默认 `0` */
  isSaveToAlbum?: number
  /** 图片压缩配置 */
  fileImageCompress?: {maxWidth: number, quality: number}
  /** 是否异步上传，默认 `false` */
  async?: boolean
  /** 校验图片，默认 `true` */
  verifyImage?: boolean
  /** 支持重新上传，默认 `true` */
  reUpload?: boolean
  /** 允许清除，默认 `true` */
  allowClear?: boolean
  /** 允许选择，默认 `true` */
  allowChoose?: boolean
  /** 预览允许选择 */
  previewAllowChoose?: boolean
  /** 预览允许清除 */
  previewAllowClear?: boolean
  /** 兼容模式，默认 `true` */
  compatible?: boolean
  /** 超时时间 */
  timeout?: number
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 上传位置 */
  uploadPosition?: 'start' | 'end'
  /** 预览安全区 */
  previewSafeArea?: boolean
  /** 预览导航栏样式 */
  previewNavBarStyle?: object
  /** 预览导航栏类名 */
  previewNavBarClassName?: string
  /** 预览模态框样式 */
  previewModalStyle?: object
  /** 预览模态框类名 */
  previewModalClassName?: string
  /** 预览遮罩样式 */
  previewMaskStyle?: object
  /** 预览遮罩类名 */
  previewMaskClassName?: string
  /** 上传按钮渲染 */
  uploadRender?: () => ReactNode
  /** 上传中渲染 */
  uploadingRender?: (item: object) => ReactNode
  /** 项渲染 */
  itemRender?: (item: object) => ReactNode
  /** 预览挂载节点 */
  previewPortal?: HTMLElement
  /** 预览取消位置 */
  previewCancelPosition?: string
  /** 获取项额外数据 */
  getItemExtra?: (options: object) => object
  /** 获取上传地址 */
  getUploadUrl?: (options: object) => string
  /** 格式化选择 */
  formatChoose?: (result: object) => object
  /** 格式化请求头 */
  formatHeaders?: (options: object) => object
  /** 格式化请求体 */
  formatPayload?: (options: object) => object
  /** 格式化响应 */
  formatResponse?: (result: object) => object
  /** 选择前事件 */
  onBeforeChoose?: (e: Event) => Promise<boolean>
  /** 上传事件 */
  onUpload?: (item: object) => Promise<object>
  /** 变化事件 */
  onChange?: (list: Array, options: object) => void
  /** 预览事件 */
  onPreview?: (item: object, index: number) => void
}

export interface MediaUploaderRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
