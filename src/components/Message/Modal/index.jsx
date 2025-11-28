import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Modal from './../../Modal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
测试使用-end */

// 对话框
const Message = forwardRef(
  (
    {
      // Status
      open = false,
      maskClosable = true,

      // Style
      safeArea,
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
  ) => {
    const modalRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return modalRef.current
    })

    return (
      <Modal
        ref={ref}
        // Status
        open={open}
        maskClosable={maskClosable}
        // Style
        portal={portal}
        safeArea={safeArea}
        animation="zoom"
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-message-modal', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={DOMUtil.classNames('lyrixi-message-mask', maskClassName)}
        onClose={onClose}
      >
        {children}
      </Modal>
    )
  }
)

export default Message
