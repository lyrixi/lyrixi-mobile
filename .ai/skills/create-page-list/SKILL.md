---
name: create-page-list
description: >-
  列表页架构参考：说明 Header/Main/Footer/api 目录职责，以及 List 类模板在
  .ai/docs/pages/List 中的选型与源码位置。在用户新建列表页、搭分页/筛选列表、
  或提到 create-page-list、列表页架构时使用。
---

# create-page-list

列表页**目录架构**与 **`.ai/docs/pages/List/`** 参考模板说明。完整问答生成流程见 [create-page](../create-page/SKILL.md)。

**约束：** 遵守 [`.ai/rules/develop-page-structure.md`](../../rules/develop-page-structure.md)、`develop-sequence-import.md`、`global-coding-locale.md`。生成代码时**不要修改** `.ai/rules/`。

## 何时启用

- 用户要新建**列表页**（分页列表、筛选列表、IndexBar、虚拟滚动、手动加载）
- 用户问列表页的 Header / Main / api 该怎么拆
- 用户说「create-page-list」「列表页架构」「参考列表模板」

## 页面命名

后缀用 `List`（下钻仍为列表时用 `Record`）。见 `develop-page-structure.md`。

## 目录架构（业务页通用）

列表页在 `src/pages/{PageName}/` 下按区域拆分，数据请求与转换集中在 `api/`：

```
{PageName}/
├── index.tsx          # 入口：queryParams、组合 Header / Main / Footer
├── index.less         # 页面样式（可选）
├── types.ts           # 页面级类型（可选）
├── api/               # 数据请求、server/local 转换
│   └── queryData/     # 列表查询（或 api/index.ts 统一导出）
├── Header/            # 头部：搜索、筛选（Filter 子目录）
├── Main/              # 列表主体：ListPagination / ListAsync / IndexBar 等
├── Footer/            # 底部操作（可选；缓存列表用于保存/清除缓存）
└── utils/             # 页面级工具（可选）
```

### 各文件夹职责

| 文件夹 | 职责 | 列表页典型内容 |
|--------|------|----------------|
| `index.tsx` | 页面入口，`Page` 容器 | `[queryParams, setQueryParams]`；`Header` onSearch 更新参数；`Main` 传入 `queryParams`、`cacheName` |
| `Header/` | 头部 UI，暴露 `onSearch` 等 | `ToolBar` 搜索；`Header/Filter/` 筛选项 |
| `Main/` | 主列表区域 | `ListPagination.Main` 或 `ListAsync`；`formatPayload`（入参）、`formatResult`（出参）、`formatViewItem`（行渲染） |
| `Footer/` | 底部按钮（可选） | 缓存列表：保存/清除 Storage |
| `api/` | 请求与数据转换 | `queryData`；`serverData` / `localData` 命名见 rules |

### api 命名约定

- 查询：`queryXxx`（列表为 `queryData`）
- 前端 → 服务端：`serverXxx`（如 `serverData`、`formatPayload`）
- 服务端 → 前端：`localXxx`（如 `localData`、`formatResult`）

### index.tsx 骨架

```tsx
const [queryParams, setQueryParams] = useState({})

return (
  <Page>
    <Header
      queryParams={queryParams}
      onSearch={(newQueryParams) => setQueryParams(newQueryParams)}
    />
    <Main cacheName="..." queryParams={queryParams} />
    {/* Footer 按需 */}
  </Page>
)
```

## 参考文档位置（`.ai/docs/pages/List/`）

每个模板在 `List/` 下有三件套 + demo 源码：

| 文件 | 用途 |
|------|------|
| `{Variant}-props.ts` | 可替换项（api、filters、listItem、cacheName 等） |
| `{Variant}-rules.md` | 何时用、目录结构、替换点、禁止项 |
| `{Variant}-example.md` | Demo 索引，链到 `demos/{Variant}/` |
| `demos/{Variant}/` | 完整参考源码 |

公共类型：[`types/PageTemplate.types.ts`](../../docs/pages/types/PageTemplate.types.ts)

清单索引：[`catalog.json`](../../docs/pages/catalog.json)（`category: "List"` 条目）

## 模板选型（List）

| id | 标题 | 源码 | 适用场景 |
|----|------|------|----------|
| `list-common` | 普通列表 | `List/demos/Common/` | 标准分页，`ListPagination` 自动加载；Header 筛选 + Main 列表 |
| `list-cache` | 缓存列表 | `List/demos/Cache/` | 在 Common 基础上 + Storage 缓存 queryParams/列表状态；复用 Common 的 Header/Main |
| `list-indexbar` | IndexBar 列表 | `List/demos/IndexBar/` | 字母索引分组列表 |
| `list-virtual` | 虚拟滚动列表 | `List/demos/Virtual/` | 长列表虚拟滚动 |
| `list-common-manual` | 手动加载列表 | `List/demos/CommonManual/` | `ListAsync`，手动触发加载/刷新 |

选定模板后 Read：

1. `List/{Variant}-props.ts`
2. `List/{Variant}-rules.md`
3. 需要代码细节时再 Read `List/demos/{Variant}/`（至少 `index.tsx`、`Main/`、`api/`）

## Common 模板目录详解（最常用）

`List/demos/Common/` 结构可作为其他 List 变体的基准：

```
Common/
├── index.tsx
├── index.less
├── Header/
│   ├── index.tsx
│   ├── types.ts
│   └── Filter/
│       ├── index.tsx
│       └── types.ts
├── Main/
│   ├── index.tsx          # ListPagination.Main、url、cacheName
│   ├── formatPayload.ts   # queryParams → 请求体
│   ├── formatResult.ts    # 响应 → 列表数据
│   ├── formatViewItem.tsx # 单行渲染
│   ├── types.ts
│   └── mockResult.ts      # demo 用，业务页删除
├── Footer/                # 本模板默认占位，Cache 变体启用
└── api/                   # 部分模板在 Main 内直连 url，或独立 api/
```

`list-cache` **复用** `Common` 的 Header、Main、Footer，主要改 `cacheName` 与 Footer 文案（见 `Cache-rules.md`）。

## 与 create-page 的关系

- **本技能**：理解列表页架构、选对模板、知道各目录改什么。
- **create-page**：多轮问答收集接口/mock/输出路径后，按模板生成 `src/pages/` 业务代码。

需要直接生成页面时，启用 [create-page](../create-page/SKILL.md) 并在 Q1 选 `List` 大类。

## 不允许

- 在列表页 `Main/` 外散落请求逻辑（应走 `api/` 或 `format*`）
- 随意自造与 `develop-page-structure.md` 冲突的目录名
- 跳过 Read `props` + `rules` 直接照抄 demo 中的 `/api/examples/*` mock
