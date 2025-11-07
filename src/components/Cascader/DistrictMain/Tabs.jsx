import React from 'react'
import { testEditableOptions } from './utils'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

function Tabs({
  list,
  value,
  onChange,
  // 禁用判断
  editableOptions
}) {
  return (
    <div className="lyrixi-cascader-tabs">
      {Array.isArray(list) && list.length
        ? list.map((tab, index) => {
            return (
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  onChange && onChange(tab)
                }}
                className={DOMUtil.classNames(
                  'lyrixi-cascader-tab',
                  tab?.id === value?.id ? 'lyrixi-active' : '',
                  testEditableOptions(tab, {
                    editableOptions
                  })
                    ? ''
                    : 'lyrixi-disabled'
                )}
                key={index}
              >
                {tab.name || 'No name'}
              </div>
            )
          })
        : null}
    </div>
  )
}

export default Tabs
