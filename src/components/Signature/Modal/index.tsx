import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import { createPortal } from 'react-dom'


import Main from './../Main'

import type { SignatureModalProps, SignatureModalRef } from '../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Page from './../../Page'
import type { PageRef } from './../../Page/types'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Page, type PageRef } from 'lyrixi-mobile'
测试使用-end */

// Modal
const Modal = forwardRef<SignatureModalRef, SignatureModalProps>(
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
      color, // 绘画配置: 画笔颜色
      backgroundColor, // 绘画配置: 背景颜色

      // Events
      onChange,
      onClose
    },
    ref
  ) => {
    // Expose
    const modalRef = useRef<PageRef | null>(null)
    useImperativeHandle(ref, () => {
      return {
        modalElement: modalRef?.current?.element || null,
        getModalElement: modalRef?.current?.getElement
          ? modalRef.current.getElement
          : () => null
      }
    })

    return createPortal(
      <Page
        ref={modalRef}
        // Style
        style={modalStyle}
        className={DOMUtil.classNames(
          'lyrixi-modal-signature',
          modalClassName,
          open === true ? '' : 'lyrixi-hide'
        )}
      >
        {/* Element: Main */}
        {open && (
          <Main
            // Style
            color={color} // 绘画配置: 画笔颜色
            backgroundColor={backgroundColor} // 绘画配置: 背景颜色
            // Events
            onChange={onChange}
            onCancel={() => {
              onClose?.()
            }}
          />
        )}
      </Page>,
      portal || document.getElementById('root') || document.body
    )
  }
)
export type { SignatureModalProps, SignatureModalRef } from '../types'

export default Modal
