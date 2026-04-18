import getPositionByReferenceElement from './getPositionByReferenceElement'
import getRelativePosition from './getRelativePosition'

// 修改元素位置相对于参考元素的定位
function updatePositionByReferenceElement(
  current,
  { referenceElement, parentElement, animation, bottom, top, left, right, offset } = {}
) {
  // 自动计算位置
  let position =
    referenceElement && parentElement
      ? getRelativePosition({ targetElement: referenceElement, parentElement, animation })
      : getPositionByReferenceElement({ referenceElement, animation })

  // 自定义位置
  if (![undefined, null].includes(bottom)) {
    current.style.bottom = bottom
  } else if (![undefined, null].includes(top)) {
    current.style.top = top
  }
  // 从下往上弹-计算位置
  else if (typeof position.bottom === 'number') {
    current.style.bottom = parseInt(position.bottom + (offset?.bottom || 0)) + 'px'
  }
  // 从上往下弹
  else if (typeof position.top === 'number') {
    current.style.top = parseInt(position.top + (offset?.top || 0)) + 'px'
  }

  // 自定义位置
  if (![undefined, null].includes(left)) {
    current.style.left = left
  } else if (![undefined, null].includes(right)) {
    current.style.right = right
  }
  // 左右弹出-计算位置
  // 左侧弹出
  else if (typeof position.left === 'number') {
    current.style.left = parseInt(position.left + (offset?.left || 0)) + 'px'
  }
  // 右侧弹出
  else if (typeof position.right === 'number') {
    current.style.right = parseInt(position.right + (offset?.right || 0)) + 'px'
  }
}

export default updatePositionByReferenceElement
