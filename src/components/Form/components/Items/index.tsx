import React, { forwardRef } from 'react'

import type { FormItemsRef } from './Form/types'
import type { EllipsisConfig } from './../ItemsContext/types'
import type { ItemsProps } from './types'

import CommonForm from './Form'
import VirtualForm from './VirtualForm'

// layout: horizontal | vertical | inline
const Form = forwardRef<FormItemsRef, ItemsProps>(
  (
    {
      virtual,
      layout = 'horizontal',
      labelSpan,
      labelEllipsis,
      mainSpan,
      mainEllipsis,
      children,
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
export type { ItemsProps } from './types'

export default Form
