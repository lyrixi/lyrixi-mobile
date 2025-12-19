import React, { useImperativeHandle, useRef, forwardRef } from 'react'

// 用于自定义渲染Combo, 按照要求返回comboElement
const Combo = forwardRef(
  (
    {
      // Style
      style,
      className,

      // Element
      children,

      // Events
      onClick
    },
    ref
  ) => {
    const comboRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        element: comboRef.current,
        getElement: () => {
          return comboRef.current
        }
      }
    })

    return (
      <div ref={comboRef} style={style} className={className} onClick={onClick}>
        {children}
      </div>
    )
  }
)

export default Combo
