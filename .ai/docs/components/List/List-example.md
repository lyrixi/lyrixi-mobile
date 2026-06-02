# List Example

以下示例位于本目录 `demos/`（由 `src/components/List/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { List } from 'lyrixi-mobile'`

## demos/List.tsx

```tsx
import { useState, type ReactNode } from 'react'

import { Page, List, Card, Button } from 'lyrixi-mobile'
import type { ListItem, ViewItem } from 'lyrixi-mobile'
import listAllData from './listAllData'
import listData from './listData'

import type { ListDemoRawRow } from './List.demos.types'

const ListDemo = () => {
  const [singleValue, setSingleValue] = useState<ListDemoRawRow | ListDemoRawRow[] | null>(null)
  const [multipleValue, setMultipleValue] = useState<ListDemoRawRow[]>([])

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>List 基础（全样式展示）</Card.Header>
          <Card.Header>itemLayout horizontal</Card.Header>
          <Card.Main>
            <List
              list={listAllData}
              formatViewItem={(item: ListItem): ViewItem => {
                return {
                  ...item,
                  actionRender: () => {
                    return <Button size="s">actionRender</Button>
                  }
                } as ViewItem
              }}
              value={singleValue}
              onChange={(newSingleValue) => {
                console.log('newSingleValue:', newSingleValue)
                setSingleValue(newSingleValue)
              }}
              checkable
              allowClear
            />
          </Card.Main>
          <Card.Header>itemLayout vertical</Card.Header>
          <Card.Main>
            <List
              list={listAllData}
              itemLayout="vertical"
              formatViewItem={(item: ListItem): ViewItem => {
                return {
                  ...item,
                  _raw: item,
                  id: item.id,
                  actionRender: () => {
                    return <Button size="s">actionRender</Button>
                  }
                } as ViewItem
              }}
              value={singleValue}
              onChange={(newSingleValue) => {
                console.log('newSingleValue:', newSingleValue)
                setSingleValue(newSingleValue)
              }}
              checkable
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List 多选（multiple、allowClear）</Card.Header>
          <Card.Main>
            <List
              list={listData}
              value={multipleValue}
              onChange={(newMultipleValue) => {
                console.log('newMultipleValue:', newMultipleValue)
                if (newMultipleValue == null) {
                  setMultipleValue([])
                } else {
                  setMultipleValue(
                    Array.isArray(newMultipleValue) ? newMultipleValue : [newMultipleValue]
                  )
                }
              }}
              checkable
              multiple
              allowClear
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>
            List 项布局（itemLayout=vertical）、复选框在右（checkboxPosition=right）
          </Card.Header>
          <Card.Main>
            <List
              list={listData.slice(0, 3)}
              value={singleValue}
              onChange={setSingleValue}
              checkable
              allowClear
              itemLayout="vertical"
              checkboxPosition="right"
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List formatViewItem（格式化单项显示）</Card.Header>
          <Card.Main>
            <List
              list={listData.slice(0, 4)}
              value={singleValue}
              onChange={setSingleValue}
              checkable
              allowClear
              formatViewItem={(item: ListItem, { index }): ViewItem => {
                return {
                  ...item,
                  _raw: item,
                  id: item.id ?? index,
                  title: (
                    <div>
                      <span style={{ color: '#999' }}>{index}: </span>
                      <span>{String((item as { name?: unknown }).name ?? '')}</span>
                    </div>
                  )
                } as ViewItem
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List itemRender（自定义项渲染）</Card.Header>
          <Card.Main>
            <List
              list={listData.slice(0, 3)}
              value={singleValue}
              onChange={setSingleValue}
              checkable
              allowClear
              itemRender={(item, { checked, onChange: onSelect, index }) => (
                <List.Item
                  _raw={item._raw as ListDemoRawRow}
                  key={String(
                    (item._raw as { id?: unknown } | undefined)?.id ??
                      (item as { id?: unknown }).id ??
                      index
                  )}
                  checked={checked}
                  checkable
// ... 其余见 demos/List.tsx 全文
```

## demos/ListItem.tsx

```tsx
import { useState } from 'react'

import { Page, List, Card, Button } from 'lyrixi-mobile'

export default function ListItemDemo() {
  const [checkedId, setCheckedId] = useState<string | number | null>(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>List.Item 属性示例</Card.Header>
          <Card.Main>
            <List.Item
              _raw={{ id: '1' }}
              title="仅标题"
              description="描述文字"
            />
            <List.Item
              _raw={{ id: '2' }}
              avatarUrl="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
              title="avatarUrl 头像"
              description="左侧头像"
            />
            <List.Item
              _raw={{ id: '3' }}
              title="note 右侧备注"
              description="描述"
              note="备注"
            />
            <List.Item
              _raw={{ id: '4' }}
              title="content 区块"
              description="描述"
              content="自定义 content 区域内容"
            />
            <List.Item
              _raw={{ id: '5' }}
              title="actionRender 操作区"
              description="右侧可放按钮"
              actionRender={() => <Button size="s">操作</Button>}
            />
            <List.Item
              _raw={{ id: '6' }}
              checkable
              checked={checkedId === '6'}
              onSelect={(raw) =>
                setCheckedId(raw.checked ? (raw.id as string | number | undefined) ?? null : null)
              }
              title="checkable 可选项"
              description="单选示例"
            />
            <List.Item
              _raw={{ id: '7' }}
              disabled
              title="disabled 禁用"
              description="不可点击"
            />
            <List.Item
              _raw={{ id: '8' }}
              layout="vertical"
              title="itemLayout=vertical（需由 List 传入 layout）"
              description="单条演示竖向布局"
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
```

## demos/ListInfiniteScroll.tsx

```tsx
import { useState } from 'react'

import { Page, List, Card, Button, Flex } from 'lyrixi-mobile'

export default function ListInfiniteScrollDemo() {
  const [status, setStatus] = useState('loading')

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>List.InfiniteScroll（status: loading | noMore | error）</Card.Header>
          <Card.Main>
            <div style={{ marginBottom: 16 }}>
              <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>切换 status 查看样式</div>
              <Flex gap="s" wrap>
                <Button size="s" onClick={() => setStatus('loading')}>loading</Button>
                <Button size="s" onClick={() => setStatus('noMore')}>noMore</Button>
                <Button size="s" onClick={() => setStatus('error')}>error</Button>
              </Flex>
            </div>
            <List.InfiniteScroll status={status} content={status === 'error' ? '加载失败，点击重试' : undefined} />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>List.InfiniteScroll 自定义 content</Card.Header>
          <Card.Main>
            <List.InfiniteScroll status="noMore" content="已经到底啦" />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
```

## demos/ListHeaderItem.tsx

```tsx
import { useState } from 'react'

import { Page, List, Card } from 'lyrixi-mobile'
import listData from './listData'

import type { ListDemoHeaderItemRow } from './List.demos.types'

export default function ListHeaderItemDemo() {
  const [singleValue, setSingleValue] = useState<ListDemoHeaderItemRow | ListDemoHeaderItemRow[] | null>(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>List.HeaderItem（分组标题）</Card.Header>
          <Card.Main>
            <List.HeaderItem title="Group Title" description="Group Description" />
            <List
              list={listData}
              value={singleValue}
              onChange={(v) => setSingleValue(v)}
              checkable
              allowClear
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
```
