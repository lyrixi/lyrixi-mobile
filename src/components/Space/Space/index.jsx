import React, { Children, forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import Item from './Item'
import { SpaceContextProvider } from './context'

const SIZE_MAP = {
  s: 8,
  m: 16,
  l: 24
}

const toChildrenArray = (children) => {
  const result = []
  Children.forEach(children, (child) => {
    result.push(child)
  })
  return result
}

const getNumberSize = (sizeValue) => {
  if (typeof sizeValue === 'number' && !Number.isNaN(sizeValue)) {
    return sizeValue
  }
  if (typeof sizeValue === 'string' && sizeValue in SIZE_MAP) {
    return SIZE_MAP[sizeValue]
  }
  return SIZE_MAP.s
}

const Space = forwardRef(
  (
    {
      // Style
      style,
      className,
      classNames = {},
      styles = {},

      // Layout
      size = 's',
      direction = 'horizontal',
      align,
      separator,
      wrap = false,

      // Element
      children,

      // Rest
      ...restProps
    },
    ref
  ) => {
    const rootRef = useRef(null)

    const childNodes = useMemo(() => toChildrenArray(children), [children])

    const latestIndex = useMemo(() => {
      let lastIndex = -1
      childNodes.forEach((child, index) => {
        if (child !== null && child !== undefined) {
          lastIndex = index
        }
      })
      return lastIndex
    }, [childNodes])

    const sizeConfig = Array.isArray(size) ? size : [size, size]
    const horizontalSize = getNumberSize(sizeConfig[0])
    const verticalSize = getNumberSize(sizeConfig.length > 1 ? sizeConfig[1] : sizeConfig[0])

    const mergedAlign =
      align !== undefined ? align : direction === 'horizontal' ? 'center' : undefined

    const rootClassName = DOMUtil.classNames(
      'lyrixi-space',
      `lyrixi-space-${direction}`,
      {
        [`lyrixi-space-wrap`]: wrap,
        [`lyrixi-space-align-${mergedAlign}`]: mergedAlign
      },
      classNames.root,
      className
    )

    const itemClassName = DOMUtil.classNames(`lyrixi-space-item`, classNames.item)

    const separatorClassName = DOMUtil.classNames(
      `lyrixi-space-item-separator`,
      classNames.separator
    )

    const shouldApplyColumnGap = !separator
    const gapStyle = {}
    if (wrap) {
      gapStyle.flexWrap = 'wrap'
    }
    if (shouldApplyColumnGap) {
      gapStyle.columnGap = horizontalSize
      gapStyle.rowGap = verticalSize
    } else if (wrap) {
      gapStyle.rowGap = verticalSize
    }

    const mergedRootStyle = {
      ...gapStyle,
      ...(styles.root || {}),
      ...(style || {})
    }

    const separatorMarginStyle = separator
      ? {
          marginInlineStart: horizontalSize / 2,
          marginInlineEnd: horizontalSize / 2,
          marginBlockStart: verticalSize / 2,
          marginBlockEnd: verticalSize / 2,
          ...(styles.separator || {})
        }
      : styles.separator

    const itemStyle = styles.item || undefined

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

    return (
      <div
        ref={rootRef}
        // Style
        className={rootClassName}
        style={mergedRootStyle}
        {...restProps}
      >
        <SpaceContextProvider value={{ latestIndex }}>
          {childNodes.map((child, index) => {
            const key = child?.key ?? `lyrixi-space-item-${index}`
            return (
              <Item
                key={key}
                className={itemClassName}
                separatorClassName={separatorClassName}
                index={index}
                separator={separator}
                style={itemStyle}
                separatorStyle={separatorMarginStyle}
              >
                {child}
              </Item>
            )
          })}
        </SpaceContextProvider>
      </div>
    )
  }
)

export default Space
