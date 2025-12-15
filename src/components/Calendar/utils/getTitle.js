// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

// 获取标题字符串
function getTitle(drawDate, titleFormat, otherInfo) {
  if (!drawDate) {
    return ''
  }
  let title = ''
  if (typeof titleFormat === 'function') {
    title = titleFormat(drawDate, otherInfo)
  } else {
    let format = typeof titleFormat === 'string' ? titleFormat : 'YYYY-MM'
    title = DateUtil.format(drawDate, format)
  }

  return title
}
export default getTitle
