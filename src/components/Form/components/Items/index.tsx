import React, { forwardRef } from 'react'

import type { EllipsisConfig, FormItemsLayoutProps, FormItemsRef } from '../../types'

import CommonForm from './Form'
import VirtualForm from './VirtualForm'

// layout: horizontal | vertical | inline
const Form = forwardRef<FormItemsRef, FormItemsLayoutProps>(
  (
    {
      // Value & Display Value
      virtual,
      layout = 'horizontal',
      labelSpan,
      labelEllipsis,
      mainSpan,
      mainEllipsis,
      // Elements
      children,
      // Style
      className,
      style
    },
    ref
  ) => {
    // virtual模式下, 使用IntersectionObserver来监听表单项的可见性, 所以无需要传入height
    if (virtual) {
      return (
        <VirtualForm
          ref={ref}
          layout={layout}
          labelSpan={labelSpan}
          labelEllipsis={labelEllipsis as EllipsisConfig | null}
          mainSpan={mainSpan}
          mainEllipsis={mainEllipsis as EllipsisConfig | null}
          className={className}
          style={style}
        >
          {children}
        </VirtualForm>
      )
    }
    return (
      <CommonForm
        ref={ref}
        layout={layout}
        labelSpan={labelSpan}
        labelEllipsis={labelEllipsis as EllipsisConfig | null}
        mainSpan={mainSpan}
        mainEllipsis={mainEllipsis as EllipsisConfig | null}
        className={className}
        style={style}
      >
        {children}
      </CommonForm>
    )
  }
)
export default Form
