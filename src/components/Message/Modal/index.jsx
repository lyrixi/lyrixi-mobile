import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import { createPortal } from 'react-dom'

// 内库使用-start
import getClassNameByAnimation from './../../Modal/api/getClassNameByAnimation'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const getClassNameByAnimation = Modal.getClassNameByAnimation
测试使用-end */

// 对话框
const Message = forwardRef(
  (
    {
      // Modal
      portal,
      maskClosable,
      maskClassName,
      maskStyle,
      modalClassName,
      modalStyle,
      open,
      onOpen,
      onClose,
      animation = 'zoom',
      children,
      ...props
    },
    ref
  ) => {
    const maskRef = useRef(null)
    const modalRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        maskDOM: maskRef.current,
        getMaskDOM: () => maskRef.current,
        modalDOM: modalRef.current,
        getModalDOM: () => modalRef.current
      }
    })

    // 点击遮罩
    function handleMaskClick(e) {
      if (maskClosable && onClose) onClose()
      e.stopPropagation()
    }

    // 点击模态框
    function handleModalClick(e) {
      e.stopPropagation()
    }

    // 获取激活状态样式
    function getActiveClass() {
      return open ? ' active' : ''
    }

    return createPortal(
      <div
        className={DOMUtil.classNames('mask message-mask', maskClassName, getActiveClass())}
        style={maskStyle}
        onClick={handleMaskClick}
        ref={maskRef}
      >
        <section
          {...props}
          className={DOMUtil.classNames(
            'lyrixi-modal-animation lyrixi-message-modal',
            modalClassName,
            getClassNameByAnimation(animation),
            getActiveClass()
          )}
          style={modalStyle}
          data-animation={animation}
          ref={modalRef}
          onClick={handleModalClick}
        >
          {children}
        </section>
      </div>,
      portal || document.getElementById('root') || document.body
    )
  }
)

export default Message
