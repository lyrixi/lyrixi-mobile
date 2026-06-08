import type { AttachItem } from './Attach.common.types'

export interface FileChooseOptions {
  file: HTMLInputElement
  async: boolean
  maxSize?: number
  maxCount?: number
  sourceType: string[]
  list?: AttachItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (
    newList: AttachItem[],
    opts?: { action?: string }
  ) => Promise<AttachItem[] | undefined>
  onFileChange?: (payload: AttachItem) => unknown
  onChange?: (list: AttachItem[], meta: { action: string }) => void
}
