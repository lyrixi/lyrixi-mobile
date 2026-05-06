import destroy from './../destroy'
import type { MessageMaskElement } from './../types'
import showMask from './showMask'
import type { MessageOpenProps } from './types'
import updateAttribute from './updateAttribute'

export type { MessageOpenButton, MessageOpenProps } from './types'

// 弹出Message对话框
export default function open({
  onOpen,
  onClose,

  // Modal
  portal,
  maskClassName,
  maskStyle,
  maskClosable = true,

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

  // 按钮布局: vertical | horizontal
  buttonsLayout = 'horizontal',

  // 按钮数组: [{name: string, onClick: function, className?: string, style?: object}]
  buttons = []
}: MessageOpenProps): MessageMaskElement {
  let mask: MessageMaskElement | null = null

  // 点击遮罩
  function handleMaskClick(e: MouseEvent) {
    e.stopPropagation()

    const target = e.target as HTMLElement

    // 点击按钮
    if (target.classList.contains('lyrixi-message-button')) {
      handleButtonClick(e)
      return
    }

    // 点击遮罩
    if (target.classList.contains('lyrixi-mask')) {
      // 读取更新后的属性
      const currentMaskClosable = mask?.maskClosable
      const currentOnClose = mask?.onClose

      if (currentMaskClosable) {
        if (currentOnClose) currentOnClose()
        destroy(e.currentTarget as MessageMaskElement)
      }
    }
  }

  // 点击按钮
  function handleButtonClick(e: MouseEvent) {
    const target = e.target as HTMLElement
    const buttonId = target.id
    const buttonIndex = parseInt(buttonId.replace('lyrixi-message-button-', ''))
    const currentButtons = mask?.buttons || []
    const button = currentButtons[buttonIndex]

    if (button && typeof button.onClick === 'function') {
      const result = button.onClick()
      // 如果onClick返回false，不关闭弹窗
      if (result !== false) {
        const currentOnClose = mask?.onClose
        if (currentOnClose) currentOnClose()
        destroy((e.currentTarget as HTMLElement).closest('.lyrixi-mask-message') as MessageMaskElement | null)
      }
    } else {
      const currentOnClose = mask?.onClose
      if (currentOnClose) currentOnClose()
      destroy((e.currentTarget as HTMLElement).closest('.lyrixi-mask-message') as MessageMaskElement | null)
    }
    e.stopPropagation()
  }

  // 渲染与绑定事件
  mask = showMask({
    portal,
    onMaskClick: handleMaskClick
  })

  // 更新属性
  updateAttribute(mask, {
    portal,

    maskClosable,
    onOpen,
    onClose,

    // 遮罩
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
    buttonsLayout,

    // 按钮数组
    buttons
  })

  // Trigger onOpen
  if (onOpen) onOpen()

  return mask
}
