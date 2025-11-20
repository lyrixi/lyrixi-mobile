import { DateUtil } from 'lyrixi-mobile'

// 将 dateType、rankType、sortType 等转换为 API 参数
function serverData({ dateType, rankType, sortType, page = 1 }) {
  if (!dateType || !rankType) return null

  const params = {
    rankType: rankType.id,
    sort: sortType || '2',
    page
  }

  // 处理日期参数
  if (dateType.value) {
    const date = dateType.value
    params.year = DateUtil.format(date, 'YYYY')
    params.cycle = dateType.cycle

    if (dateType.id === 'month' || dateType.id === 'YTM') {
      params.month = DateUtil.format(date, 'MM')
    } else if (dateType.id === 'quarter') {
      params.quarter = DateUtil.format(date, 'Q')
    }
  }

  return params
}

export default serverData
