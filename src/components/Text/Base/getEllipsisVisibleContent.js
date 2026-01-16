import getEllipsisStyle from './getEllipsisStyle'
// 默认行高, 默认展开收起按钮字数空间
import { defaultToggleWordCount } from './defaultConstant'

// 获取显示内容
function getEllipsisVisibleContent({ content, rows, rowHeight, containerElement }) {
  if (!rows || typeof rows !== 'number' || typeof content !== 'string' || !containerElement) {
    return content
  }

  // 复制容器，隐藏原容器
  const containerDuplicate = containerElement.cloneNode(false)
  containerElement.parentNode.insertBefore(containerDuplicate, containerElement.nextElementSibling)
  containerElement.classList.add('lyrixi-hide')

  // 设置复制容器，隐藏原容器
  getEllipsisStyle(
    {
      rows: rows,
      rowHeight: rowHeight
    },
    containerDuplicate
  )

  // 计算出显示内容
  let visibleContent = ''
  let words = content.split('')
  for (let word of words) {
    visibleContent += word
    containerDuplicate.innerHTML = visibleContent
    if (containerDuplicate.scrollHeight > containerDuplicate.clientHeight) {
      // 为...和展开收起按钮留空间
      visibleContent =
        visibleContent.slice(0, visibleContent.length - 3 - defaultToggleWordCount) + '...'
      break
    }
  }

  // 还原容器
  containerDuplicate.parentNode.removeChild(containerDuplicate)
  containerElement.classList.remove(`lyrixi-hide`)

  return visibleContent
}

export default getEllipsisVisibleContent
