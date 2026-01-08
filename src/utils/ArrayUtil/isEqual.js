import _ from 'lodash'
import isEqualFields from './isEqualFields'

function isEqual(array1, array2, fieldNames) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false

  // 数组长度
  if (array1.length !== array2.length) {
    return false
  }
  if (array1.length === 0 && array2.length === 0) {
    return true
  }

  // 指定项不同
  if (fieldNames && isEqualFields(array1, array2, fieldNames) === false) {
    return false
  }

  // 深度比较
  return _.isEqual(array1, array2)
}

export default isEqual
