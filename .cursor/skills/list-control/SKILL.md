---
name: list-control
description: >
  Standardizes how to build list controls and main list sections in this repo, especially under src/pages/List/demos/Common/Main. Use when generating or refactoring List + formatPayload/formatResult/formatViewItem logic.
---

# 列表控件规范（List / ListPagination + formatXxx）

本 skill 专门针对「列表控件」本身，而不是整个列表页骨架。  
它补充 `list-page` skill，聚焦在：

- `src/pages/List/demos/Common/Main/**`
- `formatPayload.js`
- `formatResult.js`
- `formatViewItem.jsx`

---

## 1. 何时使用本 skill

在本项目中，以下场景应启用此 skill：

- 需要编写或修改列表**主区域**（Main）：
  - 包括数据请求、分页、数据格式化；
  - 与 Header 的查询参数联动。
- 需要新写或调整：
  - `formatPayload`（查询参数 → 接口入参）；
  - `formatResult`（接口响应 → 列表数据/分页信息）；
  - `formatViewItem`（单条记录数据 → 列表行 UI）。

不覆盖：

- ToolBar 区域（Header 部分）—— 由 `toolbar-demos` + `list-page` 负责；
- 整个页面骨架——由 `list-page` 负责。

---

## 2. 目录结构（标准）

典型结构（以 `src/pages/List/demos/Common` 为例）：

```text
src/pages/List/demos/Common/
  index.jsx          # 入口，组装 Header + Main
  Main/
    index.jsx        # 列表主区域
    formatPayload.js # 查询参数格式化
    formatResult.js  # 响应格式化
    formatViewItem.jsx # 列表行渲染
```

使用本 skill 时，应尽量沿用和复用这套结构。

---

## 3. formatPayload.js 模式

### 3.1 职责

- 接收页面上的查询参数（通常包含分页、筛选、关键字等）；
- 按后端接口需要的格式拼成请求入参；
- 不处理 UI 逻辑，只做「query → payload」的转换。

### 3.2 建议写法示例

```js
// src/pages/List/demos/Common/Main/formatPayload.js

export default function formatPayload(queryParams) {
  const {
    pageNum,
    pageSize,
    keyword,
    dateRange,
    filters
  } = queryParams || {}

  return {
    pageNum,
    pageSize,
    keyword,
    // 例如日期范围转字符串，按实际接口格式来
    startDate: dateRange?.[0],
    endDate: dateRange?.[1],
    ...filters
  }
}
```

> 具体字段命名需参考本项目现有的 `formatPayload.js`，不要凭空造字段。

---

## 4. formatResult.js 模式

### 4.1 职责

- 接收接口原始响应；
- 统一抽取出：
  - 列表数据数组；
  - 分页信息（当前页、页大小、总数等）；
  - 其它需要传给 List 控件的元信息。

### 4.2 建议写法示例

```js
// src/pages/List/demos/Common/Main/formatResult.js

export default function formatResult(response) {
  // 假设后端返回 { list, pageNum, pageSize, total }
  const data = response?.data || {}

  return {
    list: data.list || [],
    pageNum: data.pageNum || 1,
    pageSize: data.pageSize || 10,
    total: data.total || 0
  }
}
```

> 同样，具体结构必须以项目现有 `formatResult.js` 为基准。

---

## 5. formatViewItem.jsx 模式

### 5.1 职责

- 接收单条记录原始数据；
- 转成适合列表 UI 使用的结构，或直接返回 JSX；
- 集中定义「每一行怎么长什么样」。

### 5.2 建议写法示例（结构化返回）

```jsx
// src/pages/List/demos/Common/Main/formatViewItem.jsx

export default function formatViewItem(item) {
  // 只做数据映射，不直接写复杂 JSX（除非现有模式就是返回 JSX）
  return {
    title: item.title,
    desc: item.description,
    extra: item.statusName,
    // 其它需要的字段
  }
}
```

### 5.3 建议写法示例（直接返回 JSX）

如果现有模式在 `formatViewItem` 中直接返回 JSX，则沿用它：

```jsx
export default function formatViewItem(item) {
  return (
    <div>
      <div>{item.title}</div>
      <div>{item.description}</div>
    </div>
  )
}
```

> 具体选哪种模式，以当前 `src/pages/List/demos/Common/Main/formatViewItem.jsx` 为准。

---

## 6. Main/index.jsx 中的 List 控件

### 6.1 职责

- 作为“控件容器”，负责：
  - 根据查询参数计算 payload；
  - 调用请求函数；
  - 使用 `formatResult`、`formatViewItem` 处理数据；
  - 把数据、分页信息传给 `List` 或 `ListPagination`。

### 6.2 建议写法轮廓

```jsx
import React, { useEffect, useState } from 'react'
import { ListPagination } from 'lyrixi-mobile'
import Request from 'lyrixi-mobile/utils/Request'

import formatPayload from './formatPayload'
import formatResult from './formatResult'
import formatViewItem from './formatViewItem'

export default function Main({ queryParams }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    list: [],
    pageNum: 1,
    pageSize: 10,
    total: 0
  })

  async function fetchData(extraParams) {
    setLoading(true)
    try {
      const payload = formatPayload({ ...queryParams, ...extraParams })
      const res = await Request.get('/api/list', payload)
      const result = formatResult(res)
      setData(result)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [JSON.stringify(queryParams)])

  return (
    <ListPagination
      loading={loading}
      list={data.list.map((item) => formatViewItem(item))}
      pageNum={data.pageNum}
      pageSize={data.pageSize}
      total={data.total}
      onChange={(pageNum, pageSize) => {
        fetchData({ pageNum, pageSize })
      }}
    />
  )
}
```

> 具体 List 组件和 props 以本项目现有 `Main/index.jsx` 为准，上述只是结构示意。

---

## 7. 使用建议

当用户描述：

- 「列表 Main 需要根据查询参数请求接口、分页、并渲染成 List 控件」

优先按以下步骤生成代码：

1. 在 `Main/` 下创建或更新 `formatPayload.js` / `formatResult.js` / `formatViewItem.jsx`，遵循本 skill 模式；
2. 在 `Main/index.jsx` 中：
   - 使用 `formatPayload` + `Request` 请求数据；
   - 使用 `formatResult` + `formatViewItem` 构造传给 List 的数据；
   - 通过分页事件刷新数据；
3. 保持与现有 List demo 一致的 props 命名和行为。 

