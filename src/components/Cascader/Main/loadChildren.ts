import type { CascaderMainLoadChildrenResult } from './types'
import type { CascaderNode, LoadDataFn } from '../cascaderTypes'

// 内库使用-start
import ArrayUtil from '../../../utils/ArrayUtil'
// 内库使用-end

/* 测试使用-start
import { ArrayUtil } from 'lyrixi-mobile'
测试使用-end */

async function loadChildren(
  tabs: CascaderNode[],
  {
    externalLoadData,
    externalList
  }: {
    externalLoadData?: LoadDataFn
    externalList: CascaderNode[]
  }
): Promise<CascaderMainLoadChildrenResult> {
  if (!Array.isArray(tabs) || !tabs.length) {
    return {
      async: false,
      status: 'success',
      list: externalList
    }
  }

  const lastTabId = tabs?.[tabs?.length - 1]?.id
  const node = lastTabId !== undefined
    ? (ArrayUtil.getDeepTreeNode(
        externalList as Parameters<typeof ArrayUtil.getDeepTreeNode>[0],
        lastTabId
      ) as CascaderNode | null)
    : null

  if (node && Array.isArray(node.children)) {
    return {
      async: false,
      status: 'success',
      list: node.children
    }
  }

  if (node?.isLeaf || typeof externalLoadData !== 'function') {
    return {
      async: false,
      status: 'empty',
      list: []
    }
  }

  const result = await externalLoadData(tabs, { list: externalList })
  return { ...result, async: true } as CascaderMainLoadChildrenResult
}

export default loadChildren
