import React from 'react'

function triggerChildClick(children, target) {
  // 非拖拽, 则触发子项元素点击
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

  // 触发子项元素点击
  const childOnClick = targetChild?.props?._onClick
  if (typeof childOnClick === 'function') {
    childOnClick(e)
  }
}

export default triggerChildClick
