import type { ReactNode } from 'react'

/** fileChoose 在选中本地文件后传给 onFileChange 的载荷（与 input 的 change 二选一由业务处理） */
export interface AttachNativeFilePayload {
  fileName: string
  fileSize?: number
  fileType?: string
  filePath?: File
  fileUrl?: string
  status: string
}

/** 附件列表单项（宽松结构，含上传状态等） */
export interface AttachFileItem {
  className?: string
  status?: string
  fileUrl?: string
  fileName?: string
  [key: string]: unknown
}

export interface AttachListProps {
  list?: AttachFileItem[]
  allowClear?: boolean | ((item: unknown) => boolean)
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  itemRender?: (item: AttachFileItem, index: number) => ReactNode
  onChange?: (list: AttachFileItem[], meta: { action: string }) => void
  onReUpload?: (item: AttachFileItem, index: number) => void
  onPreview?: (item: AttachFileItem, index: number) => unknown
}

export interface AttachItemProps {
  item: AttachFileItem
  index: number
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  itemRender?: (item: AttachFileItem, index: number) => ReactNode
  onDelete: ((item: AttachFileItem, index: number) => void) | null
  onReUpload?: (item: AttachFileItem, index: number) => void
  onPreview?: AttachListProps['onPreview']
}
