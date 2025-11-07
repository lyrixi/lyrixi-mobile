import React from 'react'
// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

function Tabs({ tabs, activeTab, onActiveTab }) {
  return (
    <div className="lyrixi-cascader-tabs">
      {Array.isArray(tabs) && tabs.length
        ? tabs.map((tab, index) => {
            return (
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  onActiveTab && onActiveTab(tab)
                }}
                className={DOMUtil.classNames(
                  'lyrixi-cascader-tab',
                  tab?.id === activeTab?.id ? 'lyrixi-active' : ''
                )}
                key={index}
              >
                {tab.name}
              </div>
            )
          })
        : null}
    </div>
  )
}

export default Tabs
