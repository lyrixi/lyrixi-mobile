import React from 'react'

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
                className={`lyrixi-cascader-tab${tab?.id === activeTab?.id ? ' active' : ''}`}
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
