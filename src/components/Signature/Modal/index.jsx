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
      portal,
      open,
      value,
      onChange,
      onOpen,
      onClose,
      modalClassName,
      modalStyle,

      // 绘画配置
      color,
      backgroundColor,
      mainProps
    },
    ref
  ) => {
    // Expose
    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        modalDOM: modalRef?.current?.rootDOM || modalRef?.current,
        getModalDOM: modalRef?.current?.getRootDOM
          ? modalRef?.current?.getRootDOM
          : () => modalRef.current
      }
    })

    return createPortal(
      <Page
        ref={modalRef}
        className={DOMUtil.classNames(
          'lyrixi-signature-modal',
          modalClassName,
          open === true ? '' : 'lyrixi-hide'
        )}
        style={modalStyle}
      >
        {open && (
          <Main
            {...(mainProps || {})}
            value={value}
            onChange={onChange}
            onCancel={() => {
              onClose && onClose()
            }}
            // 绘画配置
            color={color}
            backgroundColor={backgroundColor}
          />
        )}
      </Page>,
      portal || document.getElementById('root') || document.body
    )
  }
)

export default Modal
