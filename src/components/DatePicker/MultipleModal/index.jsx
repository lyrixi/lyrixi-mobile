import React, { useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react'
import { getTitle } from './../utils'
import formatValue from './../MultipleMain/formatValue'
import MultipleMain from './../MultipleMain'

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
      allowClear,

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
      setCurrentValue(formatValue(value || defaultPickerValue))
    }, [value, defaultPickerValue])

    async function handleOk() {
      if (onOk) {
        let goOn = await onOk(currentValue)
        if (goOn === false) return false
        if (goOn instanceof Array) {
          currentValue = goOn
        }
      }

      // 触发 onChange
      onChange?.(currentValue)
      onClose?.()
    }

    function handleChange(newValue) {
      setCurrentValue(newValue)
    }

    // 自定义标题节点
    let titleNode = titleRender?.(currentValue, type) || null

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
        <MultipleMain
          ref={mainRef}
          open={open}
          value={currentValue}
          allowClear={allowClear}
          onChange={handleChange}
          type={type}
          min={min}
          max={max}
          hourStep={hourStep}
          minuteStep={minuteStep}
        />
      </NavBarModal>
    )
  }
)

export default Modal
