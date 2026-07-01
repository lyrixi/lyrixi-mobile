import type { ToastCloseExtendedHTMLElement, ToastCloseParams } from '../types'

// 移除Toast
function close(params: ToastCloseParams = {}) {
  const { onClose } = params
  let toastId = '__lyrixi_toast_el__'
  let mask = document.getElementById(toastId) as ToastCloseExtendedHTMLElement | null

  if (mask) {
    if (mask.timeout) window.clearTimeout(mask.timeout)
    mask.timeout = setTimeout(() => {
      mask?.parentNode?.removeChild?.(mask)
      if (onClose) onClose()
    }, 300)
  }
}

export default close
