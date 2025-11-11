import React, { forwardRef, useState, useEffect } from 'react'
import InputText from './../Text'

const Search = forwardRef(
  (
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
    // No onChange, use keyword
    const [keyword, setKeyword] = useState(value)

    useEffect(() => {
      setKeyword(value)
      // eslint-disable-next-line
    }, [value])

    return (
      <InputText
        ref={ref}
        id={id}
        name={name}
        type="search"
        // Value & Display Value
        value={typeof onChange === 'function' ? value : keyword}
        placeholder={placeholder}
        formatter={formatter}
        // Status
        readOnly={readOnly}
        disabled={disabled}
        allowClear={allowClear}
        autoFocus={autoFocus}
        autoSelect={autoSelect}
        // Style
        style={style}
        className={className}
        // Element
        inputRender={inputRender}
        leftIconNode={leftIconNode}
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
        enterKeyHint="search"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        // Events
        onClick={onClick}
        onChange={typeof onChange === 'function' ? onChange : setKeyword}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onPressEnter={(e) => {
          onPressEnter && onPressEnter(e)
          e?.target?.blur?.()
          onSearch && onSearch(typeof onChange === 'function' ? value : keyword)
        }}
      />
    )
  }
)

export default Search
