import _ from 'lodash'
import sortValue from './sortValue'

// 内库使用-start
import ArrayUtil from '../../../../../utils/ArrayUtil'
// 内库使用-end

/* 测试使用-start
import { ArrayUtil } from 'lyrixi-mobile'
测试使用-end */

import findDistrictLeafIndex from '../findDistrictLeafIndex'

// 更新value的type
function formatDistrictValue(originValue, list, type) {
  let value = _.cloneDeep(originValue)
  if (!Array.isArray(value) || !value.length || !Array.isArray(list) || !list.length) return null

  for (let item of value) {
    // id
    if (item.id && typeof item.id === 'number') {
      item.id = String(item.id)
    }

    // 更新type
    if (item.id) {
      let node = ArrayUtil.getDeepTreeNode(list, item.id)
      if (node) {
        item.type = node.type
      }
    }
  }

  sortValue(value)

  // Add parentid and add street type
  for (let [index, item] of value.entries()) {
    if (item.parentid && typeof item.parentid === 'number') {
      item.parentid = String(item.parentid)
    }
    if (index !== 0 && !item.parentid) {
      item.parentid = value?.[index - 1]?.id || ''
    }

    // 如果上级是市或者区, 则type为street
    if (
      _.isEmpty(value[index].type) &&
      index === value.length - 1 &&
      (value[index - 1]?.type?.includes('city') || value[index - 1]?.type?.includes('district'))
    ) {
      item.type = ['street']
    }
  }

  // 从叶子节点后，舍弃掉后面的item
  if (type) {
    const leafIndex = findDistrictLeafIndex(value, type)
    if (leafIndex >= 0 && leafIndex < value.length) {
      value.length = leafIndex + 1
      // 标记为isLeaf方便Cascader.Main解析
      value[value.length - 1].isLeaf = true
    }
  }

  return value
}

export default formatDistrictValue
