import React, { useEffect, useState } from 'react'

import Main from '../../Main'

import type { MessageOpenProps } from '../../types'

// 内库使用-start
import DOMUtil from '../../../../utils/DOMUtil'
import { MESSAGE_ENTRANCE_ACTIVE_DELAY } from '../constants'
// 内库使用-end

export type MessageOpenLayerProps = MessageOpenProps & {
  onRequestClose: () => void
}

function MessageOpenLayer({
  maskClassName,
  maskStyle,
  maskClosable = true,
  iconRender,
  title,
  titleClassName,
  titleStyle,
  content,
  contentClassName,
  contentStyle,
  footerClassName,
  footerStyle,
  buttonsLayout = 'horizontal',
  buttons = [],
  onRequestClose
}: MessageOpenLayerProps) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setActive(true), MESSAGE_ENTRANCE_ACTIVE_DELAY)
    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  function handleMaskClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!maskClosable) return
    if (e.target !== e.currentTarget) return
    onRequestClose()
  }

  return (
    <div
      className={DOMUtil.classNames(
        'lyrixi-mask',
        'lyrixi-mask-message',
        active && 'lyrixi-active',
        maskClassName
      )}
      style={maskStyle as React.CSSProperties}
      onClick={handleMaskClick}
    >
      <div
        className={DOMUtil.classNames(
          'lyrixi-modal-animation',
          'lyrixi-middle',
          'lyrixi-modal-message',
          active && 'lyrixi-active'
        )}
        data-animation="zoom"
        onClick={(e) => e.stopPropagation()}
      >
        <Main
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
          onButtonClick={async (button, e) => {
            const result = button.onClick ? await button.onClick(e) : undefined
            if (result !== false) {
              onRequestClose()
            }
          }}
        />
      </div>
    </div>
  )
}

export default MessageOpenLayer
