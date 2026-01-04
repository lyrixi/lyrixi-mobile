// 第三方库导入
import React from 'react'
import { Flex, ToolBar, TabBar } from 'lyrixi-mobile'

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
    <Flex align="center" justify="between" className="lyrixi-border-b">
      <ToolBar.List
        style={{ paddingLeft: 0, height: 48 }}
        left={0}
        placeholder="List"
        value={tab}
        onChange={onTabChange}
        list={tabs}
      />

      {/* Slides */}
      {slides && <TabBar.Slide value={slide} list={slides} onChange={onSlideChange} />}
    </Flex>
  )
}

export default Header
