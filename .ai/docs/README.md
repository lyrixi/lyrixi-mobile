# AI 文档（`.ai/docs`）

`.ai` 目录下的文档、规则、技能等，均面向 **AI 辅助开发**。生成或查阅本仓库代码时，**只需阅读 `.ai` 目录**（`docs`、`rules`、`skills`、`memory` 等），无需再翻 `src-docs`、`src/components` 下的站点文档或其它路径。

## 目录说明

### `examples/` — 页面示例（参考模板）

**供参考的完整页面示例**（列表、编辑、详情、报表等），供 [create-page](../skills/create-page/SKILL.md) 等技能选模板、生成业务页。

- 模板清单：[`examples/catalog.json`](examples/catalog.json)
- 说明：[`examples/README.md`](examples/README.md)

### `components/` — 组件文档

与 `src/components/` **一一对应**（当前 57 个组件），供 AI 查阅 Props、规则与示例，减少生成代码时的幻觉。

| 文件 / 目录 | 用途 |
|-------------|------|
| `{Name}-props.json` | Props / Ref（由站点文档 API 表生成） |
| `{Name}-rules.md` | 何时使用、子组件、必须用库组件 |
| `{Name}-example.md` | 示例说明与代码摘录 |
| `demos/` | 与 `src/components/{Name}/demos` 同步的示例源码 |

修改组件文档或 demo 后，在仓库根目录执行 `npm run build:ai-docs` 重新生成。

索引：[`mapping.json`](mapping.json) 的 `components`；目录说明：[`components/README.md`](components/README.md)。

### `utils/` — 工具文档

包含**工具用法示例**，以及 **API / 属性** 说明，便于在业务代码中正确调用。

文件组织与 `components/` 相同（`*-props.json`、`*-rules.md`、`*-example.md`）。

索引：[`mapping.json`](mapping.json) 中的 `utils` 条目。

## 如何使用

1. 生成业务页：查 `examples/catalog.json` 选模板，再结合 `components/`、`utils/` 中的 props 与 rules。
2. 关键词检索：查 [`mapping.json`](mapping.json)，按 `keywords` 定位组件/工具文档。
3. 扩展组件文档：改 `src/components/{Name}/index.zh-CN.md` 或 demos 后执行 `npm run build:ai-docs`。
4. 扩展工具文档：在 `utils/` 下手工维护或后续补充生成脚本。
