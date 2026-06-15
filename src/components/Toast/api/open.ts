import close from './close'
import type { CSSProperties } from 'react'

import type { ToastOpenExtendedHTMLElement, ToastOpenProps } from '../types'

// 内库使用-start
import DOMUtil from '../../../utils/DOMUtil'
// 内库使用-end

// 显示Toast（作为 Toast.open 调用时 this 为复合 export，含 open/close 等挂载项）
// eslint-disable-next-line
function open(
  this: ({ defaultProps?: ToastOpenProps } & Record<string, unknown>) | void,
  props?: ToastOpenProps
) {
  const context = this as { defaultProps?: ToastOpenProps } | undefined
  const {
    // Visible duration
    duration,
    maskClickable,
    // Pop placement: top、middle、bottom
    placement,
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
    ...(context?.defaultProps || {}),
    ...(props || {})
  }

  // 渲染
  function render() {
    let toastId = id || '__lyrixi_toast_el__'
    // 如果没生成成功, 则强制生成
    let mask = document.getElementById(toastId) as ToastOpenExtendedHTMLElement | null
    if (!mask) {
      // Create mask
      mask = document.createElement('div') as ToastOpenExtendedHTMLElement

      mask.innerHTML = `<div class="lyrixi-toast">
        <div class="lyrixi-toast-wrapper">
          <div class="lyrixi-toast-content"></div>
        </div>
      </div>`
      // 添加到dom上
      ;(portal || document.getElementById('root') || document.body).appendChild(mask)
    }

    // Update mask
    mask.setAttribute(
      'class',
      DOMUtil.classNames(
        'lyrixi-mask lyrixi-mask-toast',
        maskClassName,
        maskClickable !== false ? 'lyrixi-toast-propagation' : ''
      )
    )
    mask.setAttribute('id', toastId)
    mask.setAttribute('style', '')
    if (maskStyle) {
      for (let key in maskStyle) {
        const k = key as keyof CSSProperties
        const val = maskStyle[k]
        if (val !== undefined) (mask.style as unknown as Record<string, unknown>)[key] = val
      }
    }

    // Update container
    let container = mask.querySelector('.lyrixi-toast')
    if (container) {
      container?.setAttribute(
        'class',
        DOMUtil.classNames('lyrixi-toast', placement ? `lyrixi-${placement}` : 'lyrixi-middle')
      )
    }

    // Update wrapper
    let wrapper = mask.querySelector('.lyrixi-toast-wrapper') as HTMLElement | null
    if (wrapper) {
      wrapper?.setAttribute('class', DOMUtil.classNames('lyrixi-toast-wrapper', className))
      wrapper?.setAttribute('style', '')
      if (style) {
        for (let key in style) {
          const k = key as keyof CSSProperties
          const val = style[k]
          if (val !== undefined) (wrapper.style as unknown as Record<string, unknown>)[key] = val
        }
      }
    }

    // Update content
    let contentElement = mask.querySelector('.lyrixi-toast-content')
    if (contentElement) {
      contentElement.innerHTML = content || ''
    }

    // Open toast
    mask.classList.add('lyrixi-active')
    const firstChild = mask.childNodes[0] as Element | undefined
    firstChild?.classList?.add('lyrixi-active')

    if (typeof onOpen === 'function') {
      onOpen()
    }

    // 显示数秒后隐藏
    if (mask.showTimeout) window.clearTimeout(mask.showTimeout)
    mask.showTimeout = setTimeout(
      () => {
        close({ onClose: onClose })
      },
      typeof duration === 'number' ? duration : 2000
    )

    // 返回节点
    return mask
  }
  return render()
}

export default open
