# AI 文档（`.ai/docs`）

`.ai` 目录下的文档、规则、技能等，均面向 **AI 辅助开发**。生成或查阅本仓库代码时，**只需阅读 `.ai` 目录**（`docs`、`rules`、`skills`、`memory` 等），无需再翻 `src-docs`、`src/components` 下的站点文档或其它路径。

## 目录说明

### `examples/` — 页面示例（参考模板）

**供参考的完整页面示例**（列表、编辑、详情、报表等），供 [create-page](../skills/create-page/SKILL.md) 等技能选模板、生成业务页。

- 模板清单：[`examples/catalog.json`](examples/catalog.json)
- 说明：[`examples/README.md`](examples/README.md)

### `components/` — 组件文档

包含**组件用法示例**，以及 **Props、使用规则** 等属性说明，便于选对组件、写对参数。

典型文件（以 `Page` 为例）：

| 文件 | 用途 |
|------|------|
| `*-props.json` | Props 字段、类型、说明 |
| `*-rules.md` | 使用规则与约束 |
| `*-example.md` | 示例代码片段 |

索引：[`mapping.json`](mapping.json) 中的 `components` 条目。

### `utils/` — 工具文档

包含**工具用法示例**，以及 **API / 属性** 说明，便于在业务代码中正确调用。

文件组织与 `components/` 相同（`*-props.json`、`*-rules.md`、`*-example.md`）。

索引：[`mapping.json`](mapping.json) 中的 `utils` 条目。

## 如何使用

1. 生成业务页：查 `examples/catalog.json` 选模板，再结合 `components/`、`utils/` 中的 props 与 rules。
2. 关键词检索：查 [`mapping.json`](mapping.json)，按 `keywords` 定位组件/工具文档。
3. 扩展文档：在 `components/` 或 `utils/` 下新建目录，补齐 props、rules、example，并登记到 `mapping.json`。
