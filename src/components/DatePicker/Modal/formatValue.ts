import valueToList from '../Main/DateMain/valueToList'
import listToValue from '../Main/DateMain/listToValue'

// 格式化value, 过滤不合法的值
function formatValue(value, type, { hourStep, minuteStep }) {
  if (value instanceof Date === false) {
    // eslint-disable-next-line
    value = new Date()
  }

  let valueList = valueToList(value, type, { hourStep, minuteStep })

  console.log('listToValue(valueList, type):', listToValue(valueList, type))
  return listToValue(valueList, type)
}

export default formatValue
