import type { MediaItem } from './Media.types'

export interface MediaChooseUtilOptions {
  async: boolean
  maxCount?: number
  list?: MediaItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (
    newList: MediaItem[] | undefined,
    opts?: { action?: string }
  ) => Promise<MediaItem[] | undefined>
  onChoose?: () =>
    | void
    | MediaItem[]
    | Promise<MediaItem[] | void | null | undefined | unknown>
  onChange?: (list: MediaItem[], meta: { action: string }) => void | Promise<unknown>
}
