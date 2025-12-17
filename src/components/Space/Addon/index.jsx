import React, { forwardRef } from 'react'
import Compact from './../Compact'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const SpaceAddon = forwardRef(({ className, style, block, size, children }, ref) => {
  const compactContext = Compact.useContext()
  const mergedSize = size || compactContext?.size || 'm'
  const mergedBlock = block || compactContext?.block || false

  return (
    <div
      ref={ref}
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-space-addon',
        mergedSize ? `lyrixi-size-${mergedSize}` : null,
        mergedBlock ? 'lyrixi-space-addon-block' : null,
        className
      )}
    >
      {children}
    </div>
  )
})

export default SpaceAddon
