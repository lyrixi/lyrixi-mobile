import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const CollapseGroup = (
  {
    value,
    onChange,
    children,
    // 其它属性
    className,
    ...props
  },
  ref
) => {
  const rootRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(value)

  // Controlled component
  useEffect(() => {
    if (value !== undefined && onChange) {
      setActiveIndex(value)
    }
    // eslint-disable-next-line
  }, [value])

  // Expose
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current,
      getActiveIndex: () => {
        return activeIndex
      },
      openIndex: (index) => {
        if (onChange) {
          onChange(index)
        } else {
          setActiveIndex(index)
        }
      },
      close: () => {
        if (onChange) {
          onChange(null)
        } else {
          setActiveIndex(null)
        }
      }
    }
  })

  return (
    <div
      ref={rootRef}
      {...props}
      className={DOMUtil.classNames('lyrixi-collapse-group', className)}
    >
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          open: activeIndex === index,
          key: index,
          onOpen: () => {
            let newActiveIndex = index
            if (onChange) {
              onChange(newActiveIndex)
            } else {
              setActiveIndex(newActiveIndex)
            }
          },
          onClose: () => {
            let newActiveIndex = null
            if (onChange) {
              onChange(newActiveIndex)
            } else {
              setActiveIndex(newActiveIndex)
            }
          }
        })
      })}
    </div>
  )
}

export default forwardRef(CollapseGroup)
