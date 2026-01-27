import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import Input from './../../Input'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, Input } from 'lyrixi-mobile'
测试使用-end */

const Search = (
  {
    id,
    name,

    // Value & Display Value
    value = '',
    placeholder,
    formatter,

    // Status
    readOnly,
    disabled,
    allowClear,
    autoFocus,
    autoSelect,

    // Style
    style,
    className,

    // Element
    inputRender,
    leftIconNode,
    rightIconNode,
    clearRender,

    // Validate
    precision, // 小数精度, 只有数值框才生效
    trim, // [Number框]小数位补0, true: 不补0; false: 补0。 [Text框]影响左右空格;
    max,
    min,
    maxLength,

    // input属性
    inputMode,

    // Events
    onClick,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    onPressEnter,
    onSearch
  },
  ref
) => {
  return (
    <Input.Search
      ref={ref}
      id={id}
      name={name}
      // Value & Display Value
      value={value}
      placeholder={
        placeholder || LocaleUtil.locale('搜索', 'noKey_e5f71fc31e7246dd6ccc5539570471b0')
      }
      formatter={formatter}
      // Status
      readOnly={readOnly}
      disabled={disabled}
      allowClear={allowClear}
      autoFocus={autoFocus}
      autoSelect={autoSelect}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-toolbar-search-input', className)}
      // Element
      inputRender={inputRender}
      leftIconNode={<i className="lyrixi-toolbar-search-input-left-icon" />}
      rightIconNode={rightIconNode}
      clearRender={clearRender}
      // Validate
      precision={precision}
      trim={trim}
      max={max}
      min={min}
      maxLength={maxLength}
      // input属性
      inputMode={inputMode}
      // Events
      onClick={onClick}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onPressEnter={onPressEnter}
      onSearch={onSearch}
    />
  )
}

export default forwardRef(Search)
