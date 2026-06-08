import type { FileItem } from './Attach.common.types'

export interface AttachChooseOptions {
  async: boolean
  maxSize?: number
  maxCount?: number
  sourceType: string[]
  list?: FileItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (
    newList: FileItem[],
    opts?: { action?: string }
  ) => Promise<FileItem[] | undefined>
  onChoose?: () => unknown
  onChange?: (list: FileItem[], meta: { action: string }) => void
}
