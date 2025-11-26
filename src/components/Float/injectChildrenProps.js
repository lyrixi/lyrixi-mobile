import React from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-start */

// 子元素都添加id,类名和onClick事件
const injectChildrenProps = (children, { draggable }) => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child

    // 保留用户原本的onClick
    child._onClick = child.props.onClick

    return React.cloneElement(child, {
      id: child.props.id || DOMUtil.uuid(),
      className: 'lyrixi-float-button',
      onClick: draggable ? undefined : child.props.onClick
    })
  })
}

export default injectChildrenProps
