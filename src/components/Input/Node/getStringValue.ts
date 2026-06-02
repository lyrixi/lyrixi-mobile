import type { InputNodeValue } from '../types'

/** 清空时按当前 value 形态回传（string→''，数组→[]，其余→null）。 */
function getStringValue(value: InputNodeValue | undefined): string {
  if (typeof value === 'number') return String(value)
  return typeof value === 'string' ? value : ''
}

export default getStringValue
