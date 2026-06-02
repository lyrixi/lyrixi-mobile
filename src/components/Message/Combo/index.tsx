import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'

import Modal from './../Modal'

import type { MessageComboProps, MessageComboRef } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const MessageCombo = forwardRef<MessageComboRef, MessageComboProps>(
  (
    {
      // Events
      onOpen,
      onClose,
      // Modal
      // Modal: Elements
      portal,
      // Modal: Style
      maskClassName,
      maskStyle,
      // Modal: Status
      maskClosable = true,
      // Combo
      // Combo: Elements
      iconRender,
      // Modal
      // Modal: Elements
      title,
      // Combo
      // Combo: Style
      titleClassName,
      titleStyle,
      // Combo: Value & Display Value
      content,
      // Combo: Style
      contentClassName,
      contentStyle,
      footerClassName,
      footerStyle,
      // Combo: Value & Display Value
      buttonsLayout = 'horizontal',
      buttons,
      // Modal
      // Modal: Status
      safeArea = false,
      // Combo
      // Combo: Style
      className,
      style,
      // Combo: Elements
      children
    },
    ref
  ) => {
    const [open, setOpen] = useState<boolean | null>(null)

    const comboRef = useRef<HTMLDivElement>(null)
    const modalRef = useRef(null)

    function handleModalClose() {
      setOpen(false)
      onClose?.()
    }

    function handleModalOpen() {
      setOpen(true)
      onOpen?.()
    }

    useImperativeHandle(ref, () => {
      return {
        element: comboRef.current,
        getElement: () => comboRef.current,
        ...((modalRef.current as object | null) ?? {}),
        close: handleModalClose,
        open: handleModalOpen
      }
    })

    return (
      <>
        <div
          ref={comboRef}
          style={style}
          className={DOMUtil.classNames('lyrixi-message-combo', className)}
          onClick={handleModalOpen}
        >
          {children}
        </div>
        <Modal
          ref={modalRef}
          safeArea={safeArea}
          portal={portal}
          open={open ?? false}
          maskClosable={maskClosable}
          maskClassName={maskClassName}
          maskStyle={maskStyle}
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
          onClose={handleModalClose}
        />
      </>
    )
  }
)

export default MessageCombo
