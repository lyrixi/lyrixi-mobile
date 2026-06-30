---
description: 业务页面样式命名、DOMUtil.classNames 与 Less 目录规范
globs: 'src/pages/**/*.{tsx,jsx,less},src/examples/**/*.{tsx,jsx,less}'
alwaysApply: false
---

# 页面样式规范

适用范围：`src/pages/**`、`src/examples/**` 及组件 `demos/**` 中的业务页面。页面目录与模块划分见 [`page-structure.md`](./page-structure.md)；TS 命名见 [`global-coding-name.md`](./global-coding-name.md)。

## 总则

| 项 | 规则 |
| --- | --- |
| 类名前缀 | 统一 `lyrixi-`，全小写、连字符分隔 |
| 优先策略 | **先用** 全局工具类（`lyrixi-flex`、`lyrixi-border-b`、`lyrixi-text-right` 等）；仅当页面/layout 级样式无法复用时再写页面私有 Less |
| 合并类名 | 多个类名用 `DOMUtil.classNames(...)`；单一工具类可写字符串 |
| 设计 token | 页面 Less 中颜色/间距优先 `var(--lyrixi-*)`，避免硬编码与设计 token 重复的值 |

全局工具类定义于 `src/assets/global/`（经 `src/assets/index.less` 注入），常用：`flex.less`、`border.less`、`color.less`、`global-after.less` 中的文字/布局类。

---

## 类名命名

### 页面根 / 区域块

页面级私有类名建议：

```
lyrixi-{页面类型}-{语义名}
```

| 段 | 说明 | 示例 |
| --- | --- | --- |
| 页面类型 | 与页面模板/职责对应的小写词 | `list`、`edit`、`detail`、`report` |
| 语义名 | 具体区域或业务含义，camelCase 转 kebab | `pageName`（占位，落地时换成真实页面名，如 `order-list`） |

示例（列表页 Main 挂载在 `ListAsync` 上）：

```tsx
<ListAsync className="lyrixi-list-order-list" ... />
```

对应 Less：

```less
.lyrixi-list-order-list {
  background-color: var(--lyrixi-color-white);

  .lyrixi-list-divider { ... }
  .lyrixi-list-item { ... }
}
```

> 模板/示例里常用占位 `lyrixi-list-pageName`，生成真实页面时把 `pageName` 替换为实际页面标识（如 `customer-list`）。

### 页面内元素

在页面根块下嵌套，保持同一前缀体系：

```
lyrixi-{页面类型}-{element}
```

示例：

- `lyrixi-list-divider` — 列表分组标题
- `lyrixi-list-item` — 列表项外层定制

Less 中写在页面根选择器内，避免污染全局：

```less
.lyrixi-list-order-list {
  .lyrixi-list-divider {
    padding: var(--lyrixi-space-m) var(--lyrixi-space-l);
    color: var(--lyrixi-color-default);
    background-color: var(--lyrixi-bg-divider);
  }
}
```

### 工具类（优先）

布局、边框、对齐、文字色等**不要**重复造类名，直接用全局工具类：

| 场景 | 类名示例 |
| --- | --- |
| 横向 flex + 居中 | `lyrixi-flex lyrixi-flex-justify-center lyrixi-flex-align-center` |
| 底部分割线 | `lyrixi-border-b` |
| 文字右对齐 | `lyrixi-text-right` |
| 白底 | `lyrixi-bg-white` |
| 隐藏 | `lyrixi-hide` |

```tsx
<Page.Header className="lyrixi-text-center">标题</Page.Header>
<Page.Main className="lyrixi-bg-white">...</Page.Main>
<ToolBar className="lyrixi-border-b" />
```

### 禁止

- ❌ 无 `lyrixi-` 前缀的页面类名
- ❌ 在页面 Less 里重新定义与 `src/assets/global/` 等价的工具类
- ❌ 过深的全局选择器（页面样式应挂在页面根类名下）
- ❌ 用页面类名覆盖组件库内部结构（应通过组件 `className` / 官方 props 扩展）

---

## DOMUtil.classNames 常用写法

页面侧组合类名的场景少于组件库，但仍遵循同一工具。

### 1. 单一工具类 — 可直接字符串

```tsx
<ToolBar className="lyrixi-border-b" />
<div className="lyrixi-text-right">{`${count} / 150`}</div>
```

### 2. 多类名 — 用 DOMUtil.classNames

```tsx
import { DOMUtil } from 'lyrixi-mobile'

<div
  className={DOMUtil.classNames(
    'lyrixi-flex',
    'lyrixi-flex-justify-center',
    'lyrixi-flex-align-center',
    'lyrixi-border-b'
  )}
/>
```

### 3. 页面根类 + 条件 / 外部传入

```tsx
className={DOMUtil.classNames('lyrixi-list-order-list', active ? 'lyrixi-active' : '', className)}
```

### 4. 传给 lyrixi-mobile 组件

通过组件的 `className`（或 `modalClassName`、`pickerComboClassName` 等专用 prop）传入，**不要**在页面 Less 里写 `.lyrixi-list-pageName .lyrixi-list-item` 去改组件内部未文档化的结构，除非模板明确要求覆盖列表项外观：

```tsx
<ListAsync className="lyrixi-list-order-list" />
<Page.Main className={DOMUtil.classNames('lyrixi-bg-white', mainClassName)} />
```

---

## Less 目录与引入规则

与 [`page-structure.md`](./page-structure.md) 模块划分配合。

### 推荐结构

```
src/pages/OrderList/          # 或 src/examples/List/demos/CommonManual/
├── index.tsx                 # 页面入口，import './index.less'
├── index.less                # 页面级样式（根块 + 子元素）
├── Header/
│   └── index.tsx             # 一般不加 less，用 ToolBar/Page 与工具类
├── Main/
│   └── index.tsx             # 挂载页面根 className 的组件
├── Footer/
│   └── index.tsx
└── api/
```

| 文件 | 职责 |
| --- | --- |
| `index.less` | 页面唯一私有样式入口；定义 `lyrixi-{type}-{page}` 根块及内部元素 |
| `Header/Main/Footer/index.less` | 仅当该模块样式较多、与入口解耦时再建（默认省略） |
| 跨 demo 共享 | 同模板多 demo 可共享一份 less，入口相对路径引入（如 `import './../Common/index.less'`） |

### 引入方式

在**页面入口**或**挂载根 className 的模块**中 import：

```tsx
// index.tsx
import './index.less'
```

```tsx
// 兄弟 demo 复用
import './../Common/index.less'
```

业务代码从 `lyrixi-mobile` 引入 `DOMUtil`；内库 demos 遵循 `.cursorrules` 注释块切换导入方式。

### Less 书写习惯

1. 根选择器用页面类名包裹全部私有规则。
2. 优先 CSS 变量，减少 magic number；与示例对齐时可保留局部像素，但颜色尽量走 token。
3. 不对 `lyrixi-mobile` 组件内部 class 做 broad 覆盖（如 `.lyrixi-list-item .lyrixi-xxx`），除非列表/报表模板明确需要定制项样式。

---

## 完整示例

**index.tsx**

```tsx
import React, { useState } from 'react'
import { Page } from 'lyrixi-mobile'

import Header from './Header'
import Main from './Main'

import './index.less'

const OrderList = () => {
  const [queryParams, setQueryParams] = useState<Record<string, unknown>>({})

  return (
    <Page>
      <Header
        queryParams={queryParams}
        onSearch={(next) => setQueryParams(next)}
      />
      <Main queryParams={queryParams} />
    </Page>
  )
}

export default OrderList
```

**Main/index.tsx**

```tsx
import { ListAsync } from 'lyrixi-mobile'

const Main = ({ queryParams }) => (
  <ListAsync className="lyrixi-list-order-list" queryParams={queryParams} />
)
```

**index.less**

```less
.lyrixi-list-order-list {
  background-color: var(--lyrixi-color-white);

  .lyrixi-list-divider {
    padding: 8px 12px;
    color: var(--lyrixi-color-default);
    background-color: var(--lyrixi-bg-divider);
  }

  .lyrixi-list-item {
    margin-left: 12px;
    padding: 14px 0;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      left: 30px;
      height: 1px;
      background-color: var(--lyrixi-border-color);
    }
  }
}
```

---

## 与其它规则的分工

| 文件 | 职责 |
| --- | --- |
| **本文件** | 页面 class 命名、Less 放哪、工具类优先策略 |
| [`page-structure.md`](./page-structure.md) | Header/Main/Footer/api 目录与页面 TS 结构 |
| [`component-coding-styles.md`](./component-coding-styles.md) | 组件库内部样式与 `DOMUtil.classNames` 详细模式 |
| [`global-coding-name.md`](./global-coding-name.md) | 变量、handler、queryParams 等 TS 命名 |
