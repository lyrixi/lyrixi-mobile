/**
 * AttachUploader Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface AttachUploaderProps {
  /** 附件列表，默认 `[]` */
  list?: Array<{fileUrl: string, filePath: string, status: 'choose' | 'uploading' | 'error' | 'success'}>
  /** 最大数量 */
  maxCount?: number
  /** 最大选择数量 */
  maxChooseCount?: number
  /** 来源类型 */
  sourceType?: Array<'album' | 'camera'>
  /** 最大文件大小 */
  maxSize?: number
  /** 是否异步上传，默认 `false` */
  async?: boolean
  /** 支持重新上传，默认 `true` */
  reUpload?: boolean
  /** 允许清除，默认 `true` */
  allowClear?: boolean
  /** 允许选择，默认 `true` */
  allowChoose?: boolean
  /** 自定义类名 */
  className?: string
  /** 上传位置 */
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
  /** 获取上传地址 */
  getUploadUrl?: (options: object) => string
  /** 格式化请求头 */
  formatHeaders?: (options: object) => object
  /** 格式化请求体 */
  formatPayload?: (options: object) => object
  /** 格式化响应 */
  formatResponse?: (result: object) => object
  /** 选择前事件 */
  onBeforeChoose?: (e: Event) => Promise<boolean>
  /** 文件变化事件 */
  onFileChange?: (result: object) => void
  /** 上传事件 */
  onUpload?: (item: object) => Promise<object>
  /** 变化事件 */
  onChange?: (list: Array, options: object) => void
  /** 预览事件 */
  onPreview?: (item: object, index: number) => void
}

export interface AttachUploaderRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
