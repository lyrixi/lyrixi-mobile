import hide from './hide'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

// 显示Toast
// eslint-disable-next-line
function show(props) {
  const {
    // Visible duration
    duration,
    maskClickable,
    // Pop position: top、middle、bottom
    position,
    portal,
    id,
    maskClassName,
    maskStyle,
    className,
    style,
    // Content html text
    content,
    onOpen,
    onClose
  } = {
    ...(this?.defaultProps || {}),
    ...(props || {})
  }

  // 渲染
  function render() {
    let toastId = id || '__lyrixi_toast_el__'
    // 如果没生成成功, 则强制生成
    let mask = document.getElementById(toastId)
    if (!mask) {
      // Create mask
      mask = document.createElement('div')

      mask.innerHTML = `<div class="lyrixi-toast">
        <div class="lyrixi-toast-wrapper">
          <div class="lyrixi-toast-content"></div>
        </div>
      </div>`
        // 添加到dom上
        ; (portal || document.getElementById('root') || document.body).appendChild(mask)
    }

    // Update mask
    mask.setAttribute(
      'class',
      DOMUtil.classNames(
        'lyrixi-mask lyrixi-toast-mask',
        maskClassName,
        maskClickable !== false ? 'lyrixi-toast-propagation' : ''
      )
    )
    mask.setAttribute('id', toastId)
    mask.setAttribute('style', '')
    for (let key in maskStyle || {}) {
      if (maskStyle[key] !== undefined) mask.style[key] = maskStyle[key]
    }

    // Update container
    let container = mask.querySelector('.lyrixi-toast')
    if (container) {
      container?.setAttribute(
        'class',
        DOMUtil.classNames('lyrixi-toast', position || 'lyrixi-middle')
      )
    }

    // Update wrapper
    let wrapper = mask.querySelector('.lyrixi-toast-wrapper')
    if (wrapper) {
      wrapper?.setAttribute('class', DOMUtil.classNames('lyrixi-toast-wrapper', className))
      wrapper?.setAttribute('style', '')
      for (let key in style || {}) {
        wrapper.style[key] = style[key]
      }
    }

    // Update content
    let contentElement = mask.querySelector('.lyrixi-toast-content')
    if (contentElement) {
      contentElement.innerHTML = content || ''
    }

    // Open toast
    mask.classList.add('lyrixi-active')
    mask.childNodes[0].classList.add('lyrixi-active')

    if (typeof onOpen === 'function') {
      onOpen()
    }

    // 显示数秒后隐藏
    if (mask.showTimeout) window.clearTimeout(mask.showTimeout)
    mask.showTimeout = setTimeout(
      () => {
        hide({ onClose: onClose })
      },
      typeof duration === 'number' ? duration : 2000
    )

    // 返回节点
    return mask
  }
  return render()
}

export default show
