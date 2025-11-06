// 移除Toast
function hide(props) {
  let toastId = '__lyrixi_toast_el__'
  let mask = document.getElementById(toastId)

  if (mask) {
    if (mask.timeout) window.clearTimeout(mask.timeout)
    mask.timeout = setTimeout(() => {
      mask?.parentNode?.removeChild?.(mask)
      props?.onClose && props?.onClose()
    }, 300)
  }
}

export default hide
