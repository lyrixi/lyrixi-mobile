// 移除Toast
function hide({ onClose } = {}) {
  let toastId = '__lyrixi_toast_el__'
  let mask = document.getElementById(toastId)

  if (mask) {
    if (mask.timeout) window.clearTimeout(mask.timeout)
    mask.timeout = setTimeout(() => {
      mask?.parentNode?.removeChild?.(mask)
      onClose && onClose()
    }, 300)
  }
}

export default hide
