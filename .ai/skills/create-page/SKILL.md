---
name: create-page
description: >-
  问答式生成业务页面：让用户选择 docs/examples 模板、补充设计说明与接口信息，再按模板生成
  src/pages 页面。在用户要新建页面、搭列表/编辑/详情/报表页时使用。
---

# create-page

通过**多轮问答**收集需求，读取 `.ai/docs/examples/` 中的参考模板，生成新业务页面。

**约束：** 生成代码时**不要修改** `.ai/skills/`、`.ai/rules/`；遵守 `develop-page-structure.md`、`develop-sequence-import.md`、`develop-locale.md` 等 rules。

## 何时启用

- 用户说「生成页面」「新建列表页/编辑页/详情页」「create-page」
- 用户提供接口信息并要求搭页面骨架

## 准备

1. Read [`.ai/docs/examples/catalog.json`](../../docs/examples/catalog.json) — 模板清单（`id`、`title`、`templatePath`）。
2. Read [reference/generation.md](reference/generation.md) — 复制模板后的 API / 目录改写规则。

## 问答流程（必须按序，用 AskQuestion；无工具则逐条文字提问）

未完成收集前**不要**开始写业务代码。

### Q1 — 页面类型

**问题：** 你想生成什么页面？

- 从 `catalog.json` 的 `pages` 生成选项（展示 `category · title`，值为 `id`）。
- 可按 `List` / `Edit` / `Detail` / `Report` 分组；选项过多时分组两次问（先 category，再具体 `id`）。

记录：`templateId`、`templatePath`（拼成 `.ai/docs/examples/{templatePath}`）。

### Q2 — 高保真设计

**问题：** 页面有没有高保真设计稿？

| 选项 | 后续 |
|------|------|
| 有 | 请用户**上传图片**（可多张）。结合截图分析布局：Header/Main/Footer、表单项、列表样式等，写入 `designNotes`。 |
| 没有 | **问题：** 请用文字描述页面长什么样（模块、字段、交互）。记入 `designNotes`。 |

### Q3 — 接口

依次收集（可合并为一轮表单式提问）：

| 字段 | 说明 |
|------|------|
| `apiUrl` | 接口地址（如 `/api/order/list`） |
| `apiMethod` | `GET` 或 `POST`（默认与模板一致，不明则 POST） |
| `apiRequest` | 入参：字段名、类型、来源（`queryParams` / `Device.getUrlParameter` 等） |
| `apiResponse` | 出参：成功码字段、列表/对象字段、与前端 `result.status/data/message` 的映射 |

表述不清时追问一条澄清，不要猜测业务含义。

### Q4 — 输出位置

**问题：** 页面生成到哪里？

- 默认建议：`src/pages/{PageName}/`（`PageName` 用英文 PascalCase，列表以 `List`、编辑以 `Edit`、详情以 `Detail` 结尾，见 rules）。
- 入口组件名与目录末级一致（如 `src/pages/OrderList` → `OrderList`）。

### Q5 — 确认（可选）

用简短摘要列出：模板、路径、`designNotes` 要点、接口三要素。用户确认后再生成。

## 生成步骤

1. **读模板** — 递归 Read `.ai/docs/examples/{templatePath}/`（至少 `index.tsx`、`api/**`、子组件入口）。必要时对照 `src/examples/` 同路径（若存在）但以 `.ai/docs/examples` 为准。
2. **写 `page-spec.json`** — 在目标页面目录写入本次问答结果（见 [reference/page-spec.schema.json](reference/page-spec.schema.json)），便于后续改动。
3. **复制并改写** — 按模板目录结构创建 `src/pages/{PageName}/`：
   - 保留模板的 Header / Main / Footer / api 分层；
   - 按 `reference/generation.md` 替换 URL、method、payload/response 转换；
   - 按 `designNotes` 增删表单项、列表列、文案（`LocaleUtil.locale`）；
   - 删除模板中不需要的 demo 专有逻辑（如 mock、console.log）。
4. **校验** — `npx tsc --noEmit`；修复新增文件中的类型错误。

## 产出清单

- `src/pages/{PageName}/index.tsx` 及子目录
- `src/pages/{PageName}/page-spec.json`
- 向用户说明：模板来源、主要改动、如何联调接口

## 不允许

- 跳过问答直接生成
- 改动 `.ai/skills/create-page` 或 `.ai/rules` 内文件
- 使用与 catalog 无关的随意目录当模板（除非用户明确指定路径）
