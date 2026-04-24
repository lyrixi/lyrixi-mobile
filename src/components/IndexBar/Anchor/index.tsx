import React, { type CSSProperties, type ReactNode } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

export interface AnchorProps {
  name?: string
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

// 序列控件的锚点
const Anchor = ({
  // Value & Display Value
  name,
  children,
  // Style
  className,
  style
}: AnchorProps) => {
  if (!name) {
    return <>{children}</>
  }

  return (
    <div
      style={style}
      className={(DOMUtil.classNames as (...args: unknown[]) => string)('lyrixi-indexbar-anchor', className)}
      data-indexbar-anchor={name}
    >
      {children}
    </div>
  )
}

export default Anchor
