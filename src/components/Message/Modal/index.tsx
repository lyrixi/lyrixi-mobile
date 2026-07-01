import React, { useImperativeHandle, useRef, forwardRef } from 'react'

import Main from '../Main'

import type { MessageModalProps, MessageModalRef } from '../types'
import type { MessageComboButton } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Modal from './../../Modal'
import type { ModalRef } from './../../Modal/types'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
测试使用-end */

const MessageModal = forwardRef<MessageModalRef, MessageModalProps>(
  (
    {
      // Status
      open = false,
      maskClosable = true,
      safeArea,
      // Style
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      // Elements
      portal,
      children,
      // Events
      onClose,
      // Elements
      iconSvg,
      iconSize,
      iconColor,
      iconRender,
      title,
      // Style
      titleClassName,
      titleStyle,
      // Value & Display Value
      content,
      // Style
      contentClassName,
      contentStyle,
      footerClassName,
      footerStyle,
      // Value & Display Value
      buttonsLayout,
      buttons
    },
    ref
  ) => {
    const modalRef = useRef<ModalRef>(null)

    useImperativeHandle(ref, () => {
      return modalRef.current!
    })

    async function handleButtonClick(
      button: MessageComboButton,
      e: React.MouseEvent<HTMLDivElement>
    ) {
      const result = button.onClick ? await button.onClick(e) : undefined
      if (result !== false) {
        onClose?.()
      }
    }

    const hasBodyProps =
      typeof iconRender === 'function' ||
      iconSvg ||
      title ||
      content ||
      (Array.isArray(buttons) && buttons.length > 0)

    return (
      <Modal
        ref={modalRef}
        open={open}
        maskClosable={maskClosable}
        portal={portal}
        safeArea={safeArea}
        animation="zoom"
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-modal-message', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={DOMUtil.classNames('lyrixi-mask-message', maskClassName)}
        onClose={onClose}
      >
        {children ?? (hasBodyProps ? (
          <Main
            iconSvg={iconSvg}
            iconSize={iconSize}
            iconColor={iconColor}
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
            onButtonClick={handleButtonClick}
          />
        ) : null)}
      </Modal>
    )
  }
)

export default MessageModal
