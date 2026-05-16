import React, { useImperativeHandle, useRef, forwardRef } from 'react'
import type { ComboProps, ComboRef } from './types'

const Combo = forwardRef<ComboRef, ComboProps>(function Combo({ style, className, children, onClick }, ref) {
  const comboRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => {
    return {
      element: comboRef.current,
      getElement: () => comboRef.current
    }
  })

  return (
    <div ref={comboRef} style={style} className={className} onClick={onClick}>
      {children}
    </div>
  )
})

export default Combo
