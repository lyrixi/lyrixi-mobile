import React from 'react'
import getTabs from './utils/getTabs'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 选项卡
function Tabs({
  // Value & Display Value
  tab,

  // Events
  onChange
}) {
  let tabs = getTabs()
  return (
    <div className="lyrixi-map-nearbyControl-tabs">
      {tabs.map((item) => {
        return (
          <div
            key={item.name}
            className={DOMUtil.classNames(
              'lyrixi-map-nearbyControl-tab',
              tab.name === item.name ? 'lyrixi-active' : ''
            )}
            // Events
            onClick={() => {
              onChange && onChange(item)
            }}
          >
            {item.name}
          </div>
        )
      })}
    </div>
  )
}
export default Tabs
