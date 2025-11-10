import React, { useImperativeHandle, useRef, forwardRef } from 'react'

// 共用组件， 修改时请全局搜索 Combo 并更新
const Combo = forwardRef(({ style, className, onClick, children }, ref) => {
  const comboRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      comboDOM: comboRef.current,
      getComboDOM: () => {
        return comboRef.current
      }
    }
  })

  return (
    <div ref={comboRef} style={style} className={className} onClick={onClick}>
      {children}
    </div>
  )
})

export default Combo
