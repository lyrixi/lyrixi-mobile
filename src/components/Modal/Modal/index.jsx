import React, { useImperativeHandle, useRef, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import getClassNameByAnimation from './../api/getClassNameByAnimation'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea, Tooltip } from 'lyrixi-mobile'
测试使用-end */

const Modal = forwardRef(
  (
    {
      // Status
      open,
      maskClosable = true,

      // Style
      safeArea = true,
      animation = 'zoom', // none | slideLeft | slideRight | slideUp | slideDown | zoom | fade
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Element
      portal,
      children,

      // Events
      onClose
    },
    ref
  ) => {
    const maskRef = useRef(null)
    const modalRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        maskDOM: maskRef.current,
        getMaskDOM: () => {
          return maskRef.current
        },
        modalDOM: modalRef.current,
        getModalDOM: () => {
          return modalRef.current
        }
      }
    })

    // 构建动画
    let animationClassName = getClassNameByAnimation(animation)

    // 点击遮罩
    function handleMaskClick(e) {
      if (maskClosable) {
        onClose && onClose(e)
      }
      e.stopPropagation()
    }

    // 点击模态框
    function handleModalClick(e) {
      e.stopPropagation()
    }

    // 获取激活状态样式
    function getActiveClass() {
      return open ? 'lyrixi-active' : ''
    }

    let ModalNode = (
      <div
        data-animation={animation}
        style={maskStyle}
        className={DOMUtil.classNames('mask modal-mask', maskClassName, getActiveClass())}
        onClick={handleMaskClick}
        ref={maskRef}
      >
        <div
          className={DOMUtil.classNames(
            'lyrixi-modal-animation lyrixi-modal',
            animationClassName ? ' ' + animationClassName : '',
            modalClassName,
            getActiveClass()
          )}
          style={modalStyle}
          data-animation={animation}
          onClick={handleModalClick}
          ref={modalRef}
        >
          {children}
          {safeArea === true && <SafeArea />}
        </div>
      </div>
    )

    if (portal === null || portal === false) {
      return ModalNode
    }
    return createPortal(ModalNode, portal || document.getElementById('root') || document.body)
  }
)

export default Modal
