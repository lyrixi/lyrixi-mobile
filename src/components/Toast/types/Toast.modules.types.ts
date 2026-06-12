import open from '../api/open'
import close from '../api/close'

import type { ToastOpenProps } from './Toast.types'

export type ToastComponents = {
  defaultProps?: ToastOpenProps
  open: typeof open
  close: typeof close
}
