import type { AttachFileItem } from './Attach.shared.types'

export interface AttachChooseOptions {
  async: boolean
  maxSize?: number
  maxCount?: number
  sourceType: string[]
  list?: AttachFileItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (
    newList: AttachFileItem[],
    opts?: { action?: string }
  ) => Promise<AttachFileItem[] | undefined>
  onChoose?: () => unknown
  onChange?: (list: AttachFileItem[], meta: { action: string }) => void
}
