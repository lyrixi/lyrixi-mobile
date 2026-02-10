// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

// 显示名称
function getDisplayValue(value, { separator } = {}) {
  if (typeof value !== 'object') {
    return value
  }
  // 纯对象
  if (ObjectUtil.isPlainObject(value)) {
    return value?.name || ''
  }
  // 数组
  else if (Array.isArray(value)) {
    let displayValues = value.map((item) => item?.name || '')
    displayValues = displayValues.filter((item) => item)
    return displayValues.join(separator && typeof separator === 'string' ? separator : ',')
  }

  return ''
}

export default getDisplayValue
