/**
 * formatValue - 将传入的 value 规范化为标准对象格式
 * @param {*} value - 原始 value，可能是字符串、字符串数组、对象或对象数组
 * @param {Array} list - 候选数据列表，每项需包含 id 字段
 * @param {boolean} multiple - 是否多选模式
 * @returns {*} - 单选返回对象或 null，多选返回对象数组
 */
export default function formatValue(value, list, multiple) {
  if (!Array.isArray(list)) {
    return multiple ? [] : null
  }

  // 多选模式
  if (multiple) {
    // 如果 value 不是数组，返回空数组
    if (!Array.isArray(value)) {
      return []
    }

    // 遍历 value 数组，将字符串 ID 匹配为完整对象
    return value
      .map((item) => {
        // 已经是对象且有 id，直接返回
        if (item && typeof item === 'object' && item.id) {
          return item
        }
        // 是字符串或数字，从 list 中查找
        if (typeof item === 'string' || typeof item === 'number') {
          return list.find((listItem) => listItem.id === item) || null
        }
        return null
      })
      .filter(Boolean) // 过滤掉 null
  }

  // 单选模式
  // 已经是对象且有 id，直接返回
  if (value && typeof value === 'object' && value.id) {
    return value
  }

  // 是字符串或数字，从 list 中查找
  if (typeof value === 'string' || typeof value === 'number') {
    return list.find((item) => item.id === value) || null
  }

  // 其他情况返回 null
  return null
}

