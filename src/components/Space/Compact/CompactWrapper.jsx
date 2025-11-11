import React from 'react'

const CompactWrapper = ({ children, targetsBaseClass = {} }) => {
  // 转换子元素为数组
  const childrenArray = React.Children.toArray(children)

  // 处理后的子元素
  const newChildren = childrenArray.map((child, index) => {
    let baseClass = targetsBaseClass[child?.type?.componentName]
    if (!baseClass) return child

    // 获取当前元素的类名数组
    const existingClasses = child.props.className?.split(/\s+/) || []
    const additionalClasses = []

    // 添加基础紧凑样式
    additionalClasses.push(`${baseClass}-compact-item`)

    // 判断位置（仅在直接子元素层级）
    const isFirst = index === 0
    const isLast = index === childrenArray.length - 1

    // 添加首尾样式
    if (isFirst) additionalClasses.push(`${baseClass}-compact-first-item`)
    if (isLast) additionalClasses.push(`${baseClass}-compact-last-item`)

    // 合并类名并去重
    const mergedClassName =
      [...existingClasses, ...additionalClasses].filter(Boolean).join(' ') || undefined

    // 仅克隆当前元素，不处理子元素的子元素
    return React.cloneElement(child, {
      className: mergedClassName,
      className: mergedClassName
    })
  })

  return <>{newChildren}</>
}

export default CompactWrapper
