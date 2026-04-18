import React, { useImperativeHandle, forwardRef, useRef, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

export interface PageHeaderProps {
  safeArea?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export interface PageHeaderRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

const Header = forwardRef<PageHeaderRef, PageHeaderProps>(function Header(
  { safeArea, className, style, children },
  ref
) {
  const rootRef = useRef<HTMLElement | null>(null)

  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  return (
    <header ref={rootRef} style={style} className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-page-header', className)}>
      {children}
      {safeArea === true && <SafeArea />}
    </header>
  )
})

export default Header
