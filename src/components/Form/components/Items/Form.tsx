import React, { useImperativeHandle, forwardRef, useRef, type CSSProperties, type ReactNode } from 'react'
import ItemsContext from './../ItemsContext'
import type { EllipsisConfig } from './../ItemsContext'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export interface FormItemsRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface FormItemsProps {
  style?: CSSProperties
  className?: string
  layout?: string
  labelSpan?: number
  labelEllipsis?: EllipsisConfig | null
  mainSpan?: number
  mainEllipsis?: EllipsisConfig | null
  children?: ReactNode
}

// layout: horizontal | vertical | inline
const Form = forwardRef<FormItemsRef, FormItemsProps>(
  (
    {
      // Value & Display Value

      // Style
      style,
      className,
      layout = 'horizontal',
      labelSpan,
      labelEllipsis,
      mainSpan,
      mainEllipsis,

      // Element
      children
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <ItemsContext.Provider
        value={{
          layout,
          labelSpan: labelSpan ?? 4,
          labelEllipsis: labelEllipsis ?? null,
          mainSpan: mainSpan ?? 20,
          mainEllipsis: mainEllipsis ?? null
        }}
      >
        <div
          ref={rootRef}
          // Style
          style={style}
          className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-form-items', className)}
        >
          {/* Element: Children */}
          {children}
        </div>
      </ItemsContext.Provider>
    )
  }
)

export default Form
