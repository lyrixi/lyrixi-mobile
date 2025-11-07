import React, { forwardRef } from 'react'
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
      // 内容框
      content,
      animation,
      style,

      // Modal
      portal,
      maskClassName,
      maskStyle,

      // 显隐
      open,
      maskClosable = true,
      onOpen,
      onClose,
      children,

      // 其它属性
      className,
      ...props
    },
    ref
  ) => {
    // 构建动画
    let position = getClassNameByAnimation(animation)
    let dataAnimation = getDataAnimation(animation)

    // 点击遮罩
    function handleMaskClick(e) {
      if (maskClosable && onClose) onClose()
      e.stopPropagation()
    }

    // 箭头颜色: 根据style中的backgroundColor和borderColor
    let arrowStyle = null
    let arrowOuterStyle = null
    let backgroundColor = style?.backgroundColor
    let borderColor = style?.borderColor
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
        className={DOMUtil.classNames(
          'mask lyrixi-tooltip-mask',
          maskClassName,
          open ? 'lyrixi-active' : ''
        )}
        style={maskStyle}
        onClick={handleMaskClick}
        ref={ref}
      >
        <div
          className={DOMUtil.classNames(
            'lyrixi-modal-animation lyrixi-tooltip tooltip-bottom',
            position,
            className,
            open ? 'lyrixi-active' : ''
          )}
          style={style}
          data-animation={dataAnimation}
        >
          <div className="lyrixi-tooltip-content">{content}</div>
          <div className="lyrixi-tooltip-arrow-outer" style={arrowOuterStyle}></div>
          <div className="lyrixi-tooltip-arrow" style={arrowStyle}></div>
        </div>
      </div>,
      portal || document.getElementById('root') || document.body
    )
  }
)

export default Popup
