import show from './show'
import type { ToastShowProps } from './types'
import hide from './hide'

const Toast: { defaultProps?: ToastShowProps; show: typeof show; hide: typeof hide } = {
  show,
  hide
}

export default Toast
