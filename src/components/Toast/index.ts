import show, { type ShowProps } from './show'
import hide from './hide'

const Toast: { defaultProps?: ShowProps; show: typeof show; hide: typeof hide } = {
  show,
  hide
}

export default Toast
