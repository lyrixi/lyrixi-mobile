// 内库使用-start
import type { Root } from '../../../utils/ReactDOMClientCompat'
// 内库使用-end

export type ToastInstance = {
  root: Root | null
  rootElement: HTMLDivElement | null
}

const toastInstance: ToastInstance = {
  root: null,
  rootElement: null
}

export default toastInstance
