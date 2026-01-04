// 第三方库导入
import React from 'react'
import { Page, ToolBar, TabBar } from 'lyrixi-mobile'

// 公共组件导入

// 内部组件导入

// 样式图片等资源文件导入

// 头部
const Header = ({
  title,
  // List
  tabs,
  tab,
  slides,
  slide,
  onTabChange,
  // Slides
  onSlideChange
}) => {
  return (
    <Page.Header>
      <ToolBar className="lyrixi-border-b">
        <ToolBar.List left={12} placeholder="List" value={tab} onChange={onTabChange} list={tabs} />
      </ToolBar>

      {/* Slides */}
      {slides && (
        <div style={{ margin: 'var(--lyrixi-space-m) var(--lyrixi-space-xl)' }}>
          <TabBar.Slide value={slide} list={slides} onChange={onSlideChange} />
        </div>
      )}
    </Page.Header>
  )
}

export default Header
