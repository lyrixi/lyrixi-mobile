import React, { forwardRef, useContext } from 'react'
import FormContext from './../FormContext'
import CommonItem from './Item'
import VirtualItem from './VirtualItem'

// layout: horizontal | vertical | inline
const Item = forwardRef(
  (
    {
      id,
      name,

      // Style
      height,
      style,
      className,

      // Elements
      children
    },
    ref
  ) => {
    const { virtual } = useContext(FormContext)

    // virtual模式下, 使用IntersectionObserver来监听表单项的可见性, 所以无需要传入height, 但为了防止后续调整为手动计算高度, 还是需要传入height
    if (virtual?.observer && height) {
      return (
        <VirtualItem
          ref={ref}
          height={height}
          id={id}
          name={name}
          style={style}
          className={className}
        >
          {children}
        </VirtualItem>
      )
    }

    return (
      <CommonItem ref={ref} id={id} name={name} style={style} className={className}>
        {children}
      </CommonItem>
    )
  }
)

export default Item
