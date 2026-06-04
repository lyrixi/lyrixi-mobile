/**
 * Media Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface MediaProps {
  /** 媒体列表，默认 `[]` */
  list?: Array<{fileThumbnail: string, fileUrl: string, filePath: string, status: 'choose' | 'uploading' | 'error' | 'success'}>
  /** 最大数量 */
  maxCount?: number
  /** 媒体类型，默认 `['image']` */
  mediaType?: Array<'image' | 'video'>
  /** 省略配置 */
  ellipsis?: object
  /** 来源类型，默认 `['album', 'camera']` */
  sourceType?: Array<'album' | 'camera'>
  /** 尺寸类型，默认 `['compressed']` */
  sizeType?: Array<'original' | 'compressed'>
  /** 图片压缩配置 */
  fileImageCompress?: {maxWidth: number, quality: number}
  /** 允许选择，默认 `false` */
  allowChoose?: boolean
  /** 允许清除，默认 `false` */
  allowClear?: boolean
  /** 是否异步上传，默认 `false` */
  async?: boolean
  /** 支持重新上传，默认 `true` */
  reUpload?: boolean
  /** 预览允许选择 */
  previewAllowChoose?: boolean
  /** 预览允许清除 */
  previewAllowClear?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 上传位置，默认 `'end'` */
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
  /** 选择前事件 */
  onBeforeChoose?: (e: Event) => Promise<boolean>
  /** 选择事件 */
  onChoose?: (result: object) => void
  /** 文件变化事件 */
  onFileChange?: (result: object) => void
  /** 上传事件 */
  onUpload?: (item: object) => Promise<object>
  /** 变化事件 */
  onChange?: (list: Array, options: object) => void
  /** 预览事件 */
  onPreview?: (item: object, index: number) => Promise<string | false>
}

export interface MediaListProps {
  /** 媒体列表 */
  list?: Array<object>
  /** 媒体类型 */
  mediaType?: Array<'image' | 'video'>
  /** 省略配置 */
  ellipsis?: object
  /** 允许清除 */
  allowClear?: boolean
  /** 上传中渲染 */
  uploadingRender?: (item: object) => ReactNode
  /** 项渲染 */
  itemRender?: (item: object) => ReactNode
  /** 变化事件 */
  onChange?: (list: Array) => void
  /** 重新上传事件 */
  onReUpload?: (item: object, index: number) => void
  /** 预览事件 */
  onPreview?: (item: object, index: number) => void
}

export interface MediaPreviewModalProps {
  /** 媒体列表 */
  list?: MediaItem[]
  /** 当前索引 */
  index?: number
  /** 当前页索引 */
  current?: number
  /** 媒体类型 */
  mediaType?: string | string[]
  /** 最大数量 */
  maxCount?: number
  /** 来源类型 */
  sourceType?: string[]
  /** 尺寸类型 */
  sizeType?: string[]
  /** 图片压缩配置 */
  fileImageCompress?: {maxWidth?: number, quality?: number}
  /** 是否显示 */
  open?: boolean
  /** 允许选择 */
  allowChoose?: boolean
  /** 允许清除 */
  allowClear?: boolean | ((item: MediaItem) => boolean)
  /** 主区域样式 */
  mainStyle?: CSSProperties
  /** 主区域类名 */
  mainClassName?: string
  /** 是否安全区 */
  safeArea?: boolean
  /** 导航栏样式 */
  navBarStyle?: CSSProperties
  /** 导航栏类名 */
  navBarClassName?: string
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement
  /** 取消按钮位置 */
  cancelPosition?: 'left' | 'right'
  /** 选择前事件 */
  onBeforeChoose?: 同 Media.onBeforeChoose
  /** 选择事件 */
  onChoose?: 同 Media.onChoose
  /** 文件变化事件 */
  onFileChange?: 同 Media.onFileChange
  /** 上传事件 */
  onUpload?: 同 Media.onUpload
  /** 变化事件 */
  onChange?: 同 Media.onChange
  /** 关闭事件 */
  onClose?: () => void
}

export interface MediaPreviewMainProps {
  /** 媒体列表 */
  list?: MediaItem[]
  /** 当前索引 */
  index?: number
  /** 媒体类型 */
  mediaType?: string | string[]
  /** 来源类型 */
  sourceType?: string[]
  /** 尺寸类型 */
  sizeType?: string[]
  /** 最大数量 */
  maxCount?: number
  /** 图片压缩配置 */
  fileImageCompress?: {maxWidth?: number, quality?: number}
  /** 是否显示 */
  open?: boolean
  /** 是否可关闭 */
  closable?: boolean
  /** 允许选择 */
  allowChoose?: boolean
  /** 允许清除 */
  allowClear?: boolean | ((item: MediaItem) => boolean)
  /** 是否异步上传 */
  async?: boolean
  /** 支持重新上传 */
  reUpload?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 是否安全区 */
  safeArea?: boolean
  /** 选择前事件 */
  onBeforeChoose?: 同 Media.onBeforeChoose
  /** 选择事件 */
  onChoose?: 同 Media.onChoose
  /** 文件变化事件 */
  onFileChange?: 同 Media.onFileChange
  /** 上传事件 */
  onUpload?: 同 Media.onUpload
  /** 变化事件 */
  onChange?: 同 Media.onChange
  /** 关闭事件 */
  onClose?: () => void
}

export interface MediaMarkProps {
  /** 标记文案列表 */
  labels?: ReactNode[]
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface MediaRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 更新状态 */
  updateStatus?: () => void
}

export interface MediaListRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface MediaPreviewModalRef {
  /** 预览主区域实例 */
  mainElement?: SwiperRef | null
  /** 获取主区域实例 */
  getMainElement?: () => SwiperRef | null
}

export interface MediaPreviewMainRef {
  /** 预览主区域实例 */
  mainElement?: SwiperRef | null
  /** 获取主区域实例 */
  getMainElement?: () => SwiperRef | null
}
