// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import LocaleUtil from './../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 显示Loading
// eslint-disable-next-line
export default function (props) {
  const { portal, id, maskClassName, maskStyle, className, style, content, onOpen } = {
    ...(this?.defaultProps || {}),
    ...(props || {})
  }

  // 渲染
  function render() {
    let loadingId = id || '__lyrixi_loading_mask__'
    let mask = document.getElementById(loadingId)

    // 如果没生成成功, 则强制生成
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

      // 添加到dom上
      let root = portal || document.getElementById('root') || document.body
      root.appendChild(mask)
    }

    // 更新mask
    mask.setAttribute(
      'class',
      DOMUtil.classNames('lyrixi-loading-mask lyrixi-mask lyrixi-active', maskClassName)
    )
    mask.setAttribute('id', loadingId)
    mask.setAttribute('style', '')
    for (let key in maskStyle || {}) {
      mask.style[key] = maskStyle[key]
    }

    // 更新container
    let container = mask.querySelector('.lyrixi-loading')
    if (container) {
      container?.setAttribute('class', DOMUtil.classNames('lyrixi-loading', className))
      container?.setAttribute('style', '')
      for (let key in style || {}) {
        container.style[key] = style[key]
      }
    }

    let caption = content
    caption =
      typeof caption === 'string'
        ? caption
        : `${LocaleUtil.locale('加载中', 'lyrixi_f013ea9dcba3f5ca1278aa850931fec8')}...`
    mask.querySelector('.lyrixi-loading-content').innerHTML = caption

    // 显示
    mask.classList.add('lyrixi-active')

    if (typeof onOpen === 'function') {
      onOpen()
    }

    return mask
  }
  return render()
}
