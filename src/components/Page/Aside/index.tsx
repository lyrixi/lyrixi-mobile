import React, { useImperativeHandle, forwardRef, useRef, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea } from 'lyrixi-mobile'
测试使用-end */

export interface PageAsideProps {
  safeArea?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export interface PageAsideRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

const Aside = forwardRef<PageAsideRef, PageAsideProps>(function Aside(
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
    <aside ref={rootRef} style={style} className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-page-aside', className)}>
      {children}
      {safeArea === true && <SafeArea />}
    </aside>
  )
})

export default Aside
