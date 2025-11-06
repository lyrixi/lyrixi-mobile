import React from 'react'
import { testEditableOptions } from './utils'

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
                className={`lyrixi-cascader-tab${tab?.id === value?.id ? ' active' : ''}${
                  testEditableOptions(tab, {
                    editableOptions
                  }) ? '' : ' disabled' }`}
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
