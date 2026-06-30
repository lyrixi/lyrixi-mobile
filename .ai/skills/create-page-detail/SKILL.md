---
name: create-page-detail
description: >-
  详情页架构参考：说明只读 Form/Footer/api 目录职责，以及 Detail 类模板在
  .ai/docs/pages/Detail 中的选型与源码位置。在用户新建详情页、只读展示页、
  或提到 create-page-detail、详情页架构时使用。
---

# create-page-detail

详情页**目录架构**与 **`.ai/docs/pages/Detail/`** 参考模板说明。完整问答生成流程见 [create-page](../create-page/SKILL.md)。

**约束：** 遵守 [`.ai/rules/page-structure.md`](../../rules/page-structure.md)、`sequence-import.md`、`global-coding-locale.md`。生成代码时**不要修改** `.ai/rules/`。

## 何时启用

- 用户要新建**详情页**（只读展示、审批/确认 Footer）
- 用户问详情页与编辑页的区别、只读 Form 怎么写
- 用户说「create-page-detail」「详情页架构」「参考详情模板」

## 页面命名

后缀用 `Detail`（只读展示）。见 `page-structure.md`。

## 详情页 vs 编辑页

| 维度 | 详情页（Detail） | 编辑页（Edit） |
|------|------------------|----------------|
| 表单 | **只读**展示（`Text` 等） | 可编辑控件 |
| 主接口 | `queryData` | `queryData` + `saveData` |
| Footer | 审批/确认（`approveData`，可选） | 保存（`saveData`） |
| 禁止 | **不要** `saveData` | — |

## 目录架构（业务页通用）

详情页结构比编辑页更轻，通常无 `validateData` / `saveData`：

```
{PageName}/
├── index.tsx          # 入口：loadData、只读 Form、handleApprove
├── types.ts           # 详情数据、审批结果类型
├── api/
│   ├── index.ts       # 导出 queryData、approveData
│   ├── queryData/     # 加载详情
│   └── approveData/   # 审批/确认（可选）
└── Footer/            # 审批按钮（无审批时可省略）
```

### 各文件夹职责

| 文件夹 | 职责 | 详情页典型内容 |
|--------|------|----------------|
| `index.tsx` | 只读展示 | `queryData` 加载；`Form` + `Form.Item` + `Text`；`Result` 空/错态 |
| `Footer/` | 底部操作 | 审批通过按钮 → `handleApprove` |
| `api/queryData/` | 详情接口 | id 来自 URL；映射到展示字段 |
| `api/approveData/` | 审批接口 | 防重复 `token`；成功 Toast |

详情页**无 Header / Main**（字段在 `index.tsx` 内用 `Card` / `Divider` 分组展示）。

### api 命名约定

- 查询：`queryData`
- 审批/确认：`approveData`（非 `saveData`）
- 无提交保存接口

### index.tsx 骨架

```tsx
const tokenRef = useRef(String(Date.now()))

async function loadData() {
  const newResult = await queryData()
  setResult(newResult)
}

async function handleApprove() {
  const res = await approveData({ token: tokenRef.current })
  // Toast；code === '2' 防重复
}

return (
  <Page>
    <Form>
      <Form.Item label="字段" name="field">
        <Text />
      </Form.Item>
    </Form>
    <Footer onApprove={handleApprove} />
  </Page>
)
```

## 参考文档位置（`.ai/docs/pages/Detail/`）

| 文件 | 用途 |
|------|------|
| `{Variant}-props.ts` | 可替换项（displayFields、api、footer 文案） |
| `{Variant}-rules.md` | 何时用、目录结构、替换点、禁止项 |
| `{Variant}-example.md` | Demo 索引 |
| `demos/{Variant}/` | 完整参考源码 |

公共类型：[`types/PageTemplate.types.ts`](../../docs/pages/types/PageTemplate.types.ts)

清单索引：[`catalog.json`](../../docs/pages/catalog.json)（`category: "Detail"` 条目）

## 模板选型（Detail）

| id | 标题 | 源码 | 适用场景 |
|----|------|------|----------|
| `detail-form` | 只读详情（表单展示） | `Detail/demos/Form/` | Form 只读字段 + 可选 Footer 审批 |

当前 Detail 类仅 `detail-form` 一套模板；多区块展示可参照其 `Card` / `Divider` 分组方式扩展。

选定后 Read：

1. `Detail/Form-props.ts`
2. `Detail/Form-rules.md`
3. `Detail/demos/Form/`（`index.tsx`、`api/`、`Footer/`）

## Form 模板目录详解

`Detail/demos/Form/` 结构：

```
Form/
├── index.tsx
├── types.ts
├── Footer/
│   └── index.tsx
└── api/
    ├── index.ts
    ├── queryData/
    │   └── index.ts
    └── approveData/
        └── index.ts
```

### create-page 替换点

| page-spec / props 字段 | 代码位置 |
|------------------------|----------|
| `displayFields` | `index.tsx` 只读 `Form.Item` + `Text` |
| `api.queryData` | `loadData`、`api/queryData/` |
| `api.approveData` | `handleApprove`、`Footer/` |
| `design.designNotes` | `Card` / `Divider` 分组与字段增删 |

## 禁止项

- 详情页添加 `saveData` 或可编辑输入控件
- 误用编辑页模板生成只读页
- 照抄 demo mock 路径（`/api/examples/*`）

## 与 create-page 的关系

- **本技能**：理解详情页只读架构、`queryData` / `approveData` 分工。
- **create-page**：问答后生成 `src/pages/` 业务代码。

需要直接生成页面时，启用 [create-page](../create-page/SKILL.md) 并在 Q1 选 `Detail` 大类。

## 不允许

- 在详情页实现表单编辑与保存
- 跳过 Read `Form-props.ts` + `Form-rules.md` 直接写页面
