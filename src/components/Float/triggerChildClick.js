import React from 'react'

// 非拖拽, 则触发子项元素点击
function triggerChildClick(children, e) {
  let childDOM = e.target.classList.contains('.lyrixi-float-button')
    ? e.target
    : e.target.closest('.lyrixi-float-button')

  if (!childDOM) return

  // 根据实体DOM获取id
  const itemId = childDOM?.id
  if (!itemId) return

  // 根据id, 找到Child节点
  const childNode = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.props.id === itemId
  )

  // 触发子项元素点击
  const childOnClick = childNode?.props?.onClick
  if (typeof childOnClick === 'function') {
    childOnClick(e)
  }
}

export default triggerChildClick
