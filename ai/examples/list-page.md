# List Page Example

来源参考：`src/pages/List/demos/Common`

## 推荐目录结构

```text
src/pages/List/demos/Common/
├── index.jsx
├── Header/
│   ├── index.jsx
│   └── Filter/
│       └── index.jsx
├── Main/
│   ├── index.jsx
│   ├── formatPayload.js
│   ├── formatResult.js
│   └── formatViewItem.jsx
└── Footer/
    └── index.jsx
```

## 结构职责

- `index.jsx`
  - 作为页面入口。
  - 管理 `queryParams` 等页面状态。
  - 负责组装 `Header` 与 `Main`。
- `Header/index.jsx`
  - 放在 `Page.Header` 中。
  - 通常使用 `ToolBar.Search`、`ToolBar.SearchActive`、`ToolBar.Filter`。
  - 通过 `onSearch` 修改父层 `queryParams`。
- `Header/Filter/index.jsx`
  - 封装筛选弹层。
  - 通常使用 `ToolBar.Filter` + `Form` + `FooterBar`。
- `Main/index.jsx`
  - 放在 `Page.Main` 中。
  - 通常使用 `ListPagination.Main`。
  - 接收 `queryParams`，并结合 `formatPayload` / `formatResult` / `formatViewItem` 组织数据。
- `Footer/index.jsx`
  - 可选。
  - 仅当页面底部需要固定操作区时使用。

## 入口页规范写法

```jsx
// 第三方库导入
import React, { useState } from 'react'
import { Page } from 'lyrixi-mobile'

// 内部组件函数导入
import Header from './Header'
import Main from './Main'

const Common = () => {
  const [queryParams, setQueryParams] = useState({ query: '1' })

  return (
    <Page>
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams) => {
          setQueryParams(newQueryParams)
        }}
      />
      <Main queryParams={queryParams} />
    </Page>
  )
}

export default Common
```

## Header 规范写法

```jsx
import React, { useState } from 'react'
import { LocaleUtil, Page, ToolBar } from 'lyrixi-mobile'
import Filter from './Filter'

const locale = LocaleUtil.locale

const Header = ({ queryParams, onSearch }) => {
  const [searchActive, setSearchActive] = useState(false)
  const [searchValue, setSearchValue] = useState(queryParams?.keyword || '')

  return (
    <Page.Header>
      <ToolBar>
        <ToolBar.Search
          placeholder={locale('按名称/拼音/拼音首字母查询')}
          value={queryParams?.keyword || ''}
          readOnly
          onClick={() => {
            setSearchActive(true)
          }}
        />
        {searchActive && (
          <ToolBar.SearchActive
            placeholder={locale('按名称/拼音/拼音首字母查询')}
            allowClear
            value={searchValue}
            onChange={setSearchValue}
            onSearch={(keyword) => {
              onSearch && onSearch({ ...queryParams, keyword })
              setSearchActive(false)
            }}
            onCancel={() => {
              setSearchActive(false)
            }}
            onBlur={() => {
              setSearchActive(false)
            }}
          />
        )}
        <Filter queryParams={queryParams} onSearch={onSearch} />
      </ToolBar>
    </Page.Header>
  )
}
```

## Main 规范写法

```jsx
import React, { forwardRef } from 'react'
import { ListPagination } from 'lyrixi-mobile'
import formatPayload from './formatPayload'
import formatResult from './formatResult'
import formatViewItem from './formatViewItem'

const Main = ({ cacheName, virtual, queryParams }, ref) => {
  return (
    <ListPagination.Main
      ref={ref}
      cacheName={cacheName}
      virtual={virtual}
      url="/"
      payload={queryParams}
      formatPayload={({ page, ...payload }) => {
        return formatPayload({
          ...payload,
          page
        })
      }}
      formatResult={formatResult}
      formatViewItem={formatViewItem}
    />
  )
}

export default forwardRef(Main)
```

## formatXxx 规范

`formatPayload.js`

```js
function formatPayload({ page, ...payload }) {
  return {
    ...payload,
    page
  }
}

export default formatPayload
```

`formatResult.js`

```js
function formatResult(result) {
  if (result.code === '1') {
    return {
      status: 'success',
      list: result?.data?.list,
      totalPage: result?.data?.totalPage
    }
  }
  return {
    status: 'error',
    message: result.message
  }
}
```

`formatViewItem.jsx`

```jsx
function formatViewItem(item) {
  return {
    id: item.id,
    title: item.name,
    description: item.introduce,
    note: item.note,
    content: item.content
  }
}
```

## 强约束

- 列表页优先遵循 `Page.Header + Page.Main` 分层。
- 查询状态放在父层 `index.jsx`，不要把 Header 和 Main 的状态打散。
- 搜索/筛选优先使用 `ToolBar` 系列组件。
- 列表渲染优先用 `formatPayload` / `formatResult` / `formatViewItem` 做分层。
