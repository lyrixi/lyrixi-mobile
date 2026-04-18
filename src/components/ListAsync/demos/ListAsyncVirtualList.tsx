import React, { useRef, useState } from 'react'
import { Page, ListAsync } from 'lyrixi-mobile'

// 虚拟滚动列表：传入 virtual={{ getItemHeight }}，列表项高度需固定以便计算可视区
const ITEM_HEIGHT = 72

export default () => {
  const mainRef = useRef(null)
  const [value, setValue] = useState(null)

  return (
    <Page>
      <ListAsync
        ref={mainRef}
        itemLayout="vertical"
        value={value}
        virtual={{
          getItemHeight: () => ITEM_HEIGHT
        }}
        loadData={({ previousResult, action }) => {
          const prevList = previousResult?.list || []
          const isLoadMore = action === 'bottomRefresh' && prevList.length > 0
          const nextChunk = Array.from({ length: 20 }, (_, i) => ({
            id: `v-${prevList.length + i}`,
            name: `虚拟列表项 ${prevList.length + i + 1}`,
            description: `description ${prevList.length + i + 1}`
          }))
          const list = isLoadMore ? [...prevList, ...nextChunk] : nextChunk
          return {
            status: list.length >= 60 ? 'noMore' : 'loading',
            message: list.length >= 60 ? '没有更多了' : undefined,
            list
          }
        }}
        onChange={setValue}
        checkable
        allowClear
      />
    </Page>
  )
}
