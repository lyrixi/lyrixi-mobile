// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

function getDefaultValue({ min, max }) {
  const now = new Date()

  if (min && DateUtil.compare(now, min, 'date') < 0) {
    return min
  }
  if (max && DateUtil.compare(now, max, 'date') > 0) {
    return max
  }
  return now
}

export default getDefaultValue
