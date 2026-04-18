import React, { useImperativeHandle, useRef, forwardRef, type CSSProperties, type MouseEventHandler, type ReactNode } from 'react'

export interface ComboProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface ComboRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

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
