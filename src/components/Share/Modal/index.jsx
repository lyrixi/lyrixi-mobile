import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import Main from './../Main'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'
import BaseModal from './../../Modal'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Modal as BaseModal, SafeArea } from 'lyrixi-mobile'
测试使用-end */

const Modal = forwardRef(
  (
    {
      // Value & Display Value
      shareTo,

      // Status
      open,
      maskClosable = true,
      safeArea = true,

      // Style
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Element
      portal,

      // Events
      onClose
    },
    ref
  ) => {
    // 节点
    const modalRef = useRef(null)
    const mainRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        ...modalRef?.current,
        ...mainRef?.current
      }
    })

    return (
      <BaseModal
        ref={modalRef}
        // Status
        open={open}
        maskClosable={maskClosable}
        safeArea={safeArea}
        // Style
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-share-modal', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        animation="slideUp"
        // Element
        portal={portal}
        // Events
        onClose={onClose}
      >
        {/* Element: Title */}
        <div className="lyrixi-share-modal-title">
          {LocaleUtil.locale('分享到', 'lyrixi.share.to')}
        </div>

        {/* Element: Main */}
        <div className="lyrixi-share-modal-main">
          <Main
            ref={mainRef}
            // Value & Display Value
            shareTo={shareTo}
          />
        </div>

        {/* Element: Cancel Button */}
        <div
          className="lyrixi-share-modal-footer-button-cancel"
          // Events
          onClick={() => {
            onClose && onClose()
          }}
        >
          {LocaleUtil.locale('取消', 'lyrixi.cancel')}
        </div>
      </BaseModal>
    )
  }
)

export default Modal
