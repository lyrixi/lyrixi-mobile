import React, { useImperativeHandle, forwardRef, useRef, type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export interface FooterBarRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface FooterBarProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

const FooterBar = forwardRef<FooterBarRef, FooterBarProps>(
  (
    {
      // Style
      className,
      style,

      // Element
      children
    },
    ref
  ) => {
    const rootRef = useRef<HTMLElement>(null)

    // Expose tools
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <footer
        ref={rootRef}
        // Style
        style={style}
        className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-footerbar', className)}
      >
        {children}
      </footer>
    )
  }
)

export default FooterBar
