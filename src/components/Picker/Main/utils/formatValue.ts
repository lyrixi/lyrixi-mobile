import ObjectUtil from './../../../../utils/ObjectUtil'
import type { PickerItem } from '../../types'

// 格式化值
function formatValue(
  value: PickerItem[] | null | undefined,
  { lists, listCount }: { lists: PickerItem[][] | null; listCount: number }
): PickerItem[] | null {
  if (!Array.isArray(lists)) return null

  let newValue: PickerItem[] | null = null
  if (!Array.isArray(value)) {
    newValue = [...Array(listCount)].map((_item, slotIndex) => {
      return (lists as PickerItem[][])[slotIndex][0]
    })
    return newValue
  } else {
    newValue = ObjectUtil.cloneDeep(value) as PickerItem[]
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
