import ObjectUtil from './../../../../utils/ObjectUtil'
import type { PickerColumnItem } from './../Slots'

// 格式化值
function formatValue(
  value: PickerColumnItem[] | null | undefined,
  { lists, listCount }: { lists: PickerColumnItem[][] | null; listCount: number }
): PickerColumnItem[] | null {
  if (!Array.isArray(lists)) return null

  let newValue: PickerColumnItem[] | null = null
  if (!Array.isArray(value)) {
    newValue = [...Array(listCount)].map((_item, slotIndex) => {
      return (lists as PickerColumnItem[][])[slotIndex][0]
    })
    return newValue
  } else {
    newValue = ObjectUtil.cloneDeep(value) as PickerColumnItem[]
  }

  // 如果项数少，填充数组
  if (newValue.length < listCount) {
    newValue = [...Array(listCount)].map((item, slotIndex) => {
      if (!value?.[slotIndex]) {
        return lists[slotIndex][0]
      }
      return value[slotIndex]
    })
  }
  // 如果项数多，减少数组
  else if (newValue.length > listCount) {
    newValue = newValue.slice(0, listCount)
  }

  return newValue
}

export default formatValue
