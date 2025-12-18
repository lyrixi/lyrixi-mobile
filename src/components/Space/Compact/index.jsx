import React, { Fragment, Children, forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

// 内库使用-start
import MathUtil from './../../../utils/MathUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 创建Context, 便于子组件获取上下文
const Context = React.createContext(null)

// 紧凑组件
const Compact = forwardRef(
  (
    {
      // Style
      className,
      style,
      direction = 'horizontal',
      block = false,
      size = 'm',
      radius = 'm',
      separatorStyle,
      separatorClassName,

      // Elements
      separator,
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    const childNodes = useMemo(() => {
      const nodes = []
      Children.forEach(children, (child) => {
        if (child !== null && child !== undefined && child !== false) {
          nodes.push(child)
        }
      })
      return nodes
    }, [children])

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    const contextValue = useMemo(() => ({ block, size, direction }), [block, size, direction])

    if (childNodes.length === 0) {
      return null
    }

    return (
      <Context.Provider value={contextValue}>
        <div
          style={{
            ...style,
            '--lyrixi-compact-radius': MathUtil.variableSize(radius, 'radius')
          }}
          className={DOMUtil.classNames(
            'lyrixi-space-compact',
            `lyrixi-space-compact-${direction}`,
            {
              [`lyrixi-space-compact-block`]: block
            },
            className
          )}
          ref={rootRef}
        >
          {childNodes.map((child, index) => {
            const key = child?.key ?? `lyrixi-space-compact-item-${index}`
            let isLast = index === childNodes.length - 1
            return (
              <Fragment key={key}>
                <div
                  key={key}
                  className={DOMUtil.classNames(
                    `lyrixi-space-compact-item`,
                    `lyrixi-space-compact-item-${direction}`,
                    {
                      [`lyrixi-space-compact-item-first`]: index === 0,
                      [`lyrixi-space-compact-item-last`]: isLast
                    }
                  )}
                >
                  {child}
                </div>
                {separator && !isLast ? (
                  <div
                    className={DOMUtil.classNames(
                      `lyrixi-space-item-separator`,
                      separatorClassName
                    )}
                    style={separatorStyle}
                  >
                    {separator}
                  </div>
                ) : null}
              </Fragment>
            )
          })}
        </div>
      </Context.Provider>
    )
  }
)

// Context
Compact.Context = Context
Compact.useContext = () => React.useContext(Context)
export default Compact
