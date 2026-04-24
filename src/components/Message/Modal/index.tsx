import React, { useImperativeHandle, useRef, forwardRef, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Modal, { type ModalRef, type ModalProps } from './../../Modal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
测试使用-end */

interface MessageModalProps {
  open?: boolean
  maskClosable?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: ModalProps['portal']
  children?: ReactNode
  onClose?: ModalProps['onClose']
}

// 对话框
const Message = forwardRef<ModalRef, MessageModalProps>(
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
    const modalRef = useRef<ModalRef>(null)

    // Expose
    useImperativeHandle(ref, () => {
      return modalRef.current!
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
        modalClassName={DOMUtil.classNames('lyrixi-modal-message', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={DOMUtil.classNames('lyrixi-mask-message', maskClassName)}
        onClose={onClose}
      >
        {children}
      </Modal>
    )
  }
)

export default Message
