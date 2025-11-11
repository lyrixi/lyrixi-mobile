import React, { forwardRef } from 'react'

import Search from './../Search'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

const SearchBar = (
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
    onSearch,
    onCancel
  },
  ref
) => {
  return (
    <div
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-toolbar-search-bar', className)}
    >
      {/* Element: Search */}
      <Search
        ref={ref}
        // Element
        id={id}
        name={name}
        // Value & Display Value
        value={value}
        placeholder={placeholder || LocaleUtil.locale('搜索', 'lyrixi_search')}
        formatter={formatter}
        // Status
        readOnly={readOnly}
        disabled={disabled}
        allowClear={allowClear}
        autoFocus={true}
        autoSelect={autoSelect}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-active', className)}
        // Element
        inputRender={inputRender}
        leftIconNode={leftIconNode || <i className="lyrixi-toolbar-search-input-left-icon" />}
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

      {/* Element: Cancel Button */}
      <span
        className="lyrixi-toolbar-search-button-cancel"
        // Events
        onClick={(e) => {
          onCancel && onCancel()
        }}
      >
        {LocaleUtil.locale('取消', 'lyrixi_cancel')}
      </span>
    </div>
  )
}

export default forwardRef(SearchBar)
