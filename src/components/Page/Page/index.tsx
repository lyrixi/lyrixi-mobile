import React, { useImperativeHandle, forwardRef, useRef, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea } from 'lyrixi-mobile'
测试使用-end */

export type PageLayout = 'horizontal' | 'vertical'

export interface PageProps {
  safeArea?: boolean
  full?: boolean
  layout?: PageLayout
  animation?: string
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export interface PageRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

const Page = forwardRef<PageRef, PageProps>(function Page(
  { safeArea, full = true, layout, animation, style, className, children },
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
    <section
      ref={rootRef}
      style={style}
      className={(DOMUtil.classNames as (...args: unknown[]) => string)(
        'lyrixi-page',
        full ? 'lyrixi-full' : '',
        layout ? `lyrixi-flex-${layout}` : '',
        className
      )}
      data-animation={animation}
    >
      {children}
      {safeArea === true && <SafeArea />}
    </section>
  )
})

export default Page
