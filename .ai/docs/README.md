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

1. **推荐**：启用技能 [`docs`](../skills/docs/SKILL.md)，用 `resolve-docs.mjs` + `mapping.json` 检索后按需读 props/rules。
2. 新建组件：启用 [`add-component`](../skills/add-component/SKILL.md) → 问答收集需求 → 按 `reference/catalog.json` 选参考（**只读 `.ai/docs`**）→ 生成组件包并同步本目录。
3. 生成业务页：查 `pages/catalog.json` 选模板 → 读 `{Variant}-props.ts` + `{Variant}-rules.md` → 按需 Read `demos/`。
3. 关键词检索：查 [`mapping.json`](mapping.json)，按 `keywords` 定位组件/工具文档。
4. 扩展文档：直接编辑 `.ai/docs` 下对应文件，并更新 `mapping.json` 中的路径与 `keywords`（与 `src` 不一致时以 `src` 为准）。

## 为何 props 用 TypeScript

`*-props.ts` 使用 **interface / namespace + JSDoc**，而非 JSON 字符串：

- 联合类型（如 `'primary' | 'danger'`）可直接阅读，无需解析转义
- 子组件 Props 拆成独立 interface（如 `ButtonTextProps`、`FormItemProps`）
- 工具 API 用 `export namespace DateUtil { export function toDate(...) }` 表达
- 与业务代码同语言，AI 生成 props 时更不易编造枚举值

从 JSON 迁移 props 时可运行：`node .ai/skills/docs/scripts/convert-props-json-to-ts.mjs`

同步 demo 后刷新 example 索引：`node .ai/skills/docs/scripts/generate-example-index.mjs`（可加组件名只更新部分）

同步 demo 源码：`node .ai/skills/docs/scripts/sync-ai-docs-demos.mjs`（可加组件名只更新部分）
