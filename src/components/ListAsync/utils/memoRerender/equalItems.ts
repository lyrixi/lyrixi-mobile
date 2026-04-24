// 内库使用-start
import ArrayUtil from './../../../../utils/ArrayUtil'
// 内库使用-end

/* 测试使用-start
import { ArrayUtil } from 'lyrixi-mobile'
测试使用-end */

// 比较列表
function equalItems(prevItems: Record<string, unknown>[], nextItems: Record<string, unknown>[]) {
  if ((prevItems || '') === (nextItems || '')) {
    return true
  }

  return ArrayUtil.isEqual(prevItems, nextItems, undefined)
}

export default equalItems
