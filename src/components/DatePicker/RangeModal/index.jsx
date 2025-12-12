import React, { useImperativeHandle, useRef, forwardRef, useState } from 'react'
import getDefaultRanges from './../RangeMain/getDefaultRanges'
import updateRangeValue from './../RangeMain/updateRangeValue'
import formatValue from './../RangeMain/formatValue'
import validateRange from './validateRange'
import RangeMain from './../RangeMain'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import NavBarModal from './../../Modal/NavBarModal'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Modal } from 'lyrixi-mobile'
const NavBarModal = Modal.NavBarModal
测试使用-end */

// RangeModal
const RangeModal = forwardRef(
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
      diff,
      disabledStart,
      disabledEnd,
      rangeId,
      ranges,
      titles,

      // Status
      open,
      maskClosable,
      allowClear,
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
    if (ranges === undefined) {
      // eslint-disable-next-line
      ranges = getDefaultRanges()
    }

    let [currentValue, setCurrentValue] = useState(value)
    const [currentRangeId, setCurrentRangeId] = useState(rangeId)
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
        setCurrentRangeId(rangeId)
      }
    }, [open, value, defaultPickerValue, rangeId])

    async function handleOk() {
      if (onBeforeOk) {
        let goOn = await onBeforeOk(currentValue)
        if (goOn === false) return
        if (goOn instanceof Array) {
          currentValue = goOn
        }
      }

      // 触发 onChange
      onChange?.(currentValue, { rangeId: currentRangeId, ranges })
      onClose && onClose()
    }

    function handleChange(newValue, { rangeId: newRangeId } = {}) {
      setCurrentValue(newValue)
      setCurrentRangeId(newRangeId)
      // 单选时立即关闭
      if (multiple === false) {
        if (onChange) {
          onChange(newValue, { rangeId: newRangeId, ranges })
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
        // Element
        portal={portal}
        title={title}
        okNode={okNode}
        cancelNode={cancelNode}
        okVisible={okVisible !== undefined ? okVisible : multiple !== false}
        cancelVisible={cancelVisible}
        // Events
        onClose={onClose}
        onOpen={onOpen}
        onOk={handleOk}
      >
        <RangeMain
          ref={mainRef}
          open={open}
          value={currentValue}
          allowClear={allowClear}
          multiple={multiple}
          onChange={handleChange}
          type={type}
          min={min}
          max={max}
          hourStep={hourStep}
          minuteStep={minuteStep}
          disabledStart={disabledStart}
          disabledEnd={disabledEnd}
          titles={titles}
          ranges={ranges}
          portal={modalRef?.current?.rootDOM}
          rangeId={currentRangeId}
        />
      </NavBarModal>
    )
  }
)

export default RangeModal
