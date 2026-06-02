import React, { useEffect, forwardRef, useState, useRef, useImperativeHandle } from 'react'
import Modal from './../Modal'
import Combo from './../../Combo'

import type { ActionSheetComboHandle, ActionSheetComboProps, ActionSheetItem } from './../types'

// 内库使用-start
import type { ComboRef } from './../../Combo/types'
import type { InputSelectRef, InputSelectValue } from './../../Input/types'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { Input } from 'lyrixi-mobile'
测试使用-end */

// 卡片选择
const ActionSheetCombo = forwardRef<ActionSheetComboHandle, ActionSheetComboProps>(
  (
    {
      // Combo
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
      comboRender,
      children,
      leftIconNode,
      rightIconNode,
      clearRender,

      // Modal
      list,
      maskClosable,
      safeArea,
      modalStyle,
      modalClassName,
      maskStyle,
      maskClassName,
      portal,
      title,
      cancelNode,
      cancelVisible,
      itemRender,

      // Events
      onBeforeOpen,
      onOpen,
      onClose,
      onClick,
      onChange
    },
    ref
  ) => {
    const [open, setOpen] = useState<boolean | null>(null)

    const comboRef = useRef<ComboRef | null>(null)

    useEffect(() => {
      if (open === null) return
      if (open) {
        onOpen?.()
      } else {
        onClose?.()
      }
      // eslint-disable-next-line
    }, [open])

    useImperativeHandle(ref, () => ({
      close: () => setOpen(false),
      open: () => setOpen(true)
    }))

    async function handleOpen() {
      if (typeof onBeforeOpen === 'function') {
        const goOn = await onBeforeOpen()
        if (goOn === false) return
      }

      // 如果没有 list，则不打开
      if (!Array.isArray(list) || !list.length) {
        return
      }
      onClick?.()
      setOpen(true)
    }

    function handleClose() {
      setOpen(false)
    }

    function handleChange(newValue: ActionSheetItem | null) {
      if (onChange) {
        onChange(newValue)
      }
      setOpen(false)
    }

    // 获取 Combo 节点
    function renderCombo() {
      if (typeof comboRender === 'function') {
        return comboRender({
          comboRef,
          open: open ?? false,
          onClick: handleOpen
        })
      }

      // comboChildren
      if (children) {
        return (
          <Combo ref={comboRef} style={style} className={className} onClick={handleOpen}>
            {children}
          </Combo>
        )
      }

      // 默认使用 Input.Select
      return (
        <Input.Select
          ref={comboRef as React.Ref<InputSelectRef>}
          // Combo: Value & Display Value
          value={value as unknown as InputSelectValue}
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
          // Combo: Elements
          leftIconNode={leftIconNode}
          rightIconNode={rightIconNode}
          clearRender={clearRender}
          // Events
          onChange={
            onChange
              ? (v: unknown) => {
                  onChange(v as ActionSheetItem | null)
                }
              : undefined
          }
          onClick={handleOpen}
        />
      )
    }

    return (
      <>
        {renderCombo()}
        <Modal
          // Modal: Value & Display Value
          value={value}
          list={list}
          // Modal: Status
          open={open ?? false}
          maskClosable={maskClosable}
          allowClear={allowClear}
          // Modal: Elements
          portal={portal}
          title={title}
          cancelNode={cancelNode}
          cancelVisible={cancelVisible}
          itemRender={itemRender}
          // Modal: Style
          safeArea={safeArea}
          modalStyle={modalStyle}
          modalClassName={modalClassName}
          maskStyle={maskStyle}
          maskClassName={maskClassName}
          // Events
          onClose={handleClose}
          onChange={handleChange}
        />
      </>
    )
  }
)

export default ActionSheetCombo
