// 内库使用-start
import ArrayUtil from '../../../utils/ArrayUtil'
// 内库使用-end

/* 测试使用-start
import { ArrayUtil } from 'lyrixi-mobile'
测试使用-end */

async function loadChildren(tabs, { externalLoadData, externalList }) {
  // 没有选中项为根节点, 返回externalList
  if (!Array.isArray(tabs) || !tabs.length) {
    return {
      async: false,
      status: 'success',
      list: externalList
    }
  }

  // lastTab为当前选中项
  let lastTabId = tabs?.[tabs?.length - 1]?.id
  let node = ArrayUtil.getDeepTreeNode(externalList, lastTabId)

  // 获取到子列表
  if (node && Array.isArray(node.children)) {
    return {
      async: false,
      status: 'success',
      list: node.children
    }
  }

  // 末级节点或者没有获取下钻的load方法, 则认为是末级节点
  if (node?.isLeaf || typeof externalLoadData !== 'function') {
    return {
      async: false,
      status: 'empty',
      list: []
    }
  }

  // 异步获取子列表数据
  let result = await externalLoadData(tabs, { list: externalList })
  result.async = true
  return result
}

export default loadChildren
