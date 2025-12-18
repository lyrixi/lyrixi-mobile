import React, { useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react'
import { getTitle } from './../utils'
import formatValue from './formatValue'
import Main from './../Main'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal as BaseModal } from 'lyrixi-mobile'
const NavBarModal = BaseModal.NavBarModal
测试使用-end */

// Modal
const Modal = forwardRef(
  (
    {
      // Value & Display Value
      value,
      type = 'date',
      min,
      max,
      hourStep,
      minuteStep,

      // Status
      open,
      maskClosable,

      // Style
      safeArea,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Elements
      portal,
      titleRender,
      okNode,
      cancelNode,
      okVisible,
      cancelVisible,

      // Events
      onClose,
      onOpen,
      onChange,
      onOk
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

    // 同步外部value到内部currentValue
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

    // 自定义标题节点
    let titleNode = titleRender?.(currentValue, { type }) || null

    return (
      <NavBarModal
        ref={modalRef}
        // Status
        open={open}
        maskClosable={maskClosable}
        // Style
        safeArea={safeArea}
        modalStyle={modalStyle}
        modalClassName={DOMUtil.classNames('picker-modal', modalClassName)}
        maskStyle={maskStyle}
        maskClassName={maskClassName}
        // Elements
        portal={portal}
        title={titleNode || getTitle(currentValue, { type })}
        okNode={okNode}
        cancelNode={cancelNode}
        okVisible={true}
        cancelVisible={cancelVisible}
        // Events
        onClose={onClose}
        onOpen={onOpen}
        onOk={handleOk}
      >
        <Main
          ref={mainRef}
          // Modal: Status
          open={open}
          // Value & Display Value
          value={currentValue}
          // Status
          type={type}
          min={min}
          max={max}
          hourStep={hourStep}
          minuteStep={minuteStep}
          // Events
          onChange={handleChange}
        />
      </NavBarModal>
    )
  }
)

export default Modal
