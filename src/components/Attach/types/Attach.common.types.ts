/** 本地上传中间态，字段可能未齐 */
export interface LocalFile {
  fileUrl?: string
  fileType?: string
  tempFileThumbnail?: string
  [key: string]: unknown
}

/** 文件/媒体列表单项基础类型，Attach 与 Media 共用 */
export interface FileItem {
  // 必要属性
  status?: string
  fileName?: string
  fileUrl?: string
  fileType?: string
  localFile?: LocalFile
  // 其它属性
  fileSize?: number
  filePath?: File | string
  className?: string
  // Media 侧属性
  fileThumbnail?: string
  message?: string
  reloadKey?: unknown
  // 透传业务属性(勿删)
  [key: string]: unknown
}
