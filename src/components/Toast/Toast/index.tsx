import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import close from '../api/close'
import { TOAST_ENTRANCE_ACTIVE_DELAY } from '../api/constants'

import type { ToastProps } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

function Toast({
  duration,
  maskClickable = true,
  placement = 'middle',
  content,
  maskClassName,
  maskStyle,
  modalClassName,
  modalStyle,
  portal,
  onOpen,
  onClose
}: ToastProps) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setActive(true), TOAST_ENTRANCE_ACTIVE_DELAY)
    if (typeof onOpen === 'function') {
      onOpen()
    }
    return () => {
      window.clearTimeout(timer)
    }
  }, [onOpen])

  useEffect(() => {
    const showTimeout = window.setTimeout(
      () => {
        void close({ onClose })
      },
      typeof duration === 'number' ? duration : 2000
    )
    return () => {
      window.clearTimeout(showTimeout)
    }
  }, [duration, onClose])

  const activeClass = active ? 'lyrixi-active' : ''

  const node = (
    <div
      className={DOMUtil.classNames(
        'lyrixi-mask',
        'lyrixi-mask-toast',
        activeClass,
        maskClassName,
        maskClickable !== false ? 'lyrixi-toast-propagation' : ''
      )}
      style={maskStyle}
    >
      <div
        className={DOMUtil.classNames(
          'lyrixi-toast',
          placement ? `lyrixi-${placement}` : 'lyrixi-middle',
          activeClass
        )}
      >
        <div
          className={DOMUtil.classNames('lyrixi-toast-wrapper', modalClassName)}
          style={modalStyle}
        >
          <div className="lyrixi-toast-content">{content}</div>
        </div>
      </div>
    </div>
  )

  if (portal) {
    return createPortal(node, portal)
  }
  return node
}

export default Toast
