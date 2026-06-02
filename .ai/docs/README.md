# AI 文档（`.ai/docs`）

供 AI 与开发者在生成/查阅代码时使用的结构化文档，与站点文档（`src-docs`、`src/components/*/index.zh-CN.md`）互补。

## 目录说明

### `examples/` — 页面示例（参考模板）

用于**参考的完整页面示例**（列表、编辑、详情、报表等），供 [create-page](../skills/create-page/SKILL.md) 等技能选用模板并生成业务页。

- 模板清单：[`examples/catalog.json`](examples/catalog.json)
- 说明：[`examples/README.md`](examples/README.md)
- 与 `src/examples/` 保持同构，改模板时请同步维护

### `components/` — 组件文档

不仅包含**组件用法示例**，还包含**组件属性（Props）与使用约定**的描述，便于生成页面时选对组件、写对参数。

典型文件（以 `Page` 为例）：

| 文件 | 用途 |
|------|------|
| `*-props.json` | Props 字段、类型、说明 |
| `*-rules.md` | 使用规则与约束 |
| `*-example.md` | 示例代码片段 |

索引：[`mapping.json`](mapping.json) 中的 `components` 条目。

站点上的交互 Demo 仍以 `src/components/<Name>/demos/` 与 `index.zh-CN.md` 为准。

### `utils/` — 工具文档

不仅包含**工具用法示例**，还包含**工具 API / 属性**的描述，便于在业务代码中正确调用。

文件组织与 `components/` 相同（`*-props.json`、`*-rules.md`、`*-example.md`）。

索引：[`mapping.json`](mapping.json) 中的 `utils` 条目。

实现代码与 Demo 见 `src/utils/<Name>/`。

## 如何使用

1. 生成业务页：先查 `examples/catalog.json` 选模板，再结合 `components/`、`utils/` 中的 props 与 rules。
2. 关键词检索：编辑 [`mapping.json`](mapping.json)，为组件/工具补充 `keywords` 与文档路径。
3. 新增组件/工具文档：在 `components/` 或 `utils/` 下新建同名目录，补齐 props、rules、example 三类文件并登记到 `mapping.json`。
