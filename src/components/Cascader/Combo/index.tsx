import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import type { CascaderNode } from './../cascaderTypes'
import CascaderModal from './../Modal'
import type { ComboProps, ComboRef } from './../../Input/Select'

import type { CascaderComboProps, CascaderComboRef } from './types'

// 内库使用-start
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-mobile'
测试使用-end */


// Cascader
const CascaderCombo = forwardRef<CascaderComboRef, CascaderComboProps>(
  (
    {
      value,
      placeholder,
      formatter,
      autoSize,
      separator,
      mode,
      readOnly,
      disabled,
      allowClear,
      style,
      className,
      leftIconNode,
      rightIconNode,
      clearRender,
      list,
      loadData,
      maskClosable,
      safeArea,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      portal,
      title,
      okNode,
      cancelNode,
      okVisible,
      cancelVisible,
      searchVisible,
      onSearch,
      onChange,
      onBeforeOpen
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)
    const comboRef = useRef<ComboRef | null>(null)
    const modalRef = useRef<Record<string, unknown> | null>(null)

    useImperativeHandle(ref, () => {
      const c = (comboRef.current as Record<string, unknown> | null) ?? {}
      const m = modalRef.current ?? {}
      return {
        ...c,
        ...m,
        close: () => setOpen(false),
        open: () => setOpen(true)
      } as CascaderComboRef
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
          formatter={formatter}
          autoSize={autoSize}
          separator={separator}
          mode={mode}
          readOnly={readOnly}
          disabled={disabled}
          allowClear={allowClear}
          style={style}
          className={className}
          leftIconNode={leftIconNode}
          rightIconNode={rightIconNode}
          clearRender={clearRender}
          onChange={onChange}
          onClick={handleOpen}
        />
        <CascaderModal
          ref={modalRef}
          value={value as CascaderNode[]}
          list={list}
          loadData={loadData}
          open={open}
          maskClosable={maskClosable}
          allowClear={allowClear}
          portal={portal}
          title={title}
          okNode={okNode}
          cancelNode={cancelNode}
          okVisible={okVisible}
          cancelVisible={cancelVisible}
          searchVisible={searchVisible}
          safeArea={safeArea}
          modalStyle={modalStyle}
          modalClassName={modalClassName}
          maskStyle={maskStyle}
          maskClassName={maskClassName}
          onSearch={onSearch}
          onClose={handleClose}
          onChange={onChange as (v: CascaderNode[]) => void}
        />
      </>
    )
  }
)

export type { CascaderComboProps, CascaderComboRef } from './types'
export default CascaderCombo
