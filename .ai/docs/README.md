# AI 文档（`.ai/docs`）

`.ai` 目录下的文档、规则、技能等，均面向 **AI 辅助开发**。生成或查阅本仓库代码时，**只需阅读 `.ai` 目录**（`docs`、`rules`、`skills`、`memory` 等），无需再翻 `src-docs`、`src/components` 下的站点文档或其它路径。

## 目录说明

### `pages/` — 页面模板

**列表 / 编辑 / 详情 / 报表** 参考模板，供 [create-page](../skills/create-page/SKILL.md) 生成 `src/pages/`。

- 模板清单：[`pages/catalog.json`](pages/catalog.json)（含 `props` / `rules` / `example` 路径）
- 说明：[`pages/README.md`](pages/README.md)

每个模板三件套：`{Variant}-props.ts`（可替换项）、`{Variant}-rules.md`、`{Variant}-example.md` + `demos/{Variant}/` 源码。

### `components/` — 组件文档

与 `src/components/` **一一对应**，供 AI 查阅 Props、规则与示例，减少生成代码时的幻觉。新建库组件时使用 [add-component](../skills/add-component/SKILL.md)（参考模板见 `add-component/reference/catalog.json`）。

| 文件 / 目录 | 用途 |
|-------------|------|
| `{Name}-props.ts` | Props / Ref |
| `{Name}-rules.md` | 何时使用、子组件、必须用库组件 |
| `{Name}-example.md` | Demo 索引（链到 `demos/`，不含完整代码） |
| `demos/` | 示例源码（与 `src` 同步，AI 读代码时读此目录） |

索引：[`mapping.json`](mapping.json) 的 `components`；目录说明：[`components/README.md`](components/README.md)。

### `utils/` — 工具文档

与 `src/utils/` **导出工具一一对应**，供 AI 查阅 API、规则与示例。

| 文件 / 目录 | 用途 |
|-------------|------|
| `{Name}-props.ts` | API / 方法 |
| `{Name}-rules.md` | 何时使用、必须使用库工具、demo 索引 |
| `{Name}-example.md` | Demo 索引（链到 `demos/`，不含完整代码） |
| `demos/` | 示例源码（与 `src` 同步，AI 读代码时读此目录） |

索引：[`mapping.json`](mapping.json) 的 `utils`；目录说明：[`utils/README.md`](utils/README.md)。

## 如何使用

### 写代码（查阅文档）

启用技能 [`docs`](../skills/docs/SKILL.md)：用 `resolve-docs.mjs` + `mapping.json` 检索，按需读 props / rules / demos。

- 生成业务页：查 `pages/catalog.json` → 读 `{Variant}-props.ts` + `{Variant}-rules.md`
- 新建库组件：[`add-component`](../skills/add-component/SKILL.md) + [`docs`](../skills/docs/SKILL.md) 查阅依赖组件

### 维护文档（从 src 同步）

`src` 变更后启用技能 [`sync-ai-docs`](../skills/sync-ai-docs/SKILL.md)，或执行：

```bash
npm run build:ai-docs
npm run check:ai-docs   # CI：检查 props 漂移
```

## 为何 props 用 TypeScript

`*-props.ts` 使用 **interface / namespace + JSDoc**，而非 JSON 字符串：

- 联合类型（如 `'primary' | 'danger'`）可直接阅读，无需解析转义
- 子组件 Props 拆成独立 interface（如 `ButtonTextProps`、`FormItemProps`）
- 工具 API 用 `export namespace DateUtil { export function toDate(...) }` 表达
- 与业务代码同语言，AI 生成 props 时更不易编造枚举值

分步脚本与手工编辑原则见 [`sync-ai-docs` 技能](../skills/sync-ai-docs/SKILL.md)。
