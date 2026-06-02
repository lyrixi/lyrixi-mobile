# 组件 AI 文档

与 `src/components/` 一一对应，供 AI **仅查阅本目录** 生成业务代码，避免幻觉。

| 文件 | 说明 |
|------|------|
| `{Name}-props.json` | Props / Ref（由 `index.zh-CN.md` API 表生成） |
| `{Name}-rules.md` | 何时使用、子组件、必须使用库组件 |
| `{Name}-example.md` | 示例索引与代码摘录 |
| `demos/` | 与 `src/components/{Name}/demos` 同步的示例源码 |

**更新：** 修改组件文档或 demo 后执行：

```bash
npm run build:ai-docs
```

索引：[`../mapping.json`](../mapping.json)
