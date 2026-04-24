import React, { forwardRef } from 'react'
import CommonForm from './Form'
import VirtualForm from './VirtualForm'
import type { FormItemsRef, FormItemsProps } from './Form'
import type { EllipsisConfig } from './../ItemsContext'

export interface ItemsProps extends FormItemsProps {
  virtual?: boolean
}

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

export default Form
