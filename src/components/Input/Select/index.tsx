import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getDisplayValue from './formatter'

import InputText from './../Text'

import InputAutoSize from './../AutoSize'
import IconRightArrow from './../Icon/RightArrow'
import IconClear from './../Icon/Clear'
import Tags from './Tags'

import type { ComboProps, ComboRef } from './types'
import type { InputTextProps, InputTextRef } from './../Text/types'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

// (内部组件, 不对外开放)仅渲染Input, 用于列表相关选择控件的基础组件, 不可单独使用
const Combo = forwardRef<ComboRef, ComboProps>(
  (
    {
      // Value & Display Value
      value,
      placeholder,
      autoSize,
      mode,

      // Status
      readOnly,
      disabled,
      allowClear,

      // Style
      style,
      className,

      // Element
      formatter,
      separator,
      leftIconNode,
      rightIconNode,
      clearRender: customClearRender,

      // Events
      onChange,
      onClick
    },
    ref
  ) => {
    // 显示文本格式化
    let displayFormatter = typeof formatter !== 'function' ? getDisplayValue : formatter
    let displayValue = displayFormatter(value, { separator })

    // Expose methods
    const comboRef = useRef<InputTextRef>(null)
    useImperativeHandle(ref, () => {
      return {
        // 显示文本
        displayValue: displayValue,
        getDisplayValue: (_newValue?: unknown) => {
          return displayValue
        },
        element: comboRef?.current?.getElement ? comboRef.current.getElement() : null,
        getElement: () => {
          // div
          let element: HTMLElement | null = null
          // Input.Text
          if (comboRef?.current?.getElement) {
            element = comboRef.current.getElement()
          }
          return element
        }
      }
    })

    // 点击文本框
    function handleInputClick(e: React.MouseEvent<HTMLDivElement>) {
      e.stopPropagation()
      if (readOnly || disabled) return
      onClick && onClick(e)
    }

    // 渲染清空按钮
    function clearRender({ clearable, onClear }: { clearable: boolean; onClear: (e?: React.MouseEvent | React.TouchEvent) => void }): React.ReactNode {
      // 只读不显示清空按钮
      if (readOnly || disabled) {
        return null
      }

      // 自定义清空按钮
      if (typeof customClearRender === 'function') {
        return customClearRender({ clearable, onClear })
      }

      return ObjectUtil.isEmpty(value) || !allowClear ? (
        <IconRightArrow />
      ) : (
        <IconClear onClick={onClear as React.MouseEventHandler<HTMLElement>} />
      )
    }

    // 文本框
    let InputNode: typeof InputText = InputText
    if (autoSize) {
      InputNode = InputAutoSize
    }

    if (mode === 'tags') {
      return (
        <Tags
          // Value & Display Value
          value={value as Parameters<typeof Tags>[0]['value']}
          placeholder={placeholder}
          separator={separator}
          // Status
          readOnly={readOnly}
          disabled={disabled}
          allowClear={allowClear}
          // Style
          style={style}
          className={className}
          // Element
          leftIconNode={leftIconNode}
          rightIconNode={rightIconNode}
          clearRender={clearRender}
          // Events
          onAdd={handleInputClick}
          onEdit={handleInputClick as unknown as Parameters<typeof Tags>[0]['onEdit']}
          onChange={onChange as Parameters<typeof Tags>[0]['onChange']}
        />
      )
    }

    return (
      <InputNode
        ref={comboRef}
        // Value & Display Value
        value={displayValue}
        placeholder={placeholder}
        // Status
        readOnly
        disabled={disabled}
        allowClear={allowClear}
        // Style
        style={style}
        className={className}
        // Element
        leftIconNode={leftIconNode}
        rightIconNode={rightIconNode}
        clearRender={clearRender}
        // Events
        onClick={handleInputClick}
        onChange={onChange as InputTextProps['onChange']} // 强制只读的控件, 只会清空时触发
      />
    )
  }
)
export type { ComboProps, ComboRef } from './types'

export default Combo
