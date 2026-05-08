import type { ToastHideOptions } from './types'


type ExtendedHTMLElement = HTMLElement & { timeout?: ReturnType<typeof setTimeout> }

// 移除Toast
function hide({ onClose }: ToastHideOptions = {}) {
  let toastId = '__lyrixi_toast_el__'
  let mask = document.getElementById(toastId) as ExtendedHTMLElement | null

  if (mask) {
    if (mask.timeout) window.clearTimeout(mask.timeout)
    mask.timeout = setTimeout(() => {
      mask?.parentNode?.removeChild?.(mask)
      if (onClose) onClose()
    }, 300)
  }
}

export type { ToastHideOptions } from './types'
export default hide
