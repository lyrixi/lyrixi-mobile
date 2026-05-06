export interface EditProps {
  value?: string
  onDelete?: (val: string) => void
  onPreview?: (src: string) => Promise<boolean | string | void>
}

export interface EditRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
