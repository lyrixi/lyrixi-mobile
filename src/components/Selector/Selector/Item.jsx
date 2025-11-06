import React, { forwardRef, useRef, useImperativeHandle } from 'react'

// 按钮选择
const Item = forwardRef(
  ({ disabled = false, checked = false, onChange, children, ...props }, ref) => {
    // 节点
    const rootRef = useRef(null)
    const inputRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        inputDOM: inputRef.current,
        getRootDOM: () => {
          return rootRef.current
        },
        getInputDOM: () => {
          return inputRef.current
        }
      }
    })

    // 点击回调
    function handleClick(e) {
      if (disabled) return
      if (onChange) onChange(e.currentTarget.getAttribute('data-checked') !== 'true')
    }

    return (
      <div
        {...props}
        onClick={handleClick}
        disabled={disabled}
        data-checked={checked}
        className={`lyrixi-selector-item`}
        ref={rootRef}
      >
        <div className="lyrixi-selector-item-name">{children}</div>

        <div className="lyrixi-selector-item-checked-mark">
          <i className="lyrixi-selector-item-checked-mark-icon"></i>
        </div>
      </div>
    )
  }
)

export default Item
