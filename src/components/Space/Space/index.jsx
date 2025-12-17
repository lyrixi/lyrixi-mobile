import React, { Children, forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import getNumberSize from './getNumberSize'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

import Item from './Item'

// 间距控制
const Space = forwardRef(
  (
    {
      // Style
      style,
      className,
      itemStyle,
      itemClassName,
      separatorStyle,
      separatorClassName,
      size = 's', // Number | 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'
      direction = 'horizontal', // 'horizontal', 'vertical'
      wrap = false,

      // Element
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

    // Space
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    if (childNodes.length === 0) {
      return null
    }

    function getStyle() {
      const horizontalSize = getNumberSize(size, 'horizontal')
      const verticalSize = getNumberSize(size, 'vertical')
      let gapStyle = {}
      gapStyle.columnGap = horizontalSize
      gapStyle.rowGap = verticalSize

      return {
        ...gapStyle,
        ...(style || {})
      }
    }

    return (
      <div
        ref={rootRef}
        className={DOMUtil.classNames(
          'lyrixi-space',
          `lyrixi-space-${direction}`,
          {
            [`lyrixi-space-wrap`]: wrap
          },
          className
        )}
        style={getStyle()}
      >
        {childNodes.map((child, index) => {
          const key = child?.key ?? `lyrixi-space-item-${index}`
          return (
            <Item
              key={key}
              // Style
              style={itemStyle}
              className={DOMUtil.classNames(`lyrixi-space-item`, itemClassName)}
              separatorStyle={separatorStyle}
              separatorClassName={DOMUtil.classNames(
                `lyrixi-space-item-separator`,
                separatorClassName
              )}
              // Status
              isLast={childNodes.length - 1 === index}
              // Elements
              separator={separator}
            >
              {child}
            </Item>
          )
        })}
      </div>
    )
  }
)

export default Space
