---
name: create-page-edit
description: >-
  编辑页架构参考：说明 Form/Footer/api 目录职责，以及 Edit 类模板在
  .ai/docs/pages/Edit 中的选型与源码位置。在用户新建编辑页、表单提交页、
  或提到 create-page-edit、编辑页架构时使用。
---

# create-page-edit

编辑页**目录架构**与 **`.ai/docs/pages/Edit/`** 参考模板说明。完整问答生成流程见 [create-page](../create-page/SKILL.md)。

**约束：** 遵守 [`.ai/rules/page-structure.md`](../../rules/page-structure.md)、`sequence-import.md`、`global-coding-locale.md`。生成代码时**不要修改** `.ai/rules/`。

## 何时启用

- 用户要新建**编辑页**（新建/修改表单、带校验提交、草稿缓存）
- 用户问编辑页的 Form / api/saveData / validateData 该怎么组织
- 用户说「create-page-edit」「编辑页架构」「参考编辑模板」

## 页面命名

后缀用 `Edit`。见 `page-structure.md`。

## 目录架构（业务页通用）

编辑页以 `Form` 为中心，加载、校验、提交均在 `api/` 完成：

```
{PageName}/
├── index.tsx          # 入口：Form、loadData、handleSave、Result 全屏态
├── index.less         # 页面样式（可选）
├── types.ts           # 表单数据、接口结果类型
├── api/
│   ├── index.ts       # 统一导出 queryData / saveData / validateData
│   ├── queryData/     # 加载详情或空白表单
│   ├── saveData/      # 提交（serverData 转换）
│   ├── validateData/  # 提交前校验（可选）
│   └── cacheConfig.ts # Storage 草稿配置（仅 Cache 模板）
├── Footer/            # 提交按钮，onSave → handleSave
└── utils/             # 页面级工具（可选，如 scrollToErrorElement）
```

编辑页**通常无 Header / Main**（字段直接在 `index.tsx` 的 `Form` 内，或用 `Card` / `Divider` 分组）。复杂布局可拆子组件，但保持 `api/` 集中数据逻辑。

### 各文件夹职责

| 文件夹 | 职责 | 编辑页典型内容 |
|--------|------|----------------|
| `index.tsx` | `Form.useForm()`、`loadData`、`handleSave` | `useEffect` 调 `queryData`；`Form.Item` + 控件；`Result` 空/错态 |
| `Footer/` | 底部提交 | `FooterBar` 保存按钮，触发 `onSave` |
| `api/queryData/` | 初始化数据 | id 来自 URL；`localData` 转表单值 |
| `api/saveData/` | 提交 | `serverData` 转请求体；防重复 `token` |
| `api/validateData/` | 校验 | 失败时 `scrollToErrorElement` |
| `api/cacheConfig.ts` | 草稿键名 | 仅 `edit-cache` 模板 |

### api 命名约定

- 查询：`queryData`（编辑页加载已有数据）
- 增/改提交：`saveData`
- 校验：`validateData`
- 转换：`serverData`（表单 → 接口）、`localData`（接口 → 表单）

### index.tsx 骨架

```tsx
const [form] = Form.useForm()
const tokenRef = useRef(String(Date.now()))

async function loadData() {
  const newResult = await queryData()
  setResult(newResult)
  // 成功时 form.setFieldsValue(localData)
}

async function handleSave() {
  const res = await saveData({ token: tokenRef.current, ... })
  // Toast、防重复 code === '2'
}

return (
  <Page>
  <Form form={form}>...</Form>
  <Footer onSave={handleSave} />
  </Page>
)
```

## 参考文档位置（`.ai/docs/pages/Edit/`）

| 文件 | 用途 |
|------|------|
| `{Variant}-props.ts` | 可替换项（api、formFields、footer 文案） |
| `{Variant}-rules.md` | 何时用、目录结构、替换点、禁止项 |
| `{Variant}-example.md` | Demo 索引 |
| `demos/{Variant}/` | 完整参考源码 |

公共类型：[`types/PageTemplate.types.ts`](../../docs/pages/types/PageTemplate.types.ts)

清单索引：[`catalog.json`](../../docs/pages/catalog.json)（`category: "Edit"` 条目）

## 模板选型（Edit）

| id | 标题 | 源码 | 适用场景 |
|----|------|------|----------|
| `edit-common` | 表单编辑（全量控件） | `Edit/demos/Common/` | 新建/编辑；多种 Form 控件 demo；**无** Storage 草稿 |
| `edit-cache` | 带缓存的表单编辑 | `Edit/demos/Cache/` | 需 Storage 草稿（无 id 新增恢复、离开再进保留） |
| `edit-virtual` | 虚拟滚动表单编辑 | `Edit/demos/Virtual/` | 字段极多、需虚拟滚动 Form |

注意：`Edit/demos/Common/index.tsx` 为控件展示，实际 **api / Footer** 引用 `Cache` 目录实现；生成业务页时以 `Cache` 的 `api/` 结构为完整参考。

选定模板后 Read：

1. `Edit/{Variant}-props.ts`
2. `Edit/{Variant}-rules.md`
3. `Edit/demos/Cache/`（api 完整结构）+ `Edit/demos/{Variant}/`（表单字段）

## Cache 模板目录详解（api 完整参考）

`Edit/demos/Cache/` 是编辑页 api 层的标准结构：

```
Cache/
├── index.tsx
├── types.ts
├── Footer/
│   └── index.tsx
└── api/
    ├── index.ts
    ├── cacheConfig.ts       # Storage 键前缀
    ├── queryData/
    │   └── index.ts
    ├── saveData/
    │   ├── index.ts
    │   └── serverData.ts
    └── validateData/
        ├── index.ts
        └── scrollToErrorElement.ts
```

`edit-common` 替换点：增删 `Form.Item`、改 `api.*` URL、去掉 demo 专有 mock。

`edit-cache` 额外替换：`cacheConfig.name`、真实 query/save URL。

## 禁止项（Edit 通用）

- 使用已废弃 Button API（用 `variant` + `color`）
- 在 `index.tsx` 内直接 `fetch` 而不经 `api/`
- 详情只读页误用 `saveData`（应使用 [create-page-detail](../create-page-detail/SKILL.md)）

## 与 create-page 的关系

- **本技能**：理解编辑页架构、api 三分法、选对 Edit 模板。
- **create-page**：问答后生成 `src/pages/` 业务代码。

需要直接生成页面时，启用 [create-page](../create-page/SKILL.md) 并在 Q1 选 `Edit` 大类。

## 不允许

- 跳过 `validateData` 约定直接提交（模板有校验层时保留）
- 照抄 demo 中 `/api/examples/*` 与 `console.log`
- 编辑页使用 `approveData`（审批属详情页）
