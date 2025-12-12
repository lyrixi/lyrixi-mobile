import React, { useEffect, useImperativeHandle, useRef, forwardRef, useState } from 'react'
import { getTitle } from './../utils'
import getDefaultRanges from './../RangeMain/getDefaultRanges'
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

      // Style
      safeArea,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,

      // Elements
      portal,
      title,
      titleRender,
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
    useEffect(() => {
      setCurrentValue(formatValue(value || defaultPickerValue))
      setCurrentRangeId(rangeId)
    }, [value, defaultPickerValue, rangeId])

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
        // Element
        portal={portal}
        title={titleNode || title || getTitle(currentValue, type)}
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
          open={open}
          value={currentValue}
          allowClear={allowClear}
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
