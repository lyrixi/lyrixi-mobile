import React, { useImperativeHandle, forwardRef, useRef, useContext } from 'react'
import FormContext from './../FormContext'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

const FormItem = forwardRef(
  (
    {
      id,
      name,
      // 样式
      layout,
      className,

      children,
      ...props
    },
    ref
  ) => {
    const { layout: globalLayout } = useContext(FormContext)
    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <div
        {...props}
        className={DOMUtil.classNames(
          'lyrixi-form-item',
          className,
          (layout || globalLayout) === 'horizontal'
            ? 'lyrixi-form-item-layout-horizontal row'
            : 'lyrixi-form-item-layout-vertical'
        )}
        id={`${name ? `lyrixi-form-item-${name}` : id || ''}`}
        ref={rootRef}
      >
        {children}
      </div>
    )
  }
)

export default FormItem
