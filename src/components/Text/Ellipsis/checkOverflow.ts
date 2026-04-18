// 检测内容是否超出行数限制
function checkOverflow(element) {
  let elementHeight = element.clientHeight

  // 创建一个临时元素来测量实际内容高度
  const tempElement = element.cloneNode(true)
  tempElement.style.WebkitLineClamp = 'none'
  element.parentNode.insertBefore(tempElement, element.nextElementSibling)

  // 隐藏原容器
  element.classList.add('lyrixi-hide')

  // 计算出临时元素的高度
  let tempElementHeight = tempElement.clientHeight

  // 删除临时元素
  element.parentNode.removeChild(tempElement, element.nextElementSibling)

  // 隐藏原容器
  element.classList.remove('lyrixi-hide')
  return elementHeight !== tempElementHeight
}

export default checkOverflow