import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { formatType } from './../DistrictMain/utils'
import DistrictModal from './../DistrictModal'
import type { CascaderNode } from './../types'
import type { InputSelectComboRef } from './../../Input/types'

import type { CascaderDistrictComboProps, CascaderDistrictComboRef } from '../types'

// 内库使用-start
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-mobile'
测试使用-end */

// 级联选择
const DistrictCombo = forwardRef<CascaderDistrictComboRef, CascaderDistrictComboProps>(
  (
    {
      value,
      placeholder,
      autoSize,
      mode,
      readOnly,
      disabled,
      allowClear,
      style,
      className,
      formatter,
      separator,
      leftIconNode,
      rightIconNode,
      clearRender,
      type: typeProp = 'street',
      loadCountries,
      loadCountryRegions,
      loadStreets,
      min = '',
      maskClosable,
      listStyle,
      listClassName,
      itemStyle,
      itemClassName,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      portal,
      title,
      okNode,
      cancelNode,
      cancelVisible,
      searchVisible,
      onChange,
      onBeforeOpen
    },
    ref
  ) => {
    const districtType = formatType(typeProp)

    const [open, setOpen] = useState(false)
    const comboRef = useRef<InputSelectComboRef | null>(null)
    const modalRef = useRef<Record<string, unknown> | null>(null)

    useImperativeHandle(ref, () => {
      const c = (comboRef.current as Record<string, unknown> | null) ?? {}
      const m = (modalRef.current as Record<string, unknown> | null) ?? {}
      return {
        ...c,
        ...m,
        close: () => setOpen(false),
        open: () => setOpen(true)
      } as CascaderDistrictComboRef
    })

    async function handleOpen() {
      if (typeof onBeforeOpen === 'function') {
        const goOn = await onBeforeOpen()
        if (goOn === false) {
          return
        }
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
          value={value}
          placeholder={placeholder}
          autoSize={autoSize}
          mode={mode}
          readOnly={readOnly}
          disabled={disabled}
          allowClear={allowClear}
          style={style}
          className={className}
          formatter={formatter}
          separator={separator}
          leftIconNode={leftIconNode}
          rightIconNode={rightIconNode}
          clearRender={clearRender}
          onChange={onChange}
          onClick={handleOpen}
        />
        <DistrictModal
          ref={modalRef}
          value={value as CascaderNode[] | null}
          type={districtType}
          loadCountries={loadCountries}
          loadCountryRegions={loadCountryRegions}
          loadStreets={loadStreets}
          open={open}
          min={min}
          maskClosable={maskClosable}
          listStyle={listStyle}
          listClassName={listClassName}
          itemStyle={itemStyle}
          itemClassName={itemClassName}
          modalStyle={modalStyle}
          modalClassName={modalClassName}
          maskStyle={maskStyle}
          maskClassName={maskClassName}
          portal={portal}
          title={title}
          okNode={okNode}
          cancelNode={cancelNode}
          cancelVisible={cancelVisible}
          searchVisible={searchVisible}
          onChange={onChange as (v: CascaderNode[]) => void}
          onClose={handleClose}
        />
      </>
    )
  }
)

export default DistrictCombo
