import getEllipsisStyle from './getEllipsisStyle'

// 判断是否显示展开收起按钮
function getEllipsisOverflow({ rows, rowHeight, containerElement }) {
  if (!containerElement || !rows) {
    return false
  }

  // 复制容器，隐藏原容器
  const containerDuplicate = containerElement.cloneNode(true)
  containerElement.parentNode.insertBefore(containerDuplicate, containerElement.nextElementSibling)
  containerElement.classList.add(`lyrixi-hide`)

  // 设置复制容器，隐藏原容器
  getEllipsisStyle(
    {
      rows: rows,
      rowHeight: rowHeight
    },
    containerDuplicate
  )

  // Judge if the content is overflow
  let isOverflow = false
  if (containerDuplicate.scrollHeight > containerDuplicate.clientHeight) {
    isOverflow = true
  }

  // 还原容器
  containerDuplicate.parentNode.removeChild(containerDuplicate)
  containerElement.classList.remove(`lyrixi-hide`)

  return isOverflow
}

export default getEllipsisOverflow
