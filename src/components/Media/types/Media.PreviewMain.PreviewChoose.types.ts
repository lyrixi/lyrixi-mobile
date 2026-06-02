import type { ChangeEvent, MouseEvent, SyntheticEvent } from 'react'

export interface MediaPreviewChooseProps {
  // Value & Display Value
  mediaType?: string | string[]
  sourceType: string[]
  // Events
  onBeforeChoose?: (e: MouseEvent) => boolean | void | Promise<boolean | void>
  onChoose?: (e?: SyntheticEvent) => void | Promise<unknown>
  onFileChange?: (e: ChangeEvent<HTMLInputElement>) => void | Promise<unknown>
}
