import React, { useRef, useImperativeHandle, forwardRef, useMemo } from 'react'

// 内库使用-start
import MathUtil from './../../utils/MathUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Flex = forwardRef(
  (
    {
      // Style
      style,
      className,

      direction = 'horizontal', // 'horizontal', 'vertical'
      wrap = false, // 是否换行
      align = 'start', // 'start', 'end', 'center', 'between', 'around', 'evenly'
      gap = 's', // Number | 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'

      // Element
      children
    },
    ref
  ) => {
    // Expose
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => {
          return rootRef.current
        }
      }
    })

    function getStyle() {
      let gapStyle = {}
      if (gap) {
        const gapValues = Array.isArray(gap) ? gap : [gap, gap]
        const horizontalGap = MathUtil.variableSize(gapValues?.[0], 'space')
        const verticalGap = MathUtil.variableSize(gapValues?.[1], 'space')
        gapStyle.columnGap = horizontalGap
        gapStyle.rowGap = verticalGap
      }

      return {
        ...gapStyle,
        ...(style || {})
      }
    }

    function getClassName() {
      const alignClassMap = {
        start: direction === 'horizontal' ? 'lyrixi-flex-left' : 'lyrixi-flex-top',
        end: direction === 'horizontal' ? 'lyrixi-flex-right' : 'lyrixi-flex-bottom',
        center: direction === 'horizontal' ? 'lyrixi-flex-center' : 'lyrixi-flex-middle',
        between: 'lyrixi-flex-between',
        around: 'lyrixi-flex-around',
        evenly: 'lyrixi-flex-evenly'
      }

      const directionClassMap = {
        horizontal: 'lyrixi-flex-horizontal',
        vertical: 'lyrixi-flex-vertical'
      }

      return DOMUtil.classNames(
        'lyrixi-flex',
        directionClassMap[direction],
        {
          'lyrixi-flex-wrap': wrap,
          [alignClassMap[align || '']]: alignClassMap[align || '']
        },
        className
      )
    }

    return (
      <div
        ref={rootRef}
        // Style
        style={getStyle()}
        className={getClassName()}
      >
        {/* Element: Children */}
        {children}
      </div>
    )
  }
)

export default Flex
