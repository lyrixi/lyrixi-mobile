// 内库使用-start
import type { FileItem } from '../../../utils/Bridge/types'
// 内库使用-end

export interface AttachChooseOptions {
  async: boolean
  maxSize?: number
  maxCount?: number
  sourceType: string[]
  list?: FileItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (newList: FileItem[], opts?: { action?: string }) => Promise<FileItem[] | undefined>
  onChoose?: () => unknown
  onChange?: (list: FileItem[], meta: { action: string }) => void
}
