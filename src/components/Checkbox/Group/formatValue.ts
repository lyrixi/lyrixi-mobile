interface ListItem {
  id: string | number
  name?: string
  [key: string]: unknown
}

/**
 * formatValue - 将传入的 value 规范化为标准对象格式
 */
export default function formatValue(
  value: unknown,
  list: ListItem[],
  multiple: boolean
): ListItem | ListItem[] | null {
  if (!Array.isArray(list)) {
    return multiple ? [] : null
  }

  if (multiple) {
    if (!Array.isArray(value)) {
      return []
    }

    return (value as unknown[])
      .map((item) => {
        if (item && typeof item === 'object' && (item as ListItem).id) {
          return item as ListItem
        }
        if (typeof item === 'string' || typeof item === 'number') {
          return list.find((listItem) => listItem.id === item) ?? null
        }
        return null
      })
      .filter((item): item is ListItem => item !== null)
  }

  if (value && typeof value === 'object' && (value as ListItem).id) {
    return value as ListItem
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return list.find((item) => item.id === value) ?? null
  }

  return null
}
