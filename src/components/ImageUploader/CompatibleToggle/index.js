import React from 'react'
import getList from './getList'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Toast from './../../Toast'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Toast } from 'lyrixi-mobile'
测试使用-end */

// 小程序拍照兼容方式切换, 小程序经常呼不起来
function CompatibleToggle({ forceType, onForceTypeChange }) {
  const list = getList()

  // 获取当前选中项
  const currentItem = getList(forceType)

  // 获取另一项用于切换
  const otherItem = list.find((item) => item.id !== currentItem.id)

  const handleToggle = () => {
    if (otherItem && onForceTypeChange) {
      onForceTypeChange(otherItem.id)
    }
  }

  return (
    <span style={{ marginBottom: '4px', position: 'relative', overflow: 'visible' }}>
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
      <i
        size={20}
        className="lyrixi-icon icon-rdo-question lyrixi-color-quaternary size18"
        // style={{ position: 'absolute', right: -20, top: 1 }}
        style={{ marginLeft: '2px' }}
        onClick={() => {
          Toast.show({
            content: LocaleUtil.locale('如果无法拍照，请切换拍照方式'),
            duration: 2000
          })
        }}
      />
    </span>
  )
}

export default CompatibleToggle
