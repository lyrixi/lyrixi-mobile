import _isPlainObject from 'lodash/isPlainObject'

function isPlainObject(value) {
  // 处理 Date 类型：检查是否为无效日期
  if (value instanceof Date) {
    return isNaN(value.getTime())
  }
  // 其他类型使用 Lodash 的默认逻辑
  return _isPlainObject(value)
}

export default isPlainObject
