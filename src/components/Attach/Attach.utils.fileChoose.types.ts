import type { AttachFileItem, AttachNativeFilePayload } from './Attach.shared.types'

export interface FileChooseOptions {
  file: HTMLInputElement
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
  onFileChange?: (payload: AttachNativeFilePayload) => unknown
  onChange?: (list: AttachFileItem[], meta: { action: string }) => void
}
