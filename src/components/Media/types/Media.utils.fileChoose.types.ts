import type { MediaProps } from './Media.types'

// 内库使用-start
import type { FileItem } from './../../../utils/Bridge/types'
// 内库使用-end

export interface MediaFileChooseParams {
  file: HTMLInputElement
  async: boolean
  sizeType?: string[]
  maxWidth?: number
  quality?: number
  maxCount?: number
  list?: FileItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (
    newList: FileItem[] | undefined,
    opts?: { action?: string }
  ) => Promise<FileItem[] | undefined>
  onFileChange?: MediaProps['onFileChange']
  onChange?: MediaProps['onChange']
}
