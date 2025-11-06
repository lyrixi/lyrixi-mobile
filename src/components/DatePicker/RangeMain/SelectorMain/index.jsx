import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import getSelectorOptions from './../getSelectorOptions'

// 内库使用-start
import Selector from './../../../Selector'
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Selector } from 'lyrixi-mobile'
测试使用-end */

// 日期快捷选择
function RangeMain(
  {
    className,
    // Main properties
    value,
    allowClear,
    onChange,

    rangeId,
    ranges,
    ...props
  },
  ref
) {
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  return (
    <div
      {...props}
      className={DOMUtil.classNames('lyrixi-datepicker-rangemain-selector', className)}
      ref={rootRef}
    >
      {/* 快捷选择 */}
      <Selector
        columns={5}
        allowClear={allowClear}
        value={[{ id: rangeId }]}
        // 过滤自定义配置
        list={getSelectorOptions(ranges, (item) => {
          if (!Array.isArray(item?.value) || !item?.value.length) {
            return false
          }
          return true
        })}
        onChange={(newRange) => {
          let newRangeId = newRange?.[0]?.id || ''
          let newValue =
            newRangeId && Array.isArray(ranges[newRangeId]) && ranges[newRangeId].length === 2
              ? ranges[newRangeId]
              : value

          onChange &&
            onChange(newValue, {
              rangeId: newRangeId
            })
        }}
      />
    </div>
  )
}

export default forwardRef(RangeMain)
