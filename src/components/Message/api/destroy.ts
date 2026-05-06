import globalMessageId from './globalMessageId'

import type { MessageMaskElement } from './types'

// 移除Message Modal
function destroy(mask?: MessageMaskElement | null) {
  if (!mask) {
    // eslint-disable-next-line
    mask = document.getElementById(globalMessageId) as MessageMaskElement | null
  }
  if (mask) {
    // 动画移除
    mask.classList.remove('lyrixi-active')
    mask.querySelector('.lyrixi-modal-message')?.classList.remove('lyrixi-active')

    // DOM移除
    if (mask.timeout) window.clearTimeout(mask.timeout)
    mask.timeout = setTimeout(() => {
      mask?.parentNode?.removeChild?.(mask!)
    }, 300)
  }
}

export default destroy
