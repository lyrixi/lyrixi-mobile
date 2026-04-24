import React, { forwardRef } from 'react'
import Block from './Block'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

interface AvatarProps {
  animated?: boolean
  className?: string
  style?: React.CSSProperties
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
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
        className={DOMUtil.classNames('lyrixi-skeleton-block-avatar', className)}
      />
    )
  }
)

export default Avatar
