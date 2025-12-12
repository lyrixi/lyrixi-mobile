import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'
import validateMaxMin from '../utils/validateMaxMin'
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
      defaultPickerValue,
      hourStep,
      minuteStep,

      // Status
      open,
      maskClosable,
      multiple,

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
      onOpen,
      onChange,
      onBeforeOk
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
    React.useEffect(() => {
      if (open) {
        setCurrentValue(formatValue(value || defaultPickerValue))
      }
    }, [open, value, defaultPickerValue])

    async function handleOk() {
      // 触发 onBeforeOk
      if (onBeforeOk) {
        let goOn = await onBeforeOk(currentValue)
        if (goOn === false) return
        if (goOn instanceof Date) {
          currentValue = goOn
        }
      }
      onChange?.(currentValue)
      onClose && onClose()
    }

    function handleChange(newValue) {
      setCurrentValue(newValue)
      // 单选时立即关闭
      if (multiple === false) {
        if (onChange) {
          onChange(newValue)
        }
        onClose && onClose()
      }
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
        modalClassName={DOMUtil.classNames('picker-modal', modalClassName)}
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
