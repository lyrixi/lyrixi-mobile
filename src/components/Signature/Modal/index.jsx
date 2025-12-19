import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import { createPortal } from 'react-dom'
import Main from './../Main'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Page from './../../Page'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Page } from 'lyrixi-mobile'
测试使用-end */

// Modal
const Modal = forwardRef(
  (
    {
      // Value & Display Value
      value,

      // Status
      open,

      // Style
      modalClassName,
      modalStyle,

      // Element
      portal,
      mainProps,
      color, // 绘画配置: 画笔颜色
      backgroundColor, // 绘画配置: 背景颜色

      // Events
      onChange,
      onOpen,
      onClose
    },
    ref
  ) => {
    // Expose
    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        modalElement: modalRef?.current?.element || modalRef?.current,
        getModalElement: modalRef?.current?.getElement
          ? modalRef?.current?.getElement
          : () => modalRef.current
      }
    })

    return createPortal(
      <Page
        ref={modalRef}
        // Style
        style={modalStyle}
        className={DOMUtil.classNames(
          'lyrixi-signature-modal',
          modalClassName,
          open === true ? '' : 'lyrixi-hide'
        )}
      >
        {/* Element: Main */}
        {open && (
          <Main
            // Value & Display Value
            value={value}
            // Element
            {...(mainProps || {})}
            color={color} // 绘画配置: 画笔颜色
            backgroundColor={backgroundColor} // 绘画配置: 背景颜色
            // Events
            onChange={onChange}
            onCancel={() => {
              onClose && onClose()
            }}
          />
        )}
      </Page>,
      portal || document.getElementById('root') || document.body
    )
  }
)

export default Modal
