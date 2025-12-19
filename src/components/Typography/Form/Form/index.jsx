import React, { forwardRef } from 'react'
import CommonForm from './Form'
import VirtualForm from './VirtualForm'

// layout: horizontal | vertical | inline
const Form = forwardRef(
  (
    {
      virtual,
      layout = 'horizontal',
      labelCol,
      mainCol,
      scrollerElement,
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
          labelCol={labelCol}
          mainCol={mainCol}
          scrollerElement={scrollerElement}
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
        labelCol={labelCol}
        mainCol={mainCol}
        scrollerElement={scrollerElement}
        className={className}
        style={style}
      >
        {children}
      </CommonForm>
    )
  }
)

export default Form
