import type { ChangeEvent, MouseEvent, SyntheticEvent } from 'react'

export interface MediaPreviewChooseProps {
  mediaType?: string | string[]
  sourceType: string[]
  onBeforeChoose?: (e: MouseEvent) => boolean | void | Promise<boolean | void>
  onChoose?: (e?: SyntheticEvent) => void | Promise<unknown>
  onFileChange?: (e: ChangeEvent<HTMLInputElement>) => void | Promise<unknown>
}
