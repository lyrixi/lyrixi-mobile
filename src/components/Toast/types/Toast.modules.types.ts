import show from '../show'
import hide from '../hide'

import type { ToastShowProps } from './Toast.types'

export type ToastComponents = {
  defaultProps?: ToastShowProps
  show: typeof show
  hide: typeof hide
}
