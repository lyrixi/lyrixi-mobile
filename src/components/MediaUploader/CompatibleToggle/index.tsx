import React from 'react'
import getList from './getList'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

// 小程序拍照兼容方式切换, 小程序经常呼不起来
function CompatibleToggle({ compatible, compatiblePlatform, onCompatiblePlatformChange }) {
  const list = getList()

  // 获取当前选中项
  const currentItem = getList(compatiblePlatform)

  // 获取另一项用于切换
  const otherItem = list.find((item) => item.id !== currentItem.id)

  const handleToggle = () => {
    if (otherItem && onCompatiblePlatformChange) {
      onCompatiblePlatformChange(otherItem.id)
    }
  }

  if (!compatible) {
    return null
  }

  return (
    <span className="lyrixi-media-compatible-toggle">
      {typeof compatible === 'string'
        ? compatible
        : LocaleUtil.locale(
          '如果无法拍照，请切换拍照方式',
          'lyrixi_58ec7924f08282da3bf37ac0ad7f857c'
        )}
      <span
        style={{ textDecoration: 'none' }}
        onClick={(e) => {
          e.preventDefault()
          handleToggle()
        }}
      >
        <i
          className="lyrixi-icon icon-sort-fill lyrixi-font-size-s"
          style={{ transform: 'rotate(90deg)', width: '12px', height: '12px' }}
        ></i>
        <span style={{ marginLeft: '4px' }}>{currentItem.name}</span>
      </span>
    </span>
  )
}

export default CompatibleToggle
