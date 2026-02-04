import updateStyle from './updateStyle'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 更新Message属性
function updateAttribute(
  mask,
  {
    maskClosable,
    onOpen,
    onClose,

    // Modal
    portal,
    maskClassName,
    maskStyle,

    // 图标
    icon,

    // 标题
    title,
    titleClassName,
    titleStyle,

    // 内容
    content,
    contentClassName,
    contentStyle,

    // 底部
    footerClassName,
    footerStyle,

    // 按钮布局
    buttonsLayout = 'horizontal', // vertical | horizontal

    // 按钮数组
    buttons = []
  }
) {
  // 更新遮罩
  updateStyle(mask, {
    className: maskClassName,
    style: maskStyle,
    baseClassName: 'lyrixi-mask lyrixi-message-mask'
  })

  // 更新header
  let headerElement = mask.querySelector('.lyrixi-message-header')
  let hasHeaderContent = false

  // 更新图标
  let iconElement = mask.querySelector('.lyrixi-message-icon')
  if (icon) {
    hasHeaderContent = true
    iconElement?.classList?.remove?.('lyrixi-hide')
    iconElement.className = DOMUtil.classNames('lyrixi-message-icon', icon)
  } else {
    iconElement?.classList?.add?.('lyrixi-hide')
    iconElement.className = 'lyrixi-message-icon lyrixi-hide'
  }

  // 更新标题
  let titleElement = mask.querySelector('.lyrixi-message-title')
  updateStyle(titleElement, {
    className: titleClassName,
    style: titleStyle,
    baseClassName: 'lyrixi-message-title'
  })
  if (title) {
    hasHeaderContent = true
    titleElement?.classList?.remove?.('lyrixi-hide')
    titleElement.innerHTML = title
  } else {
    titleElement?.classList?.add?.('lyrixi-hide')
  }

  // 显示或隐藏header
  if (hasHeaderContent) {
    headerElement?.classList?.remove?.('lyrixi-hide')
  } else {
    headerElement?.classList?.add?.('lyrixi-hide')
  }

  // 更新内容
  let contentElement = mask.querySelector('.lyrixi-message-main')
  updateStyle(contentElement, {
    className: contentClassName,
    style: contentStyle,
    baseClassName: 'lyrixi-message-main'
  })
  if (content) {
    if (typeof content === 'string') {
      contentElement.innerHTML = content
    } else {
      // 如果content是React元素，我们需要特殊处理
      contentElement.innerHTML = content
    }
  } else {
    contentElement.innerHTML = ''
  }

  // 更新底部
  let footerElement = mask.querySelector('.lyrixi-message-footer')
  updateStyle(footerElement, {
    className: footerClassName,
    style: footerStyle,
    baseClassName: `lyrixi-message-footer ${buttonsLayout === 'vertical' ? 'lyrixi-vertical' : 'lyrixi-horizontal'
      }`
  })

  // 设置按钮布局
  footerElement.setAttribute('data-layout', buttonsLayout)

  // 渲染按钮
  if (Array.isArray(buttons) && buttons.length > 0) {
    footerElement?.classList?.remove?.('lyrixi-hide')
    let buttonsHTML = ''
    buttons.forEach((button, index) => {
      const { name, className = '', style = {} } = button
      const buttonId = `lyrixi-message-button-${index}`
      const styleString = Object.entries(style || {})
        .map(([key, value]) => `${key}: ${value}`)
        .join('; ')
      buttonsHTML += `<div class="lyrixi-message-button ${className}" id="${buttonId}" style="${styleString}">${name}</div>`
    })
    footerElement.innerHTML = buttonsHTML

    // 绑定按钮点击事件
    buttons.forEach((button, index) => {
      const buttonElement = footerElement.querySelector(`#lyrixi-message-button-${index}`)
      if (buttonElement && button.onClick) {
        buttonElement.onclick = button.onClick
      }
    })
  } else {
    footerElement?.classList?.add?.('lyrixi-hide')
    footerElement.innerHTML = ''
  }

  // 更新事件中用到的属性
  mask.maskClosable = maskClosable
  mask.onOpen = onOpen
  mask.onClose = onClose
  mask.buttons = buttons

  // dom透传
  if (toString.call(portal).indexOf('HTML') !== -1) {
    portal.appendChild(mask)
  } else {
    ; (document.getElementById('root') || document.body).appendChild(mask)
  }
}

export default updateAttribute
