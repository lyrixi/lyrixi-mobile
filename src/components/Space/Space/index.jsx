import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const Space = forwardRef(
  (
    {
      // 样式
      style,
      size,
      className,

      children,
      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Space
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <div
        {...props}
        className={DOMUtil.classNames('lyrixi-space', className)}
        style={{
          gap: `${typeof size?.[0] === 'number' ? size[0] + 'px' : ''} ${
            typeof size?.[1] === 'number' ? size[1] + 'px' : ''
          }`,
          ...(style || {})
        }}
        ref={rootRef}
      >
        {children}
      </div>
    )
  }
)

export default Space
