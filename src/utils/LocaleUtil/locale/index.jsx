import React from 'react'
import hasNode from './hasNode'
import splitValue from './splitValue'

// values ['text', 'variable:0'], variables [1000], replace variable to text1000
function valuesToText(values, variables) {
  return values.map((value) => {
    // Replace variable
    if (value.startsWith('variable:')) {
      let variableName = value.replace('variable:', '')
      let newValue = variables?.[variableName]
      if (typeof newValue === 'number' || typeof newValue === 'boolean') {
        newValue = String(newValue)
      }
      return newValue || ''
    }

    // 如果不是variable, 直接返回
    return value
  })
}

/**
 * 国际化函数
 * @param {String} remark '共有{0}个商品, 共查到{1}页'
 * @param {String} key resources中的key
 * @param {Array} variables {0: <div><div>}
 * @return {Node} 返回react node
 */
function locale(remark, key, variables) {
  // Get key's value
  let localeData = window.lyrixiLocaleData || {}
  let value = key && typeof key === 'string' ? localeData[key || ''] : ''
  if (!value && typeof remark === 'string') {
    value = remark
  }

  // If no key's value, return the original remark
  if (!value) {
    return remark
  }

  // Split value('text{0}') to ['text', 'variable:0']
  let values = splitValue(value)

  // No node, return string
  if (!hasNode(variables)) {
    return valuesToText(values, variables).join('')
  }

  // Has node, return node
  return <>{valuesToText(values, variables)}</>
}

export default locale
