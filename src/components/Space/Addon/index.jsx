import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import { useSpaceCompactContext } from './../Compact/context'

const SpaceAddon = forwardRef(({ className, style, size, children }, ref) => {
  const compactContext = useSpaceCompactContext()
  const mergedSize = size || compactContext?.size || 'm'

  return (
    <div
      ref={ref}
      className={DOMUtil.classNames(
        'lyrixi-space-addon',
        mergedSize ? `lyrixi-size-${mergedSize}` : null,
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
})

export default SpaceAddon
