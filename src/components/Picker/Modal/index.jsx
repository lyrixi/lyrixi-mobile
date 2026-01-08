import React, { useEffect, forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Main from './../Main'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../../components/Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

// Modal
const Modal = forwardRef(
  (
    {
      // Value & Display Value
      value,
      list,

      // Status
      open,
      maskClosable,
      allowClear,

      // Style
      safeArea,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Elements
      portal,
      title,
      okNode,
      cancelNode,
      okVisible,
      cancelVisible,

      // Events
      onClose,
      onOk,
      onChange
    },
    ref
  ) => {
    let [currentValue, setCurrentValue] = useState(value)
    const modalRef = useRef(null)
    const mainRef = useRef(null)

    useImperativeHandle(ref, () => {
      return {
        ...modalRef.current,
        ...mainRef.current
      }
    })

    // 同步外部value到内部
    useEffect(() => {
      setCurrentValue(value)
    }, [value])

    async function handleOk() {
      // 触发 onOk
      if (onOk) {
        let goOn = await onOk(currentValue)
        if (goOn === false) return false
        if (goOn instanceof Date) {
          currentValue = goOn
        }
      }

      onChange?.(currentValue)
      onClose?.()
    }

    function handleChange(newValue) {
      setCurrentValue(newValue)
    }

    return (
      <NavBarModal
        ref={modalRef}
        // Status
        open={open}
        maskClosable={maskClosable}
        // Style
        safeArea={safeArea}
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('lyrixi-picker-modal', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        // Elements
        portal={portal}
        title={title}
        okNode={okNode}
        cancelNode={cancelNode}
        okVisible={true}
        cancelVisible={cancelVisible}
        // Events
        onClose={onClose}
        onOk={handleOk}
      >
        {/* 弹窗打开时, 再渲染主页面, 主要为了重置鼠标拖动标识 */}
        <Main
          ref={mainRef}
          // Modal: Status
          open={open}
          // Value & Display Value
          value={currentValue}
          list={list}
          // Status
          allowClear={allowClear}
          // Events
          onChange={handleChange}
        />
      </NavBarModal>
    )
  }
)

export default Modal
