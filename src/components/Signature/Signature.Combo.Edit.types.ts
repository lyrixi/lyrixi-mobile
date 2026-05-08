export interface SignatureComboEditProps {
  value?: string
  onDelete?: (val: string) => void
  onPreview?: (src: string) => Promise<boolean | string | void>
}

export interface SignatureComboEditRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface SignatureComboEditThumbnailProps {
  src?: string
  onPreview?: (src: string) => Promise<boolean | string | void>
}
