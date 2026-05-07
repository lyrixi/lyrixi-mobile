import type { MediaListItem } from './Media.Media.types'

export interface MediaChooseUtilOptions {
  async: boolean
  maxCount?: number
  list?: MediaListItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (
    newList: MediaListItem[] | undefined,
    opts?: { action?: string }
  ) => Promise<MediaListItem[] | undefined>
  onChoose?: () =>
    | void
    | MediaListItem[]
    | Promise<MediaListItem[] | void | null | undefined | unknown>
  onChange?: (list: MediaListItem[], meta: { action: string }) => void | Promise<unknown>
}
