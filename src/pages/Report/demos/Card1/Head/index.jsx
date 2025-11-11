// 第三方库导入
import React from 'react'
import { ToolBar, TabBar } from 'lyrixi-mobile'

// 公共组件导入

// 内部组件导入

// 样式图片等资源文件导入

// 头部
const Head = ({ title, tabs, tab, slides, slide, onTabChange, onSlideChange }) => {
  return (
    <>
      {/* Title and Tabs */}
      <div
        className="lyrixi-flex lyrixi-flex-middle lyrixi-flex-between lyrixi-border-b"
        style={{
          height: 20,
          margin: '0 var(--lyrixi-space-l)',
          padding: 'var(--lyrixi-space-xl) 0'
        }}
      >
        {title && <div className="lyrixi-font-size-l lyrixi-flex-none bold">{title}</div>}
        {tabs && (
          <ToolBar.List
            right={12}
            value={tab ? [tab] : null}
            list={tabs}
            className="auto-fit nowrap1"
            style={{
              display: 'flex',
              maxWidth: 'initial',
              marginLeft: 'var(--lyrixi-space-xl)'
            }}
            onChange={onTabChange}
          />
        )}
      </div>

      {/* Slides */}
      {slides && (
        <div style={{ margin: 'var(--lyrixi-space-m) var(--lyrixi-space-xl)' }}>
          <TabBar.Slide value={slide} list={slides} onChange={onSlideChange} />
        </div>
      )}
    </>
  )
}

export default Head
