import React from 'react'
import getTabs from './utils/getTabs'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

type TabItem = (ReturnType<typeof getTabs>)[number]

export interface TabsProps {
  tab: TabItem
  onChange: (t: TabItem) => void
}

// 选项卡
function Tabs({ tab, onChange }: TabsProps) {
  const tabs = getTabs()
  return (
    <div className="lyrixi-map-nearbyControl-tabs">
      {tabs.map((item, index) => {
        return (
          <div
            key={index}
            className={DOMUtil.classNames(
              'lyrixi-map-nearbyControl-tab',
              tab.name === item.name ? 'lyrixi-active' : ''
            )}
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
