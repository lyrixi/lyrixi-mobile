// 内库使用-start
import type { FileItem } from './../../../utils/Bridge/types'
// 内库使用-end

export interface MediaChooseUtilOptions {
  async: boolean
  maxCount?: number
  list?: FileItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (
    newList: FileItem[] | undefined,
    opts?: { action?: string }
  ) => Promise<FileItem[] | undefined>
  onChoose?: () => void | FileItem[] | Promise<FileItem[] | void | null | undefined | unknown>
  onChange?: (list: FileItem[], options: { action: string }) => void | Promise<unknown>
}
