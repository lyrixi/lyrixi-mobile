import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

interface BlockProps {
  animated?: boolean
  className?: string
  style?: React.CSSProperties
}

const Block = forwardRef<HTMLDivElement, BlockProps>(
  (
    {
      // Status
      animated = true,

      // Style
      className,
      style
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-skeleton-block', animated ? 'lyrixi-animated' : '', className)}
      ></div>
    )
  }
)

export default Block
