import React, { useEffect, useState } from 'react'

import close from '../close'
import Main from '../../Main'

import { MESSAGE_ENTRANCE_ACTIVE_DELAY } from '../constants'
import type { MessageModalProps } from '../../types'
import type { MessageComboButton } from '../../types'

// 内库使用-start
import DOMUtil from '../../../../utils/DOMUtil'
import SafeArea from '../../../SafeArea'
// 内库使用-end

function MessageModal({
  // Status
  maskClosable = true,
  safeArea,
  // Style
  modalStyle,
  modalClassName,
  maskStyle,
  maskClassName,
  // Elements
  children,
  // Elements
  iconSvg,
  iconSize,
  iconColor,
  iconRender,
  title,
  // Style
  titleClassName,
  titleStyle,
  // Value & Display Value
  content,
  // Style
  contentClassName,
  contentStyle,
  footerClassName,
  footerStyle,
  // Value & Display Value
  buttonsLayout,
  buttons
}: Omit<MessageModalProps, 'open' | 'onClose'>) {
  const [active, setActive] = useState(false)

  function handleClose() {
    void close({ animated: true })
  }

  useEffect(() => {
    const timer = window.setTimeout(() => setActive(true), MESSAGE_ENTRANCE_ACTIVE_DELAY)
    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  async function handleButtonClick(
    button: MessageComboButton,
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const result = button.onClick ? await button.onClick(e) : undefined
    if (result !== false) {
      handleClose()
    }
  }

  const hasBodyProps =
    typeof iconRender === 'function' ||
    iconSvg ||
    title ||
    content ||
    (Array.isArray(buttons) && buttons.length > 0)

  function handleMaskClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!maskClosable) return
    if (e.target !== e.currentTarget) return
    handleClose()
  }

  const activeClass = active ? 'lyrixi-active' : ''

  return (
    <div
      className={DOMUtil.classNames(
        'lyrixi-mask',
        'lyrixi-mask-message',
        activeClass,
        maskClassName
      )}
      style={maskStyle}
      onClick={handleMaskClick}
    >
      <div
        className={DOMUtil.classNames(
          'lyrixi-modal-animation',
          'lyrixi-middle',
          'lyrixi-modal-message',
          modalClassName,
          activeClass
        )}
        style={modalStyle}
        data-animation="zoom"
        onClick={(e) => e.stopPropagation()}
      >
        {children ??
          (hasBodyProps ? (
            <Main
              iconSvg={iconSvg}
              iconSize={iconSize}
              iconColor={iconColor}
              iconRender={iconRender}
              title={title}
              titleClassName={titleClassName}
              titleStyle={titleStyle}
              content={content}
              contentClassName={contentClassName}
              contentStyle={contentStyle}
              footerClassName={footerClassName}
              footerStyle={footerStyle}
              buttonsLayout={buttonsLayout}
              buttons={buttons}
              onButtonClick={handleButtonClick}
            />
          ) : null)}
        {safeArea === true && <SafeArea />}
      </div>
    </div>
  )
}

export default MessageModal
