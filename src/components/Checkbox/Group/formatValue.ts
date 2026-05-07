import type { CheckboxListItem } from './../types'

/**
 * formatValue - 将传入的 value 规范化为标准对象格式
 */
export default function formatValue(
  value: unknown,
  list: CheckboxListItem[],
  multiple: boolean
): CheckboxListItem | CheckboxListItem[] | null {
  if (!Array.isArray(list)) {
    return multiple ? [] : null
  }

  if (multiple) {
    if (!Array.isArray(value)) {
      return []
    }

    return (value as unknown[])
      .map((item) => {
        if (item && typeof item === 'object' && (item as CheckboxListItem).id) {
          return item as CheckboxListItem
        }
        if (typeof item === 'string' || typeof item === 'number') {
          return list.find((listItem) => listItem.id === item) ?? null
        }
        return null
      })
      .filter((item): item is CheckboxListItem => item !== null)
  }

  if (value && typeof value === 'object' && (value as CheckboxListItem).id) {
    return value as CheckboxListItem
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return list.find((item) => item.id === value) ?? null
  }

  return null
}
