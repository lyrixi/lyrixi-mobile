// 第三方库导入
import React from 'react'
import { ToolBar, TabBar } from 'lyrixi-mobile'

// 公共组件导入

// 内部组件导入

// 样式图片等资源文件导入

type CardItem = { id?: string; name?: string; [key: string]: unknown }

// 头部
const Header = ({
  title: _title,
  tabs,
  tab,
  slides,
  slide,
  onTabChange,
  onSlideChange
}: {
  title: string
  tabs: CardItem[] | null
  tab: CardItem | null
  slides: CardItem[] | null
  slide: CardItem | null
  onTabChange: (tabs: CardItem[]) => void
  onSlideChange: (slide: CardItem) => void
}) => {
  return (
    <div
      className="lyrixi-border-b"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <ToolBar.List
        style={{ paddingLeft: 0, height: 48 }}
        left={0}
        placeholder="List"
        value={tab}
        onChange={(value: unknown) => {
          if (Array.isArray(value)) {
            onTabChange(value as CardItem[])
          } else {
            onTabChange([value as CardItem])
          }
        }}
        list={(tabs ?? []) as { id: string; name: string }[]}
      />
      {slides && (
        <TabBar.Slide
          value={slide ?? undefined}
          list={slides}
          onChange={(item) => onSlideChange(item as CardItem)}
        />
      )}
    </div>
  )
}

export default Header
