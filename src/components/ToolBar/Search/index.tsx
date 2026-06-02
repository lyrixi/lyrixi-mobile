import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import LocaleUtil from './../../../utils/LocaleUtil'
import InputSearch from './../../Input/Search'
import type { InputTextRef } from './../../Input/types'
import type { ToolBarSearchProps } from '../types/ToolBar.Search.types'
import Icon from '../../Icon'
import Icons from '../../../icons'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, LocaleUtil, Input } from 'lyrixi-mobile'
测试使用-end */

const Search = forwardRef<InputTextRef, ToolBarSearchProps>(function Search(props, ref) {
  const {
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
    enableCompositionEnd,

    // Style
    style,
    className,

    // Elements
    inputRender,
    leftIconNode,
    rightIconNode,
    clearRender,

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
  } = props

  return (
    <InputSearch
      ref={ref}
      id={id}
      name={name}
      // Value & Display Value
      value={value}
      placeholder={String(
        placeholder ?? LocaleUtil.locale('搜索', 'lyrixi_e5f71fc31e7246dd6ccc5539570471b0')
      )}
      formatter={formatter}
      // Status
      readOnly={readOnly}
      disabled={disabled}
      allowClear={allowClear}
      autoFocus={autoFocus}
      autoSelect={autoSelect}
      enableCompositionEnd={enableCompositionEnd}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-toolbar-search-input', className)}
      // Elements
      inputRender={inputRender}
      leftIconNode={
        leftIconNode || (
          <Icon svg={Icons.Search} size="s" className="lyrixi-toolbar-search-input-left-icon" />
        )
      }
      rightIconNode={rightIconNode}
      clearRender={clearRender}
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
})

export default Search
