import React from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

// 序列控件的锚点
const Anchor = ({
  // Value & Display Value
  name,
  children,
  // Style
  className,
  style
}) => {
  if (!name) {
    return children
  }

  return (
    <div
      style={style}
      className={DOMUtil.classNames('lyrixi-indexbar-anchor', className)}
      data-indexbar-anchor={name}
    >
      {children}
    </div>
  )
}

export default Anchor
