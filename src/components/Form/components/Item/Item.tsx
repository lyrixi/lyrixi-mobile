import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'

import ItemsContext from './../ItemsContext'

import type { FormItemLayoutProps, FormItemRef } from '../../types'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const FormItem = forwardRef<FormItemRef, FormItemLayoutProps>(
  (
    {
      id,
      name,
      // Value & Display Value

      // Style
      style,
      className,
      layout,

      // Elements
      children
    },
    ref
  ) => {
    const { layout: globalLayout } = useContext(ItemsContext)
    const rootRef = useRef<HTMLDivElement>(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    let layoutClass = ''
    if (layout || globalLayout) {
      layoutClass = `lyrixi-form-item-layout-${layout || globalLayout}`
    }

    return (
      <div
        ref={rootRef}
        id={`${name ? `lyrixi-form-item-${name}` : id || ''}`}
        style={style}
        className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-row lyrixi-form-item', className, layoutClass)}
      >
        {children}
      </div>
    )
  }
)
export default FormItem
