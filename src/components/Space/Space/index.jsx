import React, { Children, forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import Item from './Item'
import { SpaceContextProvider } from './context'

const SIZE_MAP = {
  small: 8,
  middle: 16,
  large: 24
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
  return SIZE_MAP.small
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
      size = 'small',
      direction = 'horizontal',
      align,
      split,
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

    const splitClassName = DOMUtil.classNames(`lyrixi-space-item-split`, classNames.split)

    const shouldApplyColumnGap = !split
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

    const splitMarginStyle = split
      ? {
          marginInlineStart: horizontalSize / 2,
          marginInlineEnd: horizontalSize / 2,
          marginBlockStart: verticalSize / 2,
          marginBlockEnd: verticalSize / 2,
          ...(styles.split || {})
        }
      : styles.split

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
                splitClassName={splitClassName}
                index={index}
                split={split}
                style={itemStyle}
                splitStyle={splitMarginStyle}
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
