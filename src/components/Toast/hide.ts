import type { ToastHideExtendedHTMLElement, ToastHideOptions } from './types'

// 移除Toast
function hide({ onClose }: ToastHideOptions = {}) {
  let toastId = '__lyrixi_toast_el__'
  let mask = document.getElementById(toastId) as ToastHideExtendedHTMLElement | null

  if (mask) {
    if (mask.timeout) window.clearTimeout(mask.timeout)
    mask.timeout = setTimeout(() => {
      mask?.parentNode?.removeChild?.(mask)
      if (onClose) onClose()
    }, 300)
  }
}

export default hide
