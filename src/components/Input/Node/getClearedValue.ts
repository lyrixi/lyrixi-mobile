import type { InputNodeValue } from '../types'

/** 清空时按当前 value 形态回传（string→''，数组→[]，其余→null）。 */
function getInputNodeClearedValue(value: InputNodeValue | undefined): InputNodeValue {
  if (typeof value === 'string') return ''
  if (Array.isArray(value)) return []
  return null
}

export default getInputNodeClearedValue
