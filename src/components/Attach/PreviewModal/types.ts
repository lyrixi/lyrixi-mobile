import type { ModalProps } from './../../Modal'

export interface AttachPreviewModalProps {
  fileName?: string
  previewServerUrl?: string
  fileUrl?: string
  previewServerSourceType?: string[]
  open?: boolean
  portal?: ModalProps['portal']
  onClose?: ModalProps['onClose']
}
