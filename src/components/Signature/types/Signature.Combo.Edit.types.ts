export interface SignatureComboEditProps {
  // Value & Display Value
  value?: string
  // Events
  onDelete?: (val: string) => void
  onPreview?: (src: string) => Promise<boolean | string | void>
}

export interface SignatureComboEditRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
