import React, { forwardRef } from 'react'
import Modal from '../Modal'
import NavBar from './NavBar'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// NavBarModal
const NavBarModal = forwardRef(
  (
    {
      // Status
      open,
      maskClosable,

      // Style
      safeArea,
      navBarStyle,
      navBarClassName,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Elements
      portal,
      title,
      okNode,
      okVisible,
      okPosition,
      cancelNode,
      cancelVisible,
      cancelPosition,
      children,

      // Events
      onCancel,
      onOk,
      onClose
    },
    ref
  ) => {
    // 事件
    function handleCancelClick(e) {
      e.stopPropagation()

      onCancel && onCancel()
      onClose && onClose()
    }

    async function handleOkClick(e) {
      e.stopPropagation()
      if (onOk) {
        let goOn = await onOk()
        if (goOn === false) return
      }
      onClose?.()
    }

    return (
      <Modal
        ref={ref}
        safeArea={safeArea}
        portal={portal}
        open={open}
        animation={'slideUp'}
        // Style
        maskClosable={maskClosable}
        maskClassName={DOMUtil.classNames('lyrixi-navbarModal-mask', maskClassName)}
        maskStyle={maskStyle}
        modalClassName={DOMUtil.classNames('lyrixi-navbarModal', modalClassName)}
        modalStyle={modalStyle}
        // Events
        onClose={onClose}
      >
        <NavBar
          // Style
          style={navBarStyle}
          className={navBarClassName}
          // Elements
          title={title}
          okNode={okNode}
          cancelNode={cancelNode}
          okVisible={okVisible}
          okPosition={okPosition}
          cancelVisible={cancelVisible}
          cancelPosition={cancelPosition}
          // Events
          onOk={handleOkClick}
          onCancel={handleCancelClick}
        />

        {/* 主体 */}
        {children}
      </Modal>
    )
  }
)

export default NavBarModal
