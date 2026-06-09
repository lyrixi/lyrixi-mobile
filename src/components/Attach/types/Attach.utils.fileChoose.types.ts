import type { FileItem } from './Attach.common.types'
import type { AttachProps } from './Attach.types'

export interface FileChooseOptions {
  file: HTMLInputElement
  async: boolean
  maxSize?: number
  maxCount?: number
  sourceType: string[]
  list?: FileItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (newList: FileItem[], opts?: { action?: string }) => Promise<FileItem[] | undefined>
  onFileChange?: AttachProps['onFileChange']
  onChange?: AttachProps['onChange']
}
