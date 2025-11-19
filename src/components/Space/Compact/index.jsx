import React, { Children, forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

import { SpaceCompactContext } from './context'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const Compact = forwardRef(
  (
    {
      // Style
      className,
      style,

      // Layout
      direction = 'horizontal',
      block = false,
      size = 'm',

      // Elements
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

    const contextValue = useMemo(() => ({ size, direction }), [size, direction])

    if (childNodes.length === 0) {
      return null
    }

    return (
      <SpaceCompactContext.Provider value={contextValue}>
        <div
          style={style}
          className={DOMUtil.classNames(
            'lyrixi-space-compact',
            `lyrixi-space-compact-${direction}`,
            size ? `lyrixi-space-compact-size-${size}` : null,
            {
              [`lyrixi-space-compact-block`]: block
            },
            className
          )}
          ref={rootRef}
        >
          {childNodes.map((child, index) => {
            const key = child?.key ?? `lyrixi-space-compact-item-${index}`
            return (
              <div
                key={key}
                className={DOMUtil.classNames(
                  `lyrixi-space-compact-item`,
                  `lyrixi-space-compact-item-${direction}`,
                  {
                    [`lyrixi-space-compact-item-first`]: index === 0,
                    [`lyrixi-space-compact-item-last`]: index === childNodes.length - 1
                  }
                )}
              >
                {child}
              </div>
            )
          })}
        </div>
      </SpaceCompactContext.Provider>
    )
  }
)

export default Compact
