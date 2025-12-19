import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getDisplayValue from './formatter'

import InputText from './../Text'
import InputAutoSize from './../AutoSize'
import IconRightArrow from './../Icon/RightArrow'
import IconClear from './../Icon/Clear'
import Tags from './Tags'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

// 基础Combo: 仅渲染Input
const Combo = forwardRef(
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
    if (typeof formatter !== 'function') {
      // eslint-disable-next-line
      formatter = getDisplayValue
    }
    let displayValue = formatter(value, { separator })

    // Expose methods
    const comboRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        // 显示文本
        displayValue: displayValue,
        getDisplayValue: (newValue) => {
          return displayValue
        },
        element: comboRef?.current?.getElement ? comboRef.current.getElement() : comboRef.current,
        getElement: () => {
          // div
          let element = comboRef?.current
          // Input.Text
          if (comboRef?.current?.getElement) {
            element = comboRef.current.getElement()
          }
          return element
        }
      }
    })

    // 点击文本框
    function handleInputClick(e) {
      e.stopPropagation()
      if (readOnly || disabled) return
      onClick && onClick(e)
    }

    // 渲染清空按钮
    function clearRender({ clearable, onClear }) {
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
        <IconClear onClick={onClear} />
      )
    }

    // 文本框
    let InputNode = InputText
    if (autoSize) {
      InputNode = InputAutoSize
    }

    if (mode === 'tags') {
      return (
        <Tags
          // Value & Display Value
          value={value}
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
          onEdit={handleInputClick}
          onChange={onChange}
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
        onChange={onChange} // 强制只读的控件, 只会清空时触发
      />
    )
  }
)

export default Combo
