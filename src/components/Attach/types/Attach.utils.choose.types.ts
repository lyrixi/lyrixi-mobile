import type { AttachItem } from './Attach.common.types'

export interface AttachChooseOptions {
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
  onChoose?: () => unknown
  onChange?: (list: AttachItem[], meta: { action: string }) => void
}
