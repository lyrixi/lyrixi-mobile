type ExtendedHTMLElement = HTMLElement & { timeout?: ReturnType<typeof setTimeout> }

interface HideOptions {
  onClose?: () => void
}

// 移除Toast
function hide({ onClose }: HideOptions = {}) {
  let toastId = '__lyrixi_toast_el__'
  let mask = document.getElementById(toastId) as ExtendedHTMLElement | null

  if (mask) {
    if (mask.timeout) window.clearTimeout(mask.timeout)
    mask.timeout = setTimeout(() => {
      mask?.parentNode?.removeChild?.(mask)
      onClose && onClose()
    }, 300)
  }
}

export default hide
