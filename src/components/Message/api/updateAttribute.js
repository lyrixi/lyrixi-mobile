import updateStyle from './updateStyle'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
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
    baseClassName: 'mask message-mask'
  })

  // 更新header
  let headerDOM = mask.querySelector('.lyrixi-message-header')
  let hasHeaderContent = false

  // 更新图标
  let iconDOM = mask.querySelector('.lyrixi-message-icon')
  if (icon) {
    hasHeaderContent = true
    iconDOM?.classList?.remove?.('hide')
    iconDOM.className = DOMUtil.classNames('lyrixi-message-icon', icon)
  } else {
    iconDOM?.classList?.add?.('hide')
    iconDOM.className = 'lyrixi-message-icon lyrixi-hide'
  }

  // 更新标题
  let titleDOM = mask.querySelector('.lyrixi-message-title')
  updateStyle(titleDOM, {
    className: titleClassName,
    style: titleStyle,
    baseClassName: 'message-title'
  })
  if (title) {
    hasHeaderContent = true
    titleDOM?.classList?.remove?.('lyrixi-hide')
    titleDOM.innerHTML = title
  } else {
    titleDOM?.classList?.add?.('lyrixi-hide')
  }

  // 显示或隐藏header
  if (hasHeaderContent) {
    headerDOM?.classList?.remove?.('lyrixi-hide')
  } else {
    headerDOM?.classList?.add?.('lyrixi-hide')
  }

  // 更新内容
  let contentDOM = mask.querySelector('.lyrixi-message-main')
  updateStyle(contentDOM, {
    className: contentClassName,
    style: contentStyle,
    baseClassName: 'message-main'
  })
  if (content) {
    if (typeof content === 'string') {
      contentDOM.innerHTML = content
    } else {
      // 如果content是React元素，我们需要特殊处理
      contentDOM.innerHTML = content
    }
  } else {
    contentDOM.innerHTML = ''
  }

  // 更新底部
  let footerDOM = mask.querySelector('.lyrixi-message-footer')
  updateStyle(footerDOM, {
    className: footerClassName,
    style: footerStyle,
    baseClassName: `lyrixi-message-footer ${
      buttonsLayout === 'vertical' ? 'lyrixi-vertical' : 'lyrixi-horizontal'
    }`
  })

  // 设置按钮布局
  footerDOM.setAttribute('data-layout', buttonsLayout)

  // 渲染按钮
  if (Array.isArray(buttons) && buttons.length > 0) {
    footerDOM?.classList?.remove?.('lyrixi-hide')
    let buttonsHTML = ''
    buttons.forEach((button, index) => {
      const { name, className = '', style = {} } = button
      const buttonId = `lyrixi-message-button-${index}`
      const styleString = Object.entries(style || {})
        .map(([key, value]) => `${key}: ${value}`)
        .join('; ')
      buttonsHTML += `<div class="lyrixi-message-button ${className}" id="${buttonId}" style="${styleString}">${name}</div>`
    })
    footerDOM.innerHTML = buttonsHTML

    // 绑定按钮点击事件
    buttons.forEach((button, index) => {
      const buttonDOM = footerDOM.querySelector(`#lyrixi-message-button-${index}`)
      if (buttonDOM && button.onClick) {
        buttonDOM.onclick = button.onClick
      }
    })
  } else {
    footerDOM?.classList?.add?.('hide')
    footerDOM.innerHTML = ''
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
    ;(document.getElementById('root') || document.body).appendChild(mask)
  }
}

export default updateAttribute
