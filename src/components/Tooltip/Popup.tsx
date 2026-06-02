import React, { forwardRef, useRef, useImperativeHandle, type CSSProperties, type MouseEvent } from 'react'
import { createPortal } from 'react-dom'

import getDataAnimation from './api/getDataAnimation'

import type { TooltipPopupProps, TooltipPopupRef } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import getClassNameByAnimation from './../Modal/api/getClassNameByAnimation'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-mobile'
const getClassNameByAnimation = Modal.getClassNameByAnimation
测试使用-end */

const Popup = forwardRef<TooltipPopupRef, TooltipPopupProps>(function Popup(
  {
    // Status
    open,
    maskClosable = true,
    // Value & Display Value
    animation,
    // Style
    modalStyle,
    modalClassName,
    maskStyle,
    maskClassName,
    // Elements
    portal,
    children,
    // Events
    onClose
  },
  ref
) {
  const maskRef = useRef<HTMLDivElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const position = getClassNameByAnimation(String(animation ?? ''))
  const dataAnimation = getDataAnimation(animation as string)

  useImperativeHandle(ref, () => {
    return {
      maskElement: maskRef.current,
      getMaskElement: () => {
        return maskRef.current
      },
      modalElement: modalRef.current,
      getModalElement: () => {
        return modalRef.current
      }
    }
  })

  function handleMaskClick(e: MouseEvent<HTMLDivElement>) {
    if (maskClosable && onClose) onClose()
    e.stopPropagation()
  }

  const backgroundColor = modalStyle?.backgroundColor
  const borderColor = modalStyle?.borderColor

  let arrowStyle: CSSProperties | null = null
  let arrowOuterStyle: CSSProperties | null = null
  if (position.indexOf('bottom') === 0) {
    arrowStyle = backgroundColor
      ? {
          borderTopColor: String(backgroundColor)
        }
      : null
    arrowOuterStyle = borderColor
      ? {
          borderTopColor: String(borderColor)
        }
      : null
  } else {
    arrowStyle = backgroundColor
      ? {
          borderBottomColor: String(backgroundColor)
        }
      : null
    arrowOuterStyle = borderColor
      ? {
          borderBottomColor: String(borderColor)
        }
      : null
  }

  return createPortal(
    <div
      ref={maskRef}
      style={maskStyle}
      className={DOMUtil.classNames('lyrixi-mask lyrixi-mask-tooltip', maskClassName, open ? 'lyrixi-active' : '')}
      onClick={handleMaskClick}
    >
      <div
        ref={modalRef}
        style={modalStyle}
        className={DOMUtil.classNames(
          'lyrixi-modal-animation lyrixi-tooltip tooltip-bottom',
          position,
          modalClassName,
          open ? 'lyrixi-active' : ''
        )}
        data-animation={dataAnimation}
      >
        <div className="lyrixi-tooltip-content">{children}</div>
        <div className="lyrixi-tooltip-arrow-outer" style={arrowOuterStyle ?? undefined}></div>
        <div className="lyrixi-tooltip-arrow" style={arrowStyle ?? undefined}></div>
      </div>
    </div>,
    portal ?? document.getElementById('root') ?? document.body
  )
})
export default Popup
