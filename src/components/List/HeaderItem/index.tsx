import React from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import IndexBar from './../../IndexBar'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, IndexBar } from 'lyrixi-mobile'
测试使用-end */

// 获取分组标题
function HeaderItem({
  // Style
  style,
  className,

  // Elements
  anchor,
  title,
  description
}) {
  let TitleNode = (
    <>
      {title && <div className="lyrixi-list-title">{title}</div>}
      {description && <div className="lyrixi-list-description">{description}</div>}
    </>
  )

  if (anchor) {
    return (
      <IndexBar.Anchor className="lyrixi-list-divider" style={style} name={anchor}>
        {TitleNode}
      </IndexBar.Anchor>
    )
  }

  return (
    <div className={DOMUtil.classNames('lyrixi-list-divider', className)} style={style}>
      {TitleNode}
    </div>
  )
}

export default HeaderItem
