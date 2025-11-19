import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import { useSpaceCompactContext } from './../Compact/context'

const SpaceAddon = forwardRef(({ className, style, size, children, ...restProps }, ref) => {
  const compactContext = useSpaceCompactContext()
  const mergedSize = size || compactContext?.size || 'middle'

  return (
    <div
      ref={ref}
      className={DOMUtil.classNames(
        'lyrixi-space-addon',
        mergedSize ? `lyrixi-space-addon-${mergedSize}` : null,
        className
      )}
      style={style}
      {...restProps}
    >
      {children}
    </div>
  )
})

export default SpaceAddon
