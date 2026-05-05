import show from './show'
import type { ShowProps } from './types'
import hide from './hide'

const Toast: { defaultProps?: ShowProps; show: typeof show; hide: typeof hide } = {
  show,
  hide
}

export default Toast
