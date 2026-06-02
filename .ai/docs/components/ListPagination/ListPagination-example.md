# ListPagination Example

以下示例位于本目录 `demos/`（由 `src/components/ListPagination/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { ListPagination } from 'lyrixi-mobile'`

## demos/ListPaginationMain/index.tsx

```tsx
// 第三方库导入
import { forwardRef, type Ref } from 'react'

import { ListPagination } from 'lyrixi-mobile'
import type { ListPaginationMainRef } from '../../types'

// 项目内部模块导入
import serverParams from './serverParams'
import formatResult from './formatResult'
import formatViewItem from './formatViewItem'

import type { ListPaginationDemoMainProps } from './../ListPagination.demos.types'

// 简便的列表组件, 只需要传入 url 和 payload 即可
const Main = forwardRef<ListPaginationMainRef, ListPaginationDemoMainProps>(function Main(
  { cacheName, virtual, queryParams },
  ref: Ref<ListPaginationMainRef>
) {
  return (
    <ListPagination.Main
      ref={ref}
      cacheName={cacheName}
      virtual={virtual}
      url="/"
      payload={serverParams(queryParams)}
      formatResult={formatResult}
      formatViewItem={formatViewItem}
      onChange={(value, _options) => {
        console.log('onChange:', value, _options)
      }}
    />
  )
})

export default Main
```

## demos/ListPaginationCombo/index.tsx

```tsx
// 第三方库导入
import { useState } from 'react'

import { ListPagination, Page, Card } from 'lyrixi-mobile'

// 项目内部模块导入
import formatResult from '../ListPaginationMain/formatResult'
import formatViewItem from '../ListPaginationMain/formatViewItem'
import Header from './Header'

import type { ListPaginationDemoRow } from './../ListPagination.demos.types'

// ListPagination.Combo：触发器 + 弹窗内分页列表选择（不支持传 list，使用 url + formatResult/formatViewItem）
const ListPaginationComboDemo = () => {
  const [singleValue, setSingleValue] = useState<ListPaginationDemoRow | null>(null)
  const [multipleValue, setMultipleValue] = useState<ListPaginationDemoRow[]>([])
  const [keyword, setKeyword] = useState('')

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Single Select</Card.Header>
          <Card.Main>
            <ListPagination.Combo
              placeholder="Single Select"
              allowClear
              title="Single Select"
              url="/"
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              value={singleValue}
              onChange={(v) => {
                console.log('onChange:', v)
                setSingleValue((v as ListPaginationDemoRow) || null)
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Multiple Select</Card.Header>
          <Card.Main>
            <ListPagination.Combo
              placeholder="Multiple Select"
              allowClear
              multiple
              title="Multiple Select"
              url="/"
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              value={multipleValue}
              onChange={(v) => {
                console.log('onChange:', v)
                setMultipleValue(Array.isArray(v) ? (v as ListPaginationDemoRow[]) : [])
              }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom Header: Search（keyword 入参）</Card.Header>
          <Card.Main>
            <ListPagination.Combo
              placeholder="Search"
              allowClear
              title="Select"
              url="/"
              payload={{ keyword: keyword }}
              formatPayload={({ page, ...payload }) => {
                return {
                  ...payload,
                  page,
                  keyword
                }
              }}
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              value={singleValue}
              onChange={(v) => setSingleValue((v as ListPaginationDemoRow) || null)}
              headerRender={() => <Header onSearch={setKeyword} />}
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}

export default ListPaginationComboDemo
```

## demos/ListPaginationModal/index.tsx

```tsx
// 第三方库导入
import { useState } from 'react'

import { Button, Card, ListPagination, Page } from 'lyrixi-mobile'

// 项目内部模块导入
import formatResult from '../ListPaginationMain/formatResult'
import formatViewItem from '../ListPaginationMain/formatViewItem'

import type { ListPaginationDemoRow } from './../ListPagination.demos.types'

// ListPagination.Modal：受控弹窗内分页列表选择
export default function ListPaginationModalDemo() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<ListPaginationDemoRow | ListPaginationDemoRow[] | null>(null)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>ListPagination.Modal</Card.Header>
          <Card.Main>
            <Button onClick={() => setOpen(true)}>打开选择</Button>
            <ListPagination.Modal
              open={open}
              onClose={() => setOpen(false)}
              title="选择一项"
              url="/"
              formatResult={formatResult}
              formatViewItem={formatViewItem}
              value={value}
              onChange={(v) => {
                console.log('onChange:', v)
                setValue(v)
                setOpen(false)
              }}
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
```
