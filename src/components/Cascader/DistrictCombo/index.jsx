import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import _ from 'lodash'
import { formatType } from './../DistrictMain/utils'
import DistrictModal from './../DistrictModal'

// 内库使用-start
import ArrayUtil from './../../../utils/ArrayUtil'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { ArrayUtil, Input } from 'lyrixi-mobile'
测试使用-end */

// 级联选择
const DistrictCombo = forwardRef(
  (
    {
      // Combo
      // Combo: Value & Display Value
      value,
      placeholder,
      formatter,
      autoSize,
      separator,
      mode,
      // Combo: Status
      readOnly,
      disabled,
      allowClear,
      // Combo: Style
      style,
      className,
      // Combo: Element
      leftIconNode,
      rightIconNode,

      // Modal
      // Modal: Value & Display Value
      type = 'street', // 'country', 'province', 'city', 'district', 'street'
      loadCountries,
      loadCountryRegions,
      loadStreets,
      // Modal: Status
      min = '',
      maskClosable,

      // Modal: Style
      listStyle,
      listClassName,
      itemStyle,
      itemClassName,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      // Modal: Elements
      portal,
      title,
      okNode,
      cancelNode,
      cancelVisible,
      searchVisible,

      // Events
      onChange,
      onBeforeOpen
    },
    ref
  ) => {
    // eslint-disable-next-line
    type = formatType(type)

    const [open, setOpen] = useState(false)
    // editableOptions需要根据list计算value的type, loadList后才能计算value的type
    const listRef = useRef(null)
    const comboRef = useRef(null)
    const modalRef = useRef(null)

    // Expose api
    useImperativeHandle(ref, () => {
      return {
        ...comboRef.current,
        ...modalRef.current,
        close: () => setOpen(false),
        open: () => setOpen(true)
      }
    })

    async function handleOpen() {
      if (typeof onBeforeOpen === 'function') {
        let goOn = await onBeforeOpen()
        if (goOn === false) return
      }
      setOpen(true)
    }

    function handleClose() {
      setOpen(false)
    }

    return (
      <>
        <Input.Select
          ref={comboRef}
          // Combo: Value & Display Value
          value={value}
          placeholder={placeholder}
          formatter={formatter}
          autoSize={autoSize}
          separator={separator}
          mode={mode}
          // Combo: Status
          readOnly={readOnly}
          disabled={disabled}
          allowClear={allowClear}
          // Combo: Style
          style={style}
          className={className}
          // Combo: Element
          leftIconNode={leftIconNode}
          rightIconNode={rightIconNode}
          // Events
          onChange={onChange}
          onClick={handleOpen}
        />
        <DistrictModal
          ref={modalRef}
          // Modal: Value & Display Value
          value={value}
          type={type}
          loadCountries={loadCountries}
          loadCountryRegions={loadCountryRegions}
          loadStreets={loadStreets}
          // Modal: Status
          open={open}
          min={min}
          maskClosable={maskClosable}
          // Modal: Style
          listStyle={listStyle}
          listClassName={listClassName}
          itemStyle={itemStyle}
          itemClassName={itemClassName}
          className={modalClassName}
          style={modalStyle}
          maskClassName={maskClassName}
          maskStyle={maskStyle}
          // Modal: Elements
          portal={portal}
          title={title}
          okNode={okNode}
          cancelNode={cancelNode}
          cancelVisible={cancelVisible}
          searchVisible={searchVisible}
          // Modal: Events
          onChange={onChange}
          onClose={handleClose}
        />
      </>
    )
  }
)

export default DistrictCombo
