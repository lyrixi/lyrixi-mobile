import globalMessageId from './../globalMessageId'

// 渲染Message遮罩
function showMask({ portal, onMaskClick }) {
  // 如果没生成成功, 则强制生成
  let mask = document.querySelector('#' + globalMessageId)
  if (!mask) {
    // 创建dom
    mask = document.createElement('div')
    mask.setAttribute('class', `lyrixi-mask lyrixi-message-mask`)
    mask.setAttribute('id', globalMessageId)
    mask.innerHTML = `
      <div class="lyrixi-modal-animation lyrixi-modal lyrixi-middle lyrixi-message-modal" data-animation="zoom">
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
    ;(portal || document.getElementById('root') || document.body).appendChild(mask)

    // 绑定事件
    mask.removeEventListener('click', onMaskClick, false)
    mask.addEventListener('click', onMaskClick, false)
  }

  // 渲染完成后补充active, 解决渲染后动画不生效的问题
  setTimeout(() => {
    mask = document.querySelector('#' + globalMessageId)
    if (!mask) return
    // 如果正在移除，则停止移除
    if (mask.timeout) {
      window.clearTimeout(mask.timeout)
    }
    // 动画显示
    mask.classList.add('lyrixi-active')
    mask.querySelector('.lyrixi-message-modal').classList.add('lyrixi-active')
  }, 10)

  return mask
}

export default showMask
