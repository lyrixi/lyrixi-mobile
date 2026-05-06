import React, { useImperativeHandle, forwardRef, useRef } from 'react'


import type { PageFooterProps, PageFooterRef } from './types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea } from 'lyrixi-mobile'
测试使用-end */

const Footer = forwardRef<PageFooterRef, PageFooterProps>(function Footer(
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
    <footer ref={rootRef} style={style} className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-page-footer', className)}>
      {children}
      {safeArea === true && <SafeArea />}
    </footer>
  )
})

export default Footer

export type { PageFooterProps, PageFooterRef } from './types'
