import React, { forwardRef } from 'react'
import Block from './Block'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

interface TitleProps {
  animated?: boolean
  className?: string
  style?: React.CSSProperties
}

const Title = forwardRef<HTMLDivElement, TitleProps>(
  (
    {
      animated = true,
      className,
      style
    },
    ref
  ) => {
    return (
      <Block
        ref={ref}
        animated={animated}
        style={style}
        className={DOMUtil.classNames('lyrixi-skeleton-block-title', className)}
      />
    )
  }
)

export default Title
