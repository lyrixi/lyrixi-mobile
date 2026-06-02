# ListAsync Example

以下示例位于本目录 `demos/`（由 `src/components/ListAsync/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { ListAsync } from 'lyrixi-mobile'`

## demos/ListAsyncList.tsx

```tsx
import { useRef, useState } from 'react'

import { Page, ListAsync } from 'lyrixi-mobile'
import listData from './listData'

export default function ListAsyncListDemo() {
  const mainRef = useRef(null)
  const [value, setValue] = useState<Record<string, unknown> | Record<string, unknown>[] | null>(null)

  console.log(mainRef.current)
  return (
    <Page>
      <ListAsync
        ref={mainRef}
        itemLayout="vertical"
        value={value}
        loadData={({ previousResult, action }) => {
          console.log({ previousResult, action })
          return Promise.resolve({
            status: 'noMore', // empty、error、moreError、noMore、loading
            message: 'No more data',
            list: listData
          })
        }}
        onChange={(v) => {
          console.log(v)
          setValue(v)
        }}
      />
    </Page>
  )
}
```

## demos/ListAsyncVirtualList.tsx

```tsx
import { useRef, useState } from 'react'

import { Page, ListAsync } from 'lyrixi-mobile'

// 虚拟滚动列表：传入 virtual={{ getItemHeight }}，列表项高度需固定以便计算可视区
const ITEM_HEIGHT = 72

export default function ListAsyncVirtualListDemo() {
  const mainRef = useRef(null)
  const [value, setValue] = useState<Record<string, unknown> | Record<string, unknown>[] | null>(null)

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
          return Promise.resolve({
            status: list.length >= 60 ? 'noMore' : 'loading',
            message: list.length >= 60 ? '没有更多了' : undefined,
            list
          })
        }}
        onChange={(v) => setValue(v)}
        checkable
        allowClear
      />
    </Page>
  )
}
```

## demos/ListAsyncGroup.tsx

```tsx
import { useRef, useState } from 'react'

import { Page, ListAsync } from 'lyrixi-mobile'
import listGroupData from './listGroupData'

// 分组列表：loadData 返回带 children 的数据，一级为 group 标题，children 为子级列表项
export default function ListAsyncGroupDemo() {
  const mainRef = useRef(null)
  const [value, setValue] = useState<Record<string, unknown> | Record<string, unknown>[] | null>(null)

  return (
    <Page>
      <ListAsync
        ref={mainRef}
        itemLayout="vertical"
        value={value}
        loadData={async () => {
          return {
            status: 'noMore',
            message: '没有更多了',
            list: listGroupData
          }
        }}
        onChange={(v) => setValue(v)}
        checkable
        allowClear
      />
    </Page>
  )
}
```
