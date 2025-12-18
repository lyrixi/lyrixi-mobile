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
      onChange
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = useState(value)
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
      if (onChange) {
        let goOn = await onChange(currentValue)
        if (goOn === false) return
      }
      onClose && onClose()
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
        <Main
          ref={mainRef}
          open={open}
          value={currentValue}
          allowClear={allowClear}
          onChange={handleChange}
          list={list}
        />
      </NavBarModal>
    )
  }
)

export default Modal
