import globalMessageId from './../globalMessageId'

export interface MessageMaskElement extends HTMLElement {
  timeout?: ReturnType<typeof setTimeout>
  maskClosable?: boolean
  onOpen?: () => void
  onClose?: () => void
  buttons?: Array<{ id?: string; name: string; className?: string; style?: Record<string, unknown>; onClick?: () => boolean | void }>
}

interface ShowMaskParams {
  portal?: HTMLElement | string | boolean
  onMaskClick: (e: MouseEvent) => void
}

// 渲染Message遮罩
function showMask({ portal, onMaskClick }: ShowMaskParams): MessageMaskElement {
  // 如果没生成成功, 则强制生成
  let mask = document.querySelector('#' + globalMessageId) as MessageMaskElement | null
  if (!mask) {
    // 创建dom
    mask = document.createElement('div') as MessageMaskElement
    mask.setAttribute('class', `lyrixi-mask lyrixi-mask-message`)
    mask.setAttribute('id', globalMessageId)
    mask.innerHTML = `
      <div class="lyrixi-modal-animation lyrixi-middle lyrixi-modal-message" data-animation="zoom">
        <div class="lyrixi-message-header lyrixi-hide">
          <div class="lyrixi-message-icon lyrixi-hide"></div>
          <div class="lyrixi-message-title lyrixi-hide"></div>
        </div>
        <div class="lyrixi-message-main"></div>
        <div class="lyrixi-message-footer lyrixi-hide">
        </div>
      </div>
    `

      // 添加到dom上
      ; (portal instanceof HTMLElement ? portal : (document.getElementById('root') || document.body)).appendChild(mask)

    // 绑定事件
    mask.removeEventListener('click', onMaskClick, false)
    mask.addEventListener('click', onMaskClick, false)
  }

  // 渲染完成后补充active, 解决渲染后动画不生效的问题
  setTimeout(() => {
    const currentMask = document.querySelector('#' + globalMessageId) as MessageMaskElement | null
    if (!currentMask) return
    // 如果正在移除，则停止移除
    if (currentMask.timeout) {
      window.clearTimeout(currentMask.timeout)
    }
    // 动画显示
    currentMask.classList.add('lyrixi-active')
    currentMask.querySelector('.lyrixi-modal-message')?.classList.add('lyrixi-active')
  }, 10)

  return mask
}

export default showMask
