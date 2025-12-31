import React, { useRef, useImperativeHandle, forwardRef } from 'react'

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
      justify = 'start', // 'start', 'end', 'center', 'between', 'around', 'evenly'
      align, // 'start', 'end', 'center'

      wrap = false, // 是否换行, true: 换行, false: 超出压缩, 'scroll': 超出滚动
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
        element: rootRef.current,
        getElement: () => {
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

    // alignType: 'justify', 'align'
    function getClassName() {
      const justifyClassMap = {
        start: `lyrixi-flex-justify-flex-start`,
        end: `lyrixi-flex-justify-flex-end`,
        center: `lyrixi-flex-justify-center`,
        between: `lyrixi-flex-justify-space-between`,
        around: `lyrixi-flex-justify-space-around`,
        evenly: 'lyrixi-flex-justify-space-evenly'
      }

      const alignClassMap = {
        start: `lyrixi-flex-align-flex-start`,
        end: `lyrixi-flex-align-flex-end`,
        center: `lyrixi-flex-align-center`
      }

      const directionClassMap = {
        horizontal: 'lyrixi-flex-horizontal',
        vertical: 'lyrixi-flex-vertical'
      }

      return DOMUtil.classNames(
        'lyrixi-flex',
        directionClassMap[direction],
        {
          'lyrixi-flex-wrap': wrap === true,
          'lyrixi-flex-scroll': wrap === 'scroll',
          [alignClassMap[align || '']]: alignClassMap[align || ''],
          [justifyClassMap[justify || '']]: justifyClassMap[justify || '']
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
