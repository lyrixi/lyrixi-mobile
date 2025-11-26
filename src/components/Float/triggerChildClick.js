import React from 'react'

// 非拖拽, 则触发子项元素点击
function triggerChildClick(children, target) {
  let childTarget = target.classList.contains('.lyrixi-float-button')
    ? target
    : target.closest('.lyrixi-float-button')

  if (!childTarget) return

  // 根据实体DOM获取id
  const itemId = childTarget?.id
  if (!itemId) return

  // 根据id, 找到Child节点
  const targetChild = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.props.id === itemId
  )
  debugger

  // 触发子项元素点击
  childTarget.classList.remove('lyrixi-float-button-click-disabled')
  const childOnClick = targetChild?.props?.onClick
  if (typeof childOnClick === 'function') {
    childOnClick(e)
  }
  childTarget.classList.add('lyrixi-float-button-click-disabled')
}

export default triggerChildClick
