export interface AttachPreviewMainProps {
  fileName?: string
  previewServerUrl?: string
  fileUrl?: string
  previewServerSourceType?: string[]
}

export interface AttachPreviewMainRef {
  mainElement: HTMLDivElement | null
  getMainElement: () => HTMLDivElement | null
}
