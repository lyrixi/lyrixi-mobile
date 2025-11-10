import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import getDataAnimation from './api/getDataAnimation'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import getClassNameByAnimation from './../Modal/api/getClassNameByAnimation'
// 内库使用-end

/* 测试使用-start
import { Modal } from 'lyrixi-mobile'
const getClassNameByAnimation = Modal.getClassNameByAnimation
测试使用-end */

const Popup = forwardRef(
  (
    {
      // Status
      open,
      maskClosable = true,

      // Style
      animation, // none | slideLeft | slideRight | slideUp | slideDown | zoom | fade
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Element
      portal,
      children,

      // Events
      onClose
    },
    ref
  ) => {
    const maskRef = useRef(null)
    const modalRef = useRef(null)

    // 构建动画
    let position = getClassNameByAnimation(animation)
    let dataAnimation = getDataAnimation(animation)

    useImperativeHandle(ref, () => {
      return {
        maskDOM: maskRef.current,
        getMaskDOM: () => {
          return maskRef.current
        },
        modalDOM: modalRef.current,
        getModalDOM: () => {
          return modalRef.current
        }
      }
    })

    // 点击遮罩
    function handleMaskClick(e) {
      if (maskClosable && onClose) onClose()
      e.stopPropagation()
    }

    // 箭头颜色: 根据style中的backgroundColor和borderColor
    let arrowStyle = null
    let arrowOuterStyle = null
    let backgroundColor = modalStyle?.backgroundColor
    let borderColor = modalStyle?.borderColor
    // 从下往上弹
    if (position.indexOf('bottom') === 0) {
      arrowStyle = backgroundColor
        ? {
            borderTopColor: backgroundColor
          }
        : null
      arrowOuterStyle = borderColor
        ? {
            borderTopColor: borderColor
          }
        : null
    }
    // 从上往下弹
    else {
      arrowStyle = backgroundColor
        ? {
            borderBottomColor: backgroundColor
          }
        : null
      arrowOuterStyle = borderColor
        ? {
            borderBottomColor: borderColor
          }
        : null
    }

    return createPortal(
      <div
        ref={maskRef}
        // Style
        style={maskStyle}
        className={DOMUtil.classNames(
          'mask lyrixi-tooltip-mask',
          maskClassName,
          open ? 'lyrixi-active' : ''
        )}
        // Events
        onClick={handleMaskClick}
      >
        <div
          ref={modalRef}
          // Style
          style={modalStyle}
          className={DOMUtil.classNames(
            'lyrixi-modal-animation lyrixi-tooltip tooltip-bottom',
            position,
            modalClassName,
            open ? 'lyrixi-active' : ''
          )}
          data-animation={dataAnimation}
        >
          {/* Element: Content */}
          <div className="lyrixi-tooltip-content">{children}</div>

          {/* Element: Arrow Outer */}
          <div className="lyrixi-tooltip-arrow-outer" style={arrowOuterStyle}></div>

          {/* Element: Arrow */}
          <div className="lyrixi-tooltip-arrow" style={arrowStyle}></div>
        </div>
      </div>,
      portal || document.getElementById('root') || document.body
    )
  }
)

export default Popup
