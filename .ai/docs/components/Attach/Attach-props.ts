/**
 * Attach Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface AttachProps {
  /** 附件列表，默认 `[]` */
  list?: Array<{fileUrl: string, filePath: string, fileName: string, fileSize: number, status: 'choose' | 'uploading' | 'error' | 'success'}>
  /** 最大数量 */
  maxCount?: number
  /** 来源类型 */
  sourceType?: Array<'album' | 'camera'>
  /** 是否禁用 */
  disabled?: boolean
  /** 允许选择，默认 `false` */
  allowChoose?: boolean
  /** 允许清除，默认 `false` */
  allowClear?: boolean
  /** 是否异步上传，默认 `false` */
  async?: boolean
  /** 支持重新上传，默认 `true` */
  reUpload?: boolean
  /** 最大文件大小 */
  maxSize?: number
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 上传位置，默认 `'end'` */
  uploadPosition?: 'start' | 'end'
  /** 上传按钮渲染 */
  uploadRender?: () => ReactNode
  /** 上传中渲染 */
  uploadingRender?: (item: object) => ReactNode
  /** 项渲染 */
  itemRender?: (item: object) => ReactNode
  /** 预览挂载节点 */
  previewPortal?: HTMLElement
  /** 预览服务器地址 */
  previewServerUrl?: string
  /** 预览服务器来源类型 */
  previewServerSourceType?: string
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
  onPreview?: (item: object, index: number) => void
}

export interface AttachListProps {
  /** 附件列表 */
  list?: AttachFileItem[]
  /** 允许清除 */
  allowClear?: boolean | ((item: unknown) => boolean)
  /** 上传中渲染 */
  uploadingRender?: (ctx: {uploadingType: string}) => ReactNode
  /** 项渲染 */
  itemRender?: (item: AttachFileItem, index: number) => ReactNode
  /** 变化事件 */
  onChange?: (list: AttachFileItem[], meta: {action: string}) => void
  /** 重新上传事件 */
  onReUpload?: (item: AttachFileItem, index: number) => void
  /** 预览事件 */
  onPreview?: (item: AttachFileItem, index: number) => unknown
}

export interface AttachButtonProps {
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 上传中渲染 */
  uploadingRender?: (ctx: {uploadingType: string}) => ReactNode
}

export interface AttachUploadingProps {
  /** 上传状态类型 */
  uploadingType?: string
  /** 自定义类名 */
  className?: string
  /** 上传中渲染 */
  uploadingRender?: (ctx: {uploadingType: string}) => ReactNode
}

export interface AttachRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 更新状态 */
  updateStatus?: () => void
  /** 选择文件 */
  chooseFile?: () => Promise<object>
  /** 选择 */
  choose?: () => Promise<object>
  /** 上传列表 */
  uploadList?: (list: Array) => Promise<Array> | -
  /** 显示加载 */
  showLoading?: (options: object) => void | -
  /** 隐藏加载 */
  hideLoading?: (options: object) => void | -
}

export interface AttachButtonRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
