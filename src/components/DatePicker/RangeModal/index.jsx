import React, { useEffect, useImperativeHandle, useRef, forwardRef, useState } from 'react'
import { getTitle, getDefaultRanges, updateRangeValue } from './../utils'
import formatValue from './../RangeMain/formatValue'
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
      defaultPickerValue,
      autoSwapValue = true,
      type = 'date',
      min,
      max,
      hourStep,
      minuteStep,
      startDisabled,
      endDisabled,
      rangeId,
      ranges,
      titles,

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
      separator,
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
    useEffect(() => {
      setCurrentValue(formatValue(value || defaultPickerValue))
      setCurrentRangeId(rangeId)
    }, [value, defaultPickerValue, rangeId])

    async function handleOk() {
      if (onOk) {
        let goOn = await onOk(currentValue)
        if (goOn === false) return false
        if (goOn instanceof Array) {
          currentValue = goOn
        }
      }

      // 触发 onChange
      onChange?.(updateRangeValue(currentValue, type, { autoSwapValue }), {
        rangeId: currentRangeId,
        ranges
      })
      onClose?.()
    }

    function handleChange(newValue, { rangeId: newRangeId } = {}) {
      setCurrentValue(newValue)
      setCurrentRangeId(newRangeId)
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
        // Element
        portal={portal}
        title={titleNode || getTitle(currentValue, { type, separator })}
        okNode={okNode}
        cancelNode={cancelNode}
        okVisible={true}
        cancelVisible={cancelVisible}
        // Events
        onClose={onClose}
        onOpen={onOpen}
        onOk={handleOk}
      >
        <RangeMain
          ref={mainRef}
          // Modal: Status
          open={open}
          // Value & display value
          value={currentValue}
          autoSwapValue={autoSwapValue}
          rangeId={currentRangeId}
          ranges={ranges}
          // Status
          type={type}
          allowClear={allowClear}
          min={min}
          max={max}
          hourStep={hourStep}
          minuteStep={minuteStep}
          startDisabled={startDisabled}
          endDisabled={endDisabled}
          // Elements
          titles={titles}
          portal={modalRef?.current?.rootDOM}
          // Events
          onChange={handleChange}
        />
      </NavBarModal>
    )
  }
)

export default RangeModal
