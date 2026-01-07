// 内库使用-start
import ArrayUtil from '../../../../utils/ArrayUtil'
// 内库使用-end

/* 测试使用-start
import { ArrayUtil } from 'lyrixi-mobile'
测试使用-end */

// 获取子级列表
function isValueInList(id, list) {
  let currentNode = ArrayUtil.getDeepTreeNode(list, id)
  if (currentNode?.children?.length) {
    return true
  }
  if (currentNode?.isLeaf) {
    return true
  }
  return false
}

export default isValueInList
