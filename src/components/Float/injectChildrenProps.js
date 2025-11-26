import React from 'react'

// 内库使用-start
import ObjectUtil from './../../utils/ObjectUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-start */

// 子元素都添加id,类名和onClick事件
const injectChildrenProps = (children, { draggable }) => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child

    return React.cloneElement(child, {
      id: child.props.id || ObjectUtil.randomUUID(),
      className: DOMUtil.classNames(
        'lyrixi-float-button',
        // 拖拽会触发点击, 需要拖拽完成后判断是否触发点击
        draggable ? 'lyrixi-float-button-click-disabled' : ''
      ),
      onClick: (e) => {
        if (e.currentTarget.classList.contains('lyrixi-float-button-click-disabled')) return
        child.props.onClick
      }
    })
  })
}

export default injectChildrenProps
