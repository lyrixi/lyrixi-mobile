import React, { useRef, forwardRef, useImperativeHandle } from 'react'

const InputText = forwardRef(
  ({ values, disabled, readOnly, onChange, onKeyDown, onPaste }, ref) => {
    const inputRefs = useRef([])

    // Expose
    useImperativeHandle(ref, () => ({
      focus: (index) => {
        if (inputRefs.current.length === 0 || !inputRefs.current?.[index]) return
        const input = inputRefs.current[index]
        if (input?.focus) {
          input.focus()
          // 选中所有文本，这样用户可以直接输入替换
          input.select()
        }
      },
      blur: () => {
        if (inputRefs.current.length === 0) return
        for (let input of inputRefs.current) {
          if (input?.blur) {
            input.blur()
          }
        }
      }
    }))

    return (
      <>
        {values.map((value, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            value={value || ''}
            disabled={disabled}
            readOnly={readOnly}
            className="lyrixi-input-otp-item"
            onChange={(e) => {
              // 替换老值, 只保留新值
              onChange(index, e.target.value.replace(value, ''))
            }}
            onKeyDown={(e) => onKeyDown(e.key, index)}
            onPaste={onPaste}
            onClick={(e) => {
              // 点击时选中所有文本
              const input = e.target
              input.select()
            }}
            autoComplete="off"
          />
        ))}
      </>
    )
  }
)

export default InputText
