
import type { LoadingShowProps } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import LocaleUtil from './../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 显示Loading
export default function showLoading(props?: LoadingShowProps): HTMLElement | null {
  const { portal, id, maskClassName, maskStyle, className, style, content, onOpen } = props || {}

  function render(): HTMLElement | null {
    const loadingId = id || '__lyrixi_loading_mask__'
    let mask = document.getElementById(loadingId)

    if (!mask) {
      mask = document.createElement('div')
      mask.innerHTML = `<div class="lyrixi-loading">
          <div class="lyrixi-loading-icon lyrixi-loading-spinfade">
            <div class="lyrixi-loading-spinfade-item"></div>
            <div class="lyrixi-loading-spinfade-item"></div>
            <div class="lyrixi-loading-spinfade-item"></div>
            <div class="lyrixi-loading-spinfade-item"></div>
            <div class="lyrixi-loading-spinfade-item"></div>
            <div class="lyrixi-loading-spinfade-item"></div>
            <div class="lyrixi-loading-spinfade-item"></div>
            <div class="lyrixi-loading-spinfade-item"></div>
            <div class="lyrixi-loading-spinfade-item"></div>
            <div class="lyrixi-loading-spinfade-item"></div>
            <div class="lyrixi-loading-spinfade-item"></div>
            <div class="lyrixi-loading-spinfade-item"></div>
          </div>
          <div class="lyrixi-loading-content"></div>
        </div>`

      const root = portal || document.getElementById('root') || document.body
      root.appendChild(mask)
    }

    mask.setAttribute(
      'class',
      DOMUtil.classNames('lyrixi-mask-loading lyrixi-mask lyrixi-active', maskClassName)
    )
    mask.setAttribute('id', loadingId)
    mask.setAttribute('style', '')
    if (maskStyle) {
      for (const key in maskStyle) {
        ;(mask.style as unknown as Record<string, string>)[key] = maskStyle[key] as string
      }
    }

    const container = mask.querySelector<HTMLElement>('.lyrixi-loading')
    if (container) {
      container.setAttribute('class', DOMUtil.classNames('lyrixi-loading', className))
      container.setAttribute('style', '')
      if (style) {
        for (const key in style) {
          ;(container.style as unknown as Record<string, string>)[key] = style[key] as string
        }
      }
    }

    let caption = content
    caption =
      typeof caption === 'string'
        ? caption
        : `${LocaleUtil.locale('加载中', 'lyrixi_f013ea9dcba3f5ca1278aa850931fec8')}...`
    const contentEl = mask.querySelector('.lyrixi-loading-content')
    if (contentEl) {
      contentEl.innerHTML = caption
    }

    mask.classList.add('lyrixi-active')

    if (typeof onOpen === 'function') {
      onOpen()
    }

    return mask
  }

  return render()
}
