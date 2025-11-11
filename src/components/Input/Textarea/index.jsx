import React, { forwardRef } from 'react'
import InputText from './../Text'

const Textarea = forwardRef(
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
      leftIcon,
      rightIcon,
      clearRender,

      // Validate
      precision, // 小数精度, 只有数值框才生效
      trim, // [Number框]小数位补0, true: 不补0; false: 补0。 [Text框]影响左右空格;
      max,
      min,
      maxLength,

      // input属性
      inputMode,
      enterKeyHint,
      autoComplete,
      autoCorrect,
      spellCheck,

      // Events
      onClick,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      onPressEnter
    },
    ref
  ) => {
    return (
      <InputText
        ref={ref}
        id={id}
        name={name}
        type="textarea"
        // Value & Display Value
        value={value}
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
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        clearRender={clearRender}
        // Validate
        precision={precision}
        trim={trim}
        max={max}
        min={min}
        maxLength={maxLength}
        // input属性
        inputMode={inputMode}
        enterKeyHint={enterKeyHint}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        spellCheck={spellCheck}
        // Events
        onClick={onClick}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onPressEnter={onPressEnter}
      />
    )
  }
)

export default Textarea
