import React, { forwardRef, useImperativeHandle, useState } from 'react'
import InputNode from './../Node'
import Keyboard from './../../Keyboard'

const InputNumber = forwardRef(
  ({ values, disabled, readOnly, onChange, onKeyDown, onPaste }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [keyboardOpen, setKeyboardOpen] = useState(false)

    // Expose
    useImperativeHandle(ref, () => ({
      focus: (index) => {
        if (index >= 0 && index < values.length) {
          setCurrentIndex(index)
          setKeyboardOpen(true)
        }
      },
      blur: () => {
        setKeyboardOpen(false)
      }
    }))

    // 处理输入框点击
    const handleInputClick = (index) => {
      if (!disabled && !readOnly) {
        setCurrentIndex(index)
        setKeyboardOpen(true)
      }
    }

    // 处理键盘关闭
    const handleKeyboardClose = () => {
      setKeyboardOpen(false)
    }

    return (
      <>
        {values.map((value, index) => (
          <InputNode
            key={index}
            value={value || ''}
            disabled={disabled}
            readOnly={readOnly}
            className={`lyrixi-input-otp-item${
              currentIndex === index && keyboardOpen ? ' active' : ''
            }`}
            onClick={() => handleInputClick(index)}
            cursor={keyboardOpen && currentIndex === index}
          />
        ))}

        <Keyboard.Number
          value={values[currentIndex]}
          onChange={(val, { action }) => {
            if (action === 'delete') {
              onKeyDown && onKeyDown('Backspace', currentIndex)
              // 如果当前项没有值, 则将上一项清空
              if (!values[currentIndex] && currentIndex !== 0) {
                onChange(currentIndex - 1, '')
              }
              // 如果当前项有值，则先清除当前项
              else {
                onChange(currentIndex, '')
              }
              return
            }
            // 替换老值, 只保留新值
            onChange(currentIndex, val.replace(values[currentIndex], ''))
          }}
          ok={null}
          onClose={handleKeyboardClose}
          open={keyboardOpen}
          precision={0}
        />
      </>
    )
  }
)

export default InputNumber
